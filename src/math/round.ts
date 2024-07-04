/**
 * Rounds a number to the specified number of decimal places.
 * 
 * @param number - The number to round.
 * @param decimals - The number of decimal places to round to. Default is 0.
 * @returns The rounded number.
 */
export default function round (number: number, decimals=0): number {
  if (decimals === 0) return Math.round(number)
  const factor = 10 ** decimals
  return Math.round(factor * number) / factor
}
