import {expect, test, describe} from 'vitest'
import head from '../head'

describe('head', () => {
  test('returns the first element of an array of numbers', () => {
    const array = [1, 2, 3]

    expect(head(array)).toBe(1)
  })

  test('returns the first element of an array of strings', () => {
    const array = ['one', 'two', 'three']

    expect(head(array)).toBe('one')
  })

  test('returns the first element of an array of numbers and strings', () => {
    const array = ['one', 2, 'three']

    expect(head(array)).toBe('one')
  })

  test('returns undefined for an empty array', () => {
    const array: number[] = []

    expect(head(array)).toBe(undefined)
  })
})
