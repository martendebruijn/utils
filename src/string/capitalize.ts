export default function capitalize(string: string): string {
  const capital = string[0].toUpperCase()
  const other = string.slice(1, string.length)
  return capital + other
}
