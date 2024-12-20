export function normalizeUrl(url: string): string {
  const urlObj = new URL(url);
  urlObj.pathname = urlObj.pathname.replace(/\/+/g, "/");
  const sortedParams = Array.from(urlObj.searchParams.entries()).sort();
  urlObj.search = new URLSearchParams(sortedParams).toString();
  return urlObj.toString();
}
