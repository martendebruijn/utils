export function pipe<T>(...fns: ((arg: T) => T)[]): (input: T) => T {
  return (input: T) => fns.reduce((acc, fn) => fn(acc), input);
}
