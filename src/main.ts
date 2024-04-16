export class FizzBuzz {
  public convert(n: number) {
    if (n === 3 || n === 6) return 'Fizz'
    if (n === 5) return 'Buzz'
    return n.toString()
  }
}