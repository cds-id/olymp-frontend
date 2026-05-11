import type { JSX } from "solid-js";
import { createContext, createResource, useContext } from "solid-js";
import { olympApi, type MyRolesResponse } from "../../infrastructure/olymp/api";

const RbacContext = createContext<{ roles: () => MyRolesResponse | null; can: (permission: string) => boolean; staff: () => boolean }>();

export function RbacProvider(props: { children: JSX.Element }) {
  const [roles] = createResource(async () => (await olympApi.roles()).data);
  const can = (permission: string) => {
    const data = roles();
    return !!data?.is_admin || !!data?.is_staff || !!data?.permissions.includes(permission);
  };
  return <RbacContext.Provider value={{ roles: () => roles() ?? null, can, staff: () => !!roles()?.is_staff || !!roles()?.is_admin }}>{props.children}</RbacContext.Provider>;
}

export function useRbac() {
  return useContext(RbacContext) ?? { roles: () => null, can: () => false, staff: () => false };
}

export function Can(props: { permission: string; children: JSX.Element; fallback?: JSX.Element }) {
  const rbac = useRbac();
  return <>{rbac.can(props.permission) ? props.children : props.fallback}</>;
}
