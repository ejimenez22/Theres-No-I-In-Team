const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Enrique', 1234, 'ejimenez2292@gmail.com')

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test('gets name input', () => {
    const employee = new Employee('Enrique', 1234, 'ejimenez2292@gmail.com')

    expect(employee.getName()).toEqual(expect.any(String))
})

test('gets id input', () => {
    const employee = new Employee('Enrique', '1234', 'ejimenez2292@gmail.com')

    expect(employee.getID()).toEqual(expect.any(Number))
})

test('gets email input', () => {
    const employee = new Employee('Enrique', 1234, 'ejimenez2292@gmail.com')

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('gets role of employee', () => {
    const employee = new Employee('Enrique', 1234, 'ejimenez2292@gmail.com')

    expect(employee.getRole()).toEqual(expect.any(String))
    expect(employee.getRole()).toBe('Employee')
})