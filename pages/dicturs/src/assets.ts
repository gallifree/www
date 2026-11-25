// The logo and screenshots, imported so Vite fingerprints them and serves them under the right path.
import logoUrl from '../assets/logo.svg'

export const LOGO = logoUrl

const shots = import.meta.glob<string>('../screenshots/*.png', { eager: true, import: 'default' })

/** URL of a screenshot of ../screenshots (copied from the dicturs repo's docs/screenshots), by file name. */
export function screenshot(file: string): string {
  const url = shots[`../screenshots/${file}`]
  if (!url) throw new Error(`missing screenshot pages/dicturs/screenshots/${file}`)
  return url
}
