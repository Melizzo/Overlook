class User {
    constructor(user, bookingsData) {
        this.id = user.id;
        this.name = user.name;
        this.myBookings = this.findMyBookings(user, bookingsData)
    }

    findMyBookings(user, bookingsData) {
        const userBookings = []
        bookingsData.allBookings.forEach(element => {
            if(user.id === element.userID) {
                userBookings.push(element)
            }
        })
        console.log('userBookings', userBookings)
        return userBookings
    }
}

export default User;