const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)

        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        if (this.officeNumber === Number) {
            return this.officeNumber
        } else {
            return parseInt(this.officeNumber)
        }
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager