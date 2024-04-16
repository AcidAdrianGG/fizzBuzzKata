export class FizzBuzz {
  public convert(n: number) {
    if (this.isMultipleOf3(n))
      return this.isMultipleOf5(n) ?  'FizzBuzz' : 'Fizz'
    return this.isMultipleOf5(n) ? 'Buzz': n.toString()
  }

  private isMultipleOf3(n: number): boolean {
    if (n === 0) return true
    return n > 0 ? this.isMultipleOf3(n - 3) : false
  }

  private isMultipleOf5(n: number): boolean {
    if (n === 0) return true
    return n > 0 ? this.isMultipleOf5(n - 5) : false
  }
}