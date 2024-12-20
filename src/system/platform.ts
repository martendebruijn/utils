export function detectPlatform(): "mobile" | "desktop" | "tablet" {
  const ua = navigator.userAgent.toLowerCase();
  if (/mobi|android|touch|mini/.test(ua)) return "mobile";
  if (/tablet|ipad/.test(ua)) return "tablet";
  return "desktop";
}
