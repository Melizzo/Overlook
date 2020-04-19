import Hotel from './Hotel.js'

class User {
    constructor(user, userBookings, rooms) {
        this.id = user.id;
        this.name = user.name;
        this.myBookings = userBookings
        this.rooms = rooms
        console.log('user rooms', rooms)
    }

    // createBooking(){

    // }

    displayReservationDetails() {
        console.log(displayReservationDetails)
        return`Reservation id: ${Booking.id}, Date: ${Booking.date}, Room Number: ${Booking.roomNumber}`
    }

}

export default User;