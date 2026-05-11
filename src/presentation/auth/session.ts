const ACCESS = "olymp_access_token";
const REFRESH = "olymp_refresh_token";

export function getToken() {
  if (typeof window === "undefined") return undefined;
  return window.localStorage.getItem(ACCESS) ?? undefined;
}

export function saveSession(tokens: { access_token: string; refresh_token?: string }) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ACCESS, tokens.access_token);
  if (tokens.refresh_token) window.localStorage.setItem(REFRESH, tokens.refresh_token);
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ACCESS);
  window.localStorage.removeItem(REFRESH);
}

export function goLogin() {
  if (typeof window !== "undefined") window.location.href = "/login";
}

export function goAdmin() {
  if (typeof window !== "undefined") window.location.href = "/admin";
}
