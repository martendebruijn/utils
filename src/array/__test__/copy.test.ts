import {expect, test, describe} from 'vitest'
import copy from '../copy'

describe('copy', () => {
  test('copies an array of numbers', () => {
    const array = [1, 2, 3]

    expect(copy(array)).toStrictEqual(array)
  })
  
  test('copies an array of strings', () => {
    const array = ['one', 'two', 'three']

    expect(copy(array)).toStrictEqual(array)
  })
  
  test('copies an array of numbers and strings', () => {
    const array = ['one', 2, 'three']

    expect(copy(array)).toStrictEqual(array)
  })

  test('copies an empty array', () => {
    const array: number[] = []

    expect(copy(array)).toStrictEqual(array)
  })
})
