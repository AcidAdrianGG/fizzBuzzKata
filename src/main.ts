export class FizzBuzz {
  public convert(n: number) {
    if (n % 3 === 0) return 'Fizz'
    if (n === 5) return 'Buzz'
    return n.toString()
  }
}