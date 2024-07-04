import {expect, test, describe} from 'vitest'
import random from '../random'

describe('random', () => {
  test('generates a random number between 0 and 1', () => {
    expect(random()).toBeGreaterThanOrEqual(0)
    expect(random()).toBeLessThanOrEqual(1)
  })

  test('generates a random number between 0 and 10', () => {
    expect(random(0, 10)).toBeGreaterThanOrEqual(0)
    expect(random(0, 10)).toBeLessThanOrEqual(10)
  })

  test('generates a random number between 5 and 10', () => {
    expect(random(5, 10)).toBeGreaterThanOrEqual(5)
    expect(random(5, 10)).toBeLessThanOrEqual(10)
  })

  test('generates a random number between -5 and 5', () => {
    expect(random(-5, 5)).toBeGreaterThanOrEqual(-5)
    expect(random(-5, 5)).toBeLessThanOrEqual(5)
  })
})
