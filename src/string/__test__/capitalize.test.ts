import {expect, test, describe} from 'vitest'
import capitalize from '../capitalize'

describe('capitalize', () => {
  test('capitalize("hello") should return "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test('capitalize("world") should return "World"', () => {
    expect(capitalize('world')).toBe('World')
  })

  test('capitalize("foo") should return "Foo"', () => {
    expect(capitalize('foo')).toBe('Foo')
  })

  test('capitalize("bar") should return "Bar"', () => {
    expect(capitalize('bar')).toBe('Bar')
  })
})
