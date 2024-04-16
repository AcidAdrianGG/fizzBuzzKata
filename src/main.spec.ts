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

  it("displays '4' when using 4 as an argument", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(4)
    
    expect(result).toBe('4')
  })

  it("displays 'Fizz' when using 3 as an argument", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(3)
    
    expect(result).toBe('Fizz')
  })

  it("displays 'Buzz' when using 5 as an argument", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(5)
    
    expect(result).toBe('Buzz')
  })

  it("displays 'Fizz' when number is a multiple of 3 (using 6)", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(6)

    expect(result).toBe('Fizz')
  })

  it("displays 'Buzz' when number is a multiple of 5 (using 10)", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.convert(10)

    expect(result).toBe('Buzz')
  })

})
