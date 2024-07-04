import {expect, test, describe} from 'vitest'
import uuid from '../uuid'

describe('uuid', () => {
  test('returns a string', () => {
    expect(uuid()).toBeInstanceOf(String)
  })

  test('returns a string of length 36', () => {
    expect(uuid()).toHaveLength(36)
  })

  test('returns a string with 4 hyphens', () => {
    expect(uuid()).toMatch(/-/g)
  })

})
