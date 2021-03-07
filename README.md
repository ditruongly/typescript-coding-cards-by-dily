# Interface
## Where is the mistake?

```typescript
interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: "Di",
  age: 45,
  sex: "male"
}
```

<details>
<summary>Solution</summary>

```typescript
interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: "Di",
  age: 45,
}
```
</details>