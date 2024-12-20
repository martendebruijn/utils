export function getLocalStorageSize(): number {
  let size = 0;
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      size += (localStorage[key]?.length || 0) + key.length;
    }
  }
  return size;
}
