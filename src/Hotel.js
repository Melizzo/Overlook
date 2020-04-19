import moment from 'moment';

class Hotel {
    constructor(roomData, bookingData, users) {
        this.allRooms = roomData;
        this.allBookings = bookingData;
        this.allUsers = users
        // console.log('allBookings', this.allBookings)
        this.date = this.moment().format('YYYY/MM/DD');
    }

    checkUserBookings(users) {
        // console.log('hotel user', users)
        return this.allBookings.filter(booking => booking.userID===users)
    }
    moment(date) {
        return moment(date);
        }

    totalRoomsAvailableForTodaysDate(date = this.date) {
        console.log('this.allBookings', this.allBookings)
        let totalAvailableRooms = this.allBookings.reduce((acc, booking) => { 
        if(booking.date === date) {
            acc += 1
        }
        return acc
        }, 0)
        console.log('totalAvailableRooms', totalAvailableRooms)
        return totalAvailableRooms
    }

    // filterlistofavailableroomsbypropertyType

    // FilterAvailableRoomsviadate

    // calculateCostForReservationsperuser

    // calculatetotalrevenefortodaysdate

    // calculate%ofroomsoccupatedfortodaysdate

    
}

export default Hotel;