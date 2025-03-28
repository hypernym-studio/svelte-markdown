import type { Highlighter } from '@/plugins/types'

export interface Highlight {
  /**
   * Specifies custom syntax highlighter.
   *
   * @example
   *
   * ```ts
   * svelteMarkdown({
   *   highlight: {
   *     highlighter: async ({ lang, meta, code }) => {
   *       return code
   *     }
   *   }
   * })
   * ```
   *
   * @default undefined
   */
  highlighter?: Highlighter
}
