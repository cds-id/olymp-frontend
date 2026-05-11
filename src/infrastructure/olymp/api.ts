import { getToken } from "../../presentation/auth/session";

export interface ApiEnvelope<T> {
  data: T | null;
  error?: { code: string; message: string } | null;
  meta?: { page?: number; per_page?: number; total?: number; total_pages?: number } | null;
}

export interface ListQuery {
  page?: number;
  per_page?: number;
  q?: string;
  status?: string;
  event_id?: string;
  stage_id?: string;
}

const API_BASE = import.meta.env.VITE_OLYMP_API_URL ?? "http://localhost:3000";

function qs(query?: ListQuery) {
  const params = new URLSearchParams();
  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") params.set(key, String(value));
  });
  const text = params.toString();
  return text ? `?${text}` : "";
}

export class ApiError extends Error {
  constructor(public status: number, message: string, public code?: string) {
    super(message);
  }
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<ApiEnvelope<T>> {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(`${API_BASE}${path}`, { ...init, headers });
  const body = (await res.json().catch(() => null)) as ApiEnvelope<T> | null;
  if (!res.ok) {
    throw new ApiError(res.status, body?.error?.message ?? res.statusText, body?.error?.code);
  }
  return body ?? { data: null, meta: null };
}

export const olympApi = {
  login: (username: string, password: string) => api<AuthResponse>("/api/auth/login", { method: "POST", body: JSON.stringify({ username, password }) }),
  me: () => api<UserProfile>("/api/users/me"),
  roles: () => api<MyRolesResponse>("/api/users/me/roles"),

  provinces: () => api<Province[]>("/api/provinces"),
  districts: (provinceId: string) => api<District[]>(`/api/provinces/${provinceId}/districts`),
  educationLevels: () => api<EducationLevel[]>("/api/education-levels"),
  subjects: () => api<Subject[]>("/api/subjects"),

  events: (query: ListQuery) => api<Event[]>(`/api/events${qs(query)}`),
  event: (id: string) => api<Event>(`/api/events/${id}`),
  createEvent: (body: { name: string; academic_year: string }) => api<Event>("/api/events", { method: "POST", body: JSON.stringify(body) }),
  updateEvent: (id: string, body: Partial<{ name: string; academic_year: string; status: string }>) => api<Event>(`/api/events/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  stages: (eventId: string) => api<Stage[]>(`/api/events/${eventId}/stages`),
  createStage: (eventId: string, body: Partial<Stage> & { tier: string }) => api<Stage>(`/api/events/${eventId}/stages`, { method: "POST", body: JSON.stringify(body) }),
  updateStage: (stageId: string, body: Partial<Stage>) => api<Stage>(`/api/stages/${stageId}`, { method: "PUT", body: JSON.stringify(body) }),
  availableStages: (eventId: string, query?: ListQuery) => api<StageWithEnrollment[]>(`/api/events/${eventId}/stages/available${qs(query)}`),
  stageStatus: (stageId: string, status: string) => api<Stage>(`/api/stages/${stageId}/status`, { method: "PUT", body: JSON.stringify({ status }) }),
  categories: (eventId: string) => api<EventCategory[]>(`/api/events/${eventId}/categories`),

  eventParticipants: (eventId: string, query: ListQuery) => api<Participant[]>(`/api/events/${eventId}/participants${qs(query)}`),
  stageParticipants: (stageId: string, query: ListQuery) => api<ParticipantListItem[]>(`/api/stages/${stageId}/participants${qs(query)}`),
  myParticipations: () => api<Participant[]>("/api/users/me/participations"),
  verifyParticipant: (id: string) => api<ParticipantStage>(`/api/participants/${id}/verify`, { method: "POST" }),
  approveParticipant: (id: string) => api<ParticipantStage>(`/api/participants/${id}/approve`, { method: "POST" }),
  rejectParticipant: (id: string) => api<ParticipantStage>(`/api/participants/${id}/reject`, { method: "POST" }),
  batchVerify: (stageId: string, participant_ids?: string[]) => api<BatchResult>(`/api/stages/${stageId}/participants/batch-verify`, { method: "POST", body: JSON.stringify({ participant_ids }) }),
  batchApprove: (stageId: string, participant_ids?: string[]) => api<BatchResult>(`/api/stages/${stageId}/participants/batch-approve`, { method: "POST", body: JSON.stringify({ participant_ids }) }),
  batchReject: (stageId: string, participant_ids?: string[]) => api<BatchResult>(`/api/stages/${stageId}/participants/batch-reject`, { method: "POST", body: JSON.stringify({ participant_ids }) }),

  exams: (stageId: string) => api<Exam[]>(`/api/stages/${stageId}/exams`),
  createExam: (stageId: string, body: Partial<Exam> & { title: string; duration_minutes: number; description?: string }) => api<Exam>(`/api/stages/${stageId}/exams`, { method: "POST", body: JSON.stringify(body) }),
  updateExam: (examId: string, body: Partial<Exam>) => api<Exam>(`/api/exams/${examId}`, { method: "PUT", body: JSON.stringify(body) }),
  questions: (examId: string, query: ListQuery) => api<Question[]>(`/api/exams/${examId}/questions${qs(query)}`),
  createQuestion: (examId: string, body: Partial<Question> & { question_text: string; question_type: string; points: number; sequence: number }) => api<Question>(`/api/exams/${examId}/questions`, { method: "POST", body: JSON.stringify(body) }),
  updateQuestion: (examId: string, questionId: string, body: Partial<Question>) => api<Question>(`/api/exams/${examId}/questions/${questionId}`, { method: "PUT", body: JSON.stringify(body) }),
  examProgress: (examId: string) => api<ExamProgress[]>(`/api/exams/${examId}/progress`),
  assignSession: (examId: string, participant_stage_id: string) => api<ExamSession>(`/api/exams/${examId}/sessions`, { method: "POST", body: JSON.stringify({ participant_stage_id }) }),

  ranking: (stageId: string) => api<RankingResultWithEntries>(`/api/stages/${stageId}/ranking`),
  rankingRule: (stageId: string) => api<RankingRule>(`/api/stages/${stageId}/ranking/rules`),
  calculateRanking: (stageId: string) => api<RankingResult>(`/api/stages/${stageId}/ranking/calculate`, { method: "POST" }),
  reviewRanking: (stageId: string) => api<RankingResult>(`/api/stages/${stageId}/ranking/review`, { method: "POST" }),
  approveRanking: (stageId: string) => api<RankingResult>(`/api/stages/${stageId}/ranking/approve`, { method: "POST" }),
  publishRanking: (stageId: string) => api<RankingResult>(`/api/stages/${stageId}/ranking/publish`, { method: "POST" }),
  promote: (stageId: string) => api<PromotionResult>(`/api/stages/${stageId}/promote`, { method: "POST" }),

  templates: (eventId: string) => api<CertificateTemplate[]>(`/api/events/${eventId}/certificates/templates`),
  generateCertificates: (stageId: string, template_id?: string, participant_stage_ids?: string[]) => api<GenerationResult>(`/api/stages/${stageId}/certificates/generate`, { method: "POST", body: JSON.stringify({ template_id, participant_stage_ids }) }),
  participantCertificates: (participantId: string) => api<Certificate[]>(`/api/participants/${participantId}/certificates`),

  rolesList: () => api<Role[]>("/api/rbac/roles"),
  createRole: (body: { name: string; description?: string }) => api<Role>("/api/rbac/roles", { method: "POST", body: JSON.stringify(body) }),
  updateRole: (roleId: string, body: { name?: string; description?: string }) => api<Role>(`/api/rbac/roles/${roleId}`, { method: "PUT", body: JSON.stringify(body) }),
  rolePermissions: (roleId: string) => api<Permission[]>(`/api/rbac/roles/${roleId}/permissions`),
  assignRolePermissions: (roleId: string, permission_ids: string[]) => api<{ message: string }>(`/api/rbac/roles/${roleId}/permissions`, { method: "POST", body: JSON.stringify({ permission_ids }) }),
  permissions: () => api<Permission[]>("/api/rbac/permissions"),
  assignments: (query: ListQuery) => api<UserRoleAssignment[]>(`/api/rbac/assignments${qs(query)}`),
  createAssignment: (body: { user_id: string; role_id: string; event_id?: string; stage_id?: string; province_id?: string; district_id?: string; expires_at?: string }) => api<UserRoleAssignment>("/api/rbac/assignments", { method: "POST", body: JSON.stringify(body) }),
  updateAssignment: (id: string, body: { is_active?: boolean; expires_at?: string }) => api<UserRoleAssignment>(`/api/rbac/assignments/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  deleteAssignment: (id: string) => api<{ message: string }>(`/api/rbac/assignments/${id}`, { method: "DELETE" }),
  auditLogs: (query: ListQuery) => api<AuditLog[]>(`/api/audit-logs${qs(query)}`),
};

export interface AuthResponse { access_token: string; refresh_token: string; user_id: string; email: string }
export interface UserProfile { id: string; email: string; username?: string | null; name?: string | null; phone?: string | null }
export interface MyRolesResponse { roles: string[]; permissions: string[]; is_staff: boolean; is_admin: boolean }
export interface Event { id: string; name: string; slug: string; academic_year: string; status: string; created_at?: string }
export interface Stage { id: string; event_id: string; name?: string | null; tier: string; sequence: number; status: string; location?: string | null; capacity?: number | null; registration_opens_at?: string | null; registration_closes_at?: string | null; started_at?: string | null; ended_at?: string | null }
export interface StageWithEnrollment extends Stage { enrolled_count?: number; capacity?: number }
export interface EducationLevel { id: string; name: string }
export interface Subject { id: string; name: string }
export interface EventCategory { id: string; education_level_id: string; subject_id: string }
export interface Province { id: string; name: string }
export interface District { id: string; name: string; province_id: string }
export interface Participant { id: string; user_id: string; event_id: string; full_name?: string; school_name?: string; created_at?: string }
export interface ParticipantStage { id: string; participant_id: string; stage_id: string; status: string; score?: number; cheating_log_count?: number }
export interface ParticipantListItem extends Record<string, unknown> { id: string; user_id: string; school_name?: string | null; district_id?: string | null; province_id?: string | null; stage_status?: string | null; score?: number | null; rank?: number | null }
export interface BatchResult { affected: number; skipped: number; errors: string[] }
export interface Exam { id: string; stage_id: string; title: string; description?: string | null; opens_at?: string | null; closes_at?: string | null; duration_minutes?: number }
export interface Question extends Record<string, unknown> { id: string; exam_id: string; question_text: string; question_type: string; options?: unknown; correct_answer?: unknown; points: number; sequence: number; created_at?: string }
export interface ExamSession { id: string; exam_id: string; participant_stage_id: string; status: string; started_at?: string | null; finished_at?: string | null; score?: number | null; completion_time_secs?: number | null; is_auto_submitted?: boolean; created_at?: string }
export interface ExamProgress extends Record<string, unknown> { id: string; exam_session_id: string; questions_answered: number; total_questions: number; last_activity: string }
export interface RankingRule { id: string; stage_id: string; max_qualifiers?: number | null; min_score?: number | null; max_cheating_logs?: number | null; tiebreaker_order: unknown }
export interface RankingResult { id: string; stage_id: string; status: string; total_participants: number; total_qualified: number }
export interface RankingEntry extends Record<string, unknown> { participant_stage_id: string; rank: number; score: number; qualification_status: string }
export interface RankingResultWithEntries extends RankingResult { entries: RankingEntry[] }
export interface PromotionResult { stage_id: string; next_stage_id: string; promoted_count: number }
export interface CertificateTemplate { id: string; event_id: string; name: string; stage_id?: string }
export interface Certificate { id: string; participant_stage_id: string; certificate_number: string; issued_at?: string }
export interface GenerationResult { generated: number; skipped: number }
export interface Role extends Record<string, unknown> { id: string; name: string; description?: string }
export interface Permission extends Record<string, unknown> { id: string; code: string; resource: string; action: string }
export interface UserRoleAssignment extends Record<string, unknown> { id: string; user_id: string; role?: string; event_id?: string }
export interface AuditLog extends Record<string, unknown> { id: string; actor_id?: string; resource_type?: string; action?: string; created_at?: string }
