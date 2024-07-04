import {expect, test, describe} from 'vitest'
import isLast from '../isLast'

describe('isLast', () => {
  test('returns true if the index is the last index', () => {
    const array = [1, 2, 3, 4, 5]
    const index = 4

    expect(isLast(array, index)).toBe(true)
  })

  test('returns false if the index is not the last index', () => {
    const array = [1, 2, 3, 4, 5]
    const index = 3

    expect(isLast(array, index)).toBe(false)
  })

  test('returns false if the index is negative', () => {
    const array = [1, 2, 3, 4, 5]
    const index = -1

    expect(isLast(array, index)).toBe(false)
  })

  test('returns false if the index is greater than the last index', () => {
    const array = [1, 2, 3, 4, 5]
    const index = 5

    expect(isLast(array, index)).toBe(false)
  })

  test('returns false if the array is empty', () => {
    const array = []
    const index = 0

    expect(isLast(array, index)).toBe(false)
  })
})
