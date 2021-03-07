#  Arrow-Function and the keyword "this"
## Where is the mistake?

```typescript
class Employee {
  constructor(public name: string) {}
}

class Company {

  name: string = "Amazon"
  employees: Employee[] = [new Employee("Tom"), new Employee("Jim")]

  showAllEmployees() {
    this.employees.forEach(function(employee) {
      console.log(`${employee.name} works for ${this.name}`)
    })
  }
}

const company: Company = new Company()
company.showAllEmployees()
```

<details>
<summary>Solution</summary>

In an anonymous function the "this" keyword is not bind to the context of the class;
but with the Arrow-Function syntax it is bind to.

```typescript
class Employee {
  constructor(public name: string) {}
}

class Company {

  name: string = "Amazon"
  employees: Employee[] = [new Employee("Tom"), new Employee("Jim")]

  showAllEmployees() {
    this.employees.forEach(employee => {
      console.log(`${employee.name} works for ${this.name}`)
    })
  }
}

const company: Company = new Company()
company.showAllEmployees()
```
</details>