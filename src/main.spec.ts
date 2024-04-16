import { describe, it, expect } from "vitest"
import { FizzBuzz } from "./main.js"

describe("FizzBuzz", () => {
  it("displays '1' when using 1 as an argument", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(1)
    
    expect(result).toBe('1')
  })

  it("displays '2' when using 2 as an argument", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(2)
    
    expect(result).toBe('2')
  })
})
