export function measureExecutionTime<T>(fn: () => T): {
  result: T;
  time: number;
} {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  return { result, time: end - start };
}
