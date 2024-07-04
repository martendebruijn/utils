import {expect, test, describe} from 'vitest'
import peek from '../peek'

describe('peek', () => {
  test('returns the last element of an array of numbers', () => {
    const array = [1, 2, 3]

    expect(peek(array)).toBe(3)
  })

  test('returns the last element of an array of strings', () => {
    const array = ['one', 'two', 'three']

    expect(peek(array)).toBe('three')
  })

  test('returns the last element of an array of numbers and strings', () => {
    const array = ['one', 2, 'three']

    expect(peek(array)).toBe('three')
  })

  test('returns undefined for an empty array', () => {
    const array: number[] = []

    expect(peek(array)).toBe(undefined)
  })
})
