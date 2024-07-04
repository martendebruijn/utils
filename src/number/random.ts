/**
 * Generates a random number between the specified minimum and maximum values.
 * @param min - The minimum value (default: 0).
 * @param max - The maximum value (default: 1).
 * @returns A random number between the minimum and maximum values.
 */
export default function random (min=0, max=1): number {
  return Math.floor(Math.random() * max) + min
}
