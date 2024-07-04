import {expect, test, describe} from 'vitest'
import generateError from '../generateError'

describe('generateError', () => {
  test('returns an Error when an Error is given', () => {
    const error = new Error('Something went wrong')

    expect(generateError(error)).toBeInstanceOf(Error)
  })

  test('returns an Error when a string is given', () => {
    const error = "Something went wrong"

    expect(generateError(error)).toBeInstanceOf(Error)
  })

  test('returns an Error when a number is given', () => {
    const error = 150

    expect(generateError(error)).toBeInstanceOf(Error)
  })
})
