#  Constructor
## Where is the mistake?

```typescript
class Person {
  constructor(name: string, age: number) {}
  constructor(name: string) {}
}
```

<details>
<summary>Solution</summary>

Multiple constructor implementations are not allowed.
</details>