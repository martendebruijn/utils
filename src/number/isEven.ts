/**
 * Checks if a number is even.
 * 
 * @param number - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
export default function isEven(number: number): boolean {
  const str = number.toString()
  const lastDigit = str[str.length - 1]
  return +lastDigit % 2 === 0
}
