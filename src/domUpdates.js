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
        $('.reservation-header').append(`<p>Reservation id: ${booking.id}, Date: ${booking.date}, Room Number: ${booking.roomNumber}</p>`);
        })
    },
    displayTotalCostOfUserBookings(user) {
        console.log('dom user', user)
        $('.').append(``);
    }
        //  return user.myBookings.forEach(booking => {
        //     $('<p>booking</p>').insertAfter('display-reservations');
        // })
}
export default domUpdates;