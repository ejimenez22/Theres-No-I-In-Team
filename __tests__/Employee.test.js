const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee()

    expect(employee.name).toBe('')
})

test ('creates an employee id', () => {

})