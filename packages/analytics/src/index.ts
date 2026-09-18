/** GA4 snippet helpers — measurement ID comes from site.config.ts */

export const gaScriptSrc = (measurementId: string): string =>
  `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`

export const gaInlineConfig = (measurementId: string): string =>
  `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });
`.trim()

export type AnalyticsConfig = {
  measurementId?: string
  respectDoNotTrack?: boolean
}

export const shouldLoadAnalytics = (config: AnalyticsConfig): boolean => {
  if (!config.measurementId) return false
  if (config.respectDoNotTrack === false) return true
  if (typeof navigator !== 'undefined' && navigator.doNotTrack === '1') return false
  return true
}
