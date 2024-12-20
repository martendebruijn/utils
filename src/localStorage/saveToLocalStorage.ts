export function saveToLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
