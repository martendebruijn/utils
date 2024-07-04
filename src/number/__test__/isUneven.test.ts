import {expect, test, describe} from 'vitest'
import isUneven from '../isUneven'

describe('isUneven', () => {
  test('returns true for uneven numbers', () => {
    expect(isUneven(1)).toBe(true)
    expect(isUneven(3)).toBe(true)
    expect(isUneven(5)).toBe(true)
    expect(isUneven(7)).toBe(true)
    expect(isUneven(9)).toBe(true)
  })

  test('returns false for even numbers', () => {
    expect(isUneven(2)).toBe(false)
    expect(isUneven(4)).toBe(false)
    expect(isUneven(6)).toBe(false)
    expect(isUneven(8)).toBe(false)
    expect(isUneven(10)).toBe(false)
  })

  test('returns false for zero', () => {
    expect(isUneven(0)).toBe(false)
  })

  test('returns true for negative uneven numbers', () => {
    expect(isUneven(-1)).toBe(true)
    expect(isUneven(-3)).toBe(true)
    expect(isUneven(-5)).toBe(true)
    expect(isUneven(-7)).toBe(true)
    expect(isUneven(-9)).toBe(true)
  })

  test('returns false for negative even numbers', () => {
    expect(isUneven(-2)).toBe(false)
    expect(isUneven(-4)).toBe(false)
    expect(isUneven(-6)).toBe(false)
    expect(isUneven(-8)).toBe(false)
    expect(isUneven(-10)).toBe(false)
  })

})
