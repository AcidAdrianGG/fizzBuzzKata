import { describe, it, expect } from "vitest"

describe("FizzBuzz", () => {
  it("displays '1' when using 1 as an argument", () => {
    const fizzBuzz = FizzBuzz()
    const result = fizzBuzz.convert(1)
    
    expect(result).to.be('1')
  })
})
