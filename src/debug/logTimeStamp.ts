export function logWithTimestamp(message: string): void {
  console.log(`[${new Date().toISOString()}] ${message}`);
}
