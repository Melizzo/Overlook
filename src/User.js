class User {
    constructor(user, bookingsData) {
        this.id = user.id;
        this.name = user.name;
        this.myBookings = bookingsData.allBookings.filter(booking => booking.userID===user.id)
    }

    // createBooking(){

    // }

}

export default User;