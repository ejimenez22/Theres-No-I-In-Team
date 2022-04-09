class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getID() {
        if (this.id === Number) {
            return this.id
        } else {
            return parseInt(this.id)
        }
    } 

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee' 
    }
}

module.exports = Employee