export class FizzBuzz {
  public convert(n: number) {
    if (n % 3 === 0)
      return n % 5 === 0 ?  'FizzBuzz' : 'Fizz'
    return n % 5 === 0 ? 'Buzz': n.toString()
  }
}