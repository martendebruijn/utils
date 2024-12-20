export function appendQueryParams(
  url: string,
  params: Record<string, string | number>,
): string {
  const urlObj = new URL(url);
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.append(key, value.toString());
  });
  return urlObj.toString();
}
