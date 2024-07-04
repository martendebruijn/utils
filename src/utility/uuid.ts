/**
 * Generates a random UUID (Universally Unique Identifier) using the crypto.randomUUID() method.
 * @returns {string} The generated UUID.
 */
export default function uuid(): string {
  return self.crypto.randomUUID()
}
