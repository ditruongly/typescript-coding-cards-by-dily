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