const Intern = require('../lib/Intern')

test('creates an engineer object', () => {
    const intern = new Intern('Enrique', 1234, 'ejimenez2292@gmail.com', 'UTSA')

    expect(intern.school).toEqual(expect.any(String))
})

test('gets school input', () => {
    const intern = new Intern('Enrique', 1234, 'ejimenez2292@gmail.com', 'UTSA')

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('gets role of employee', () => {
    const intern = new Intern('Enrique', 1234, 'ejimenez2292@gmail.com', 'UTSA')

    expect(intern.getRole()).toBe('Intern')
})