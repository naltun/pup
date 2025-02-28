/**
 * Re-exports the required methods and types from remote modules
 *
 * - Check for updates using `deno task update-deps`
 * - Always pin all imports to a specific version
 *
 *  @file deps.ts
 */

/**
 * Deno std dependencies
 *
 * - Always use the same version of all imports from deno.land/std
 */
// cli
export { parse } from "https://deno.land/std@0.180.0/flags/mod.ts"
export type { Args } from "https://deno.land/std@0.180.0/flags/mod.ts"
export * as path from "https://deno.land/std@0.180.0/path/mod.ts"
// logger
export { stripColor } from "https://deno.land/std@0.180.0/fmt/colors.ts"
// config
export * as jsonc from "https://deno.land/std@0.180.0/encoding/jsonc.ts"
// watcher
export { deferred, delay } from "https://deno.land/std@0.180.0/async/mod.ts"
export { globToRegExp, relative } from "https://deno.land/std@0.180.0/path/mod.ts"
// load balancer
export { copy } from "https://deno.land/std@0.180.0/streams/mod.ts"
// core - process
export { StringReader } from "https://deno.land/std@0.180.0/io/string_reader.ts"
export { readLines } from "https://deno.land/std@0.180.0/io/mod.ts"

/**
 * Third party dependencies
 *
 * - Prefer deno.land/x when available
 */
export { Cron } from "https://deno.land/x/croner@6.0.3-dev.0/dist/croner.js"
export { z } from "https://deno.land/x/zod@v3.21.4/mod.ts"
