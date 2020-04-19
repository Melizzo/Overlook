import User from './User.js'

class Manager extends User {
    constructor(user, bookingsData) {
    super(user, bookingsData)  
    this.id = user.id || 'hello';
    }

// delete booking

}

export default Manager;