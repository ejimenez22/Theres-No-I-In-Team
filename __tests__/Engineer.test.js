const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Enrique', 1234, 'ejimenez2292@gmail.com', 'ejimenez22')

    expect(engineer.github).toEqual(expect.any(String))
})

test('gets github input', () => {
    const engineer = new Engineer('Enrique', 1234, 'ejimenez2292@gmail.com', 'ejimenez22')

    expect(engineer.getGithub()).toEqual(expect.any(String))
})

test('gets role of employee', () => {
    const engineer = new Engineer('Enrique', 1234, 'ejimenez2292@gmail.com', 'ejimenez22')

    expect(engineer.getRole()).toBe('Engineer')
})