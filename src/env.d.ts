/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Allow importing YAML data files (resolved by @rollup/plugin-yaml).
declare module '*.yaml' {
  const data: any;
  export default data;
}
