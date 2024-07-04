import {expect, test, describe} from 'vitest'
import isEven from '../isEven'

describe('isEven', () => {
  test('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(4)).toBe(true)
    expect(isEven(6)).toBe(true)
    expect(isEven(8)).toBe(true)
    expect(isEven(10)).toBe(true)
  })

  test('returns false for odd numbers', () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(3)).toBe(false)
    expect(isEven(5)).toBe(false)
    expect(isEven(7)).toBe(false)
    expect(isEven(9)).toBe(false)
  })

  test('returns true for zero', () => {
    expect(isEven(0)).toBe(true)
  })

  test('returns false for negative even numbers', () => {
    expect(isEven(-2)).toBe(true)
    expect(isEven(-4)).toBe(true)
    expect(isEven(-6)).toBe(true)
    expect(isEven(-8)).toBe(true)
    expect(isEven(-10)).toBe(true)
  })

  test('returns false for negative odd numbers', () => {
    expect(isEven(-1)).toBe(false)
    expect(isEven(-3)).toBe(false)
    expect(isEven(-5)).toBe(false)
    expect(isEven(-7)).toBe(false)
    expect(isEven(-9)).toBe(false)
  })
})
