import { core, nodejs, unbundled } from "@phanect/lint";

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...core,
  ...nodejs,
  ...unbundled,
];
