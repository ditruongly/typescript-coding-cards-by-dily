#  Constructor
## Where is the mistake?

```typescript
interface Human {
  name: string;
  age: number;
}

class Person implements Human {
}
```

<details>
<summary>Solution</summary>

Class 'Person' incorrectly implements interface 'Human'. Type 'Person' is missing  properties from type 'Human'.
</details>