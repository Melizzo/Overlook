class Hotel {
    constructor(id) {
        this.allRooms =[];
        this.allBookings = [];
    }
    checkUserBookings(id) {
       return this.allBookings.filter(booking => booking.userID===id)
    }

    // filterlistofavailableroomsbypropertyType

    // FilterAvailableRoomsviadate

    // calculateCostForReservationsperuser

    // calculatetotalrevenefortodaysdate

    // calculate%ofroomsoccupatedfortodaysdate

    
}

export default Hotel;