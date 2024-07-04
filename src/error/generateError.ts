/**
 * Generates an Error object from the given error.
 * If the error is already an instance of Error, it is returned as is.
 * Otherwise, a new Error object is created with the error message.
 * 
 * @param error - The error to generate an Error object from.
 * @returns The generated Error object.
 */
export default function generateError(error: unknown): Error {
  if (error instanceof Error) return error
  return new Error(`${error}`)
}
