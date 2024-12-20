export function removeQueryParams(url: string, keys: string[]): string {
  const urlObj = new URL(url);
  keys.forEach((key) => urlObj.searchParams.delete(key));
  return urlObj.toString();
}
