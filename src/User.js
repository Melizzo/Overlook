class User {
    constructor(user, bookingsData) {
        this.id = user.id;
        this.name = user.name;
        // this.myBookings = this.findMyBookings(user, bookingsData)
    }

    findMyBookings(user, bookingsData) {
        console.log('bookingsData', bookingsData)
        const UserBookings = []
        // const findData = bookingsData.filter(element => {
        //     console.log('element', element)
        //     element.userID
        // })
    }
}

export default User;