#  Lambda-Expression
## Rewrite with Lambda-Expression

```typescript
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]
let listOfEvenNumbers : Array<number> = []

for (let i of listOfNumbers) {
  if (i % 2 === 0) {
    listOfEvenNumbers.push(i)
  }
}

console.log(listOfEvenNumbers)
```

<details>
<summary>Solution</summary>

```typescript
let evenNumbers = listOfNumbers.filter( i => i % 2 === 0)

console.log(evenNumbers)
```
</details>