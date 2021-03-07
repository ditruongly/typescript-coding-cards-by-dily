const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]
let listOfEvenNumbers : Array<number> = []

for (let i of listOfNumbers) {
  if (i % 2 === 0) {
    listOfEvenNumbers.push(i)
  }
}

console.log(listOfEvenNumbers)

// Rewritten with Lambda-Expression

console.log(listOfNumbers.filter( i => i % 2 === 0))