const ACCESS = "olymp_access_token";
const REFRESH = "olymp_refresh_token";
const USER = "olymp_user";

export interface SessionUser {
  id?: string;
  email: string;
  username?: string | null;
  name?: string | null;
  phone?: string | null;
}

export function getToken() {
  if (typeof window === "undefined") return undefined;
  return window.localStorage.getItem(ACCESS) ?? undefined;
}

export function saveSession(tokens: { access_token: string; refresh_token?: string; user_id?: string; email?: string }) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ACCESS, tokens.access_token);
  if (tokens.refresh_token) window.localStorage.setItem(REFRESH, tokens.refresh_token);
  if (tokens.email) {
    const username = tokens.email.split("@")[0] || null;
    window.localStorage.setItem(USER, JSON.stringify({ id: tokens.user_id, email: tokens.email, username }));
  }
}

export function getSessionUser(): SessionUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(USER);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ACCESS);
  window.localStorage.removeItem(REFRESH);
  window.localStorage.removeItem(USER);
}

export function goLogin() {
  if (typeof window !== "undefined") window.location.href = "/login";
}

export function goAdmin() {
  if (typeof window !== "undefined") window.location.href = "/admin";
}
