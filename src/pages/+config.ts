import type { Config } from "vike/types";
import vikeSolid from "vike-solid/config";
import vikeSolidQuery from "vike-solid-query/config";

const config: Config = {
  title: "Solid DDD Boilerplate",
  description: "SolidJS + Vike + Tailwind + TanStack Query with Domain Driven Design",
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  },
  extends: [vikeSolid, vikeSolidQuery],
};

export default config;
