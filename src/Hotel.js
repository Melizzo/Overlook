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

    totalRoomsAvailableForAnyDate(date, allRooms, allBookings) {
        let totalBookedRooms = allBookings.filter((booking) => { 
          return booking.date === date
        })
        let bookedRoomNums = totalBookedRooms.map(room => room.roomNumber);
        let availableRooms = allRooms.filter(room => !bookedRoomNums.includes(room.number))
        return availableRooms
    }

    // filterlistofavailableroomsbypropertyType(date)
    // available rooms = totalroomsAVailableanydate()
    // filter through ro
    // if serach=== bidet filter to true/false

    // FilterAvailableRoomsviadate

    // calculateCostForReservationsperuser

    // calculatetotalrevenefortodaysdate

    // calculate%ofroomsoccupatedfortodaysdate

    
}

export default Hotel;