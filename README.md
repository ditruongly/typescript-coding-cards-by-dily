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

You can't add new properties to an object, when that property is not defined in the interface.
</details>