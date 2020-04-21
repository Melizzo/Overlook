import $ from 'jquery';
import User from './User';
import index from './index'

const domUpdates = { 
    togglePage(showPage, hidePage) {
        $(showPage).toggle("hidden")
        $(hidePage).toggle("hidden")
    },
    displayError(errorMessage) {
        $('#login-error').html('Incorrect username or password, please try again');
    },
    displayUserBookings(user) {
        user.myBookings.forEach(booking => {
        $('.reservation-header').append(`<h4>Reservation ID: ${booking.id}, Date: ${booking.date}, Room Number: ${booking.roomNumber}</h4>`);
        })
    },
    displayTotalCostOfUserBookings(user, rooms) {
        let cost = 0
        user.myBookings.forEach(booking => {
          rooms.find(specificRoom => {
            if(booking.roomNumber === specificRoom.number){
              cost += specificRoom.costPerNight  
            }
          })
        })
        return $('.total-cost').append(`'<p>Your total on hotel rooms is $${cost}</p>'`);
    } 
        
}
export default domUpdates;