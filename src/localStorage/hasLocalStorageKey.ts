export function hasLocalStorageKey(key: string): boolean {
  return localStorage.getItem(key) !== null;
}
