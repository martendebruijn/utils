import {expect, test, describe} from 'vitest'
import round from '../round'

describe('round', () => {
  test('rounds a number to the specified number of decimal places', () => {
    expect(round(1.2345, 3)).toBe(1.235)
    expect(round(1.2345, 2)).toBe(1.23)
    expect(round(1.2345, 1)).toBe(1.2)
    expect(round(1.2345, 0)).toBe(1)
  })

  test('rounds a number to the nearest integer if no decimal places are specified', () => {
    expect(round(1.2345)).toBe(1)
    expect(round(1.5678)).toBe(2)
  })

  test('rounds a number to the nearest integer if 0 decimal places are specified', () => {
    expect(round(1.2345, 0)).toBe(1)
    expect(round(1.5678, 0)).toBe(2)
  })

  test('returns NaN if the input is NaN', () => {
    expect(round(NaN)).toBeNaN()
  })
})
