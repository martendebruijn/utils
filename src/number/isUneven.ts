/**
 * Checks if a number is uneven.
 * @param number - The number to check.
 * @returns A boolean indicating whether the number is uneven.
 */
export default function isUneven(number: number): boolean {
  const str = number.toString()
  const lastDigit = str[str.length - 1]
  return +lastDigit % 2 === 1
}
