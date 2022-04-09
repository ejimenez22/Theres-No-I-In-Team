const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Enrique', 1234, 'ejimenez2292@gmail.com', '20')

    expect(manager.officeNumber).toEqual(expect.any(String))
})

test('gets office number input', () => {
    const manager = new Manager('Enrique', 1234, 'ejimenez2292@gmail.com', '20')

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
})

test('gets role of employee', () => {
    const manager = new Manager('Enrique', 1234, 'ejimenez2292@gmail.com', '20')

    expect(manager.getRole()).toBe('Manager')
})