import {expect, test, describe} from 'vitest'
import equalsTo from '../equalsTo'

describe('equalsTo', () => {
  test('compares two equal arrays of numbers', () => {
    const arrayA = [1, 2, 3]
    const arrayB = [1, 2, 3]

    expect(equalsTo(arrayA, arrayB)).toBe(true)
  })

  test('compares two equal arrays of strings', () => {
    const arrayA = ['one', 'two', 'three']
    const arrayB = ['one', 'two', 'three']

    expect(equalsTo(arrayA, arrayB)).toBe(true)
  })

  test('compares two equal arrays of numbers and strings', () => {
    const arrayA = ['one', 2, 'three']
    const arrayB = ['one', 2, 'three']

    expect(equalsTo(arrayA, arrayB)).toBe(true)
  })

  test('compares two empty arrays', () => {
    const arrayA: number[] = []
    const arrayB: number[] = []

    expect(equalsTo(arrayA, arrayB)).toBe(true)
  })
})
