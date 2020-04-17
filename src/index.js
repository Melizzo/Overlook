// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import $ from 'jquery';
import './css/base.scss';
import './css/base.scss';
import Bookings from './Bookings.js';
import Booking from './Booking.js';
import User from './User.js';
import Manager from './Manager.js';
import domUpdates from './domUpdates.js';
import Room from './Room';
import Hotel from './Hotel.js';


// Images
import './images/hotel-main.jpg';
// import './images/user-login-page.jpg';

let booking;
let manager
let bookings = new Bookings();
let hotel = new Hotel();
let user;
let date;
let room;


// FETCHING
$("#login-submit-button").click(function() {
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(promise => promise.json())
  .then(data => windowHandler(data.users))
  .catch(err => console.error(err))
})

function windowHandler(data) {
    let currentUser = captureLoginInformation(data);
    domUpdates.displayLogin(currentUser);
};

function captureLoginInformation(usersData) {
let username = $('#login-username-input').val();
let password = $('#password-login-input').val();
if (username === "manager" && password === "overlook2020") {
  let newManager = 'manager';
  getNeededData(newManager)
} else {
  let newUser = verifyUserLogin(usersData)
  getNeededData(newUser)
    }
}

function verifyUserLogin(usersData) {
    let username = $('#login-username-input').val();
    let password = $('#login-password-input').val();
    if (username !== "" && password !== "") {
      let passwordId = verifyPassword(username, password)
      let correctUser = usersData.find(user => user.id === passwordId)
      return correctUser
    } else {
        $('#login-in-error').html('Incorrect username or password, please try again')
    }
}

function verifyPassword(username, password) {
    let passwordLetters;
    if (username.includes('customer') && password.includes('overlook2020')) {
      passwordLetters = verifyPasswordLength(username)
      return passwordLetters
    } else {
        $('#login-in-error').html('Incorrect username or password, please try again')
    }
    return passwordLetters
}

function verifyPasswordLength(username) {
    let id1;
    username = username.split('');
    if (username.length === 9) {
      id1 = (username[username.length - 1])
      id1 = parseInt(id1)
      return id1
    } else if (username.length === 10) {
      id1 = username[username.length - 2] + username[username.length - 1]
      id1 = parseInt(id1)
      return id1
    } else {
        $('#login-in-error').html('Incorrect username or password, please try again')
    }
}

function getNeededData(newPerson) {
    Promise.all([
        fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()),
        fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()),
        ]).then(data => reassignData(data[0].rooms, data[1].bookings, newPerson))
}

function reassignData(apiRooms, apiBookings, newPerson) {
    reAssignRooms(apiRooms);
    reAssignBookings(apiBookings)
    reAssignUser(newPerson)
  
    console.log('M', manager)
    console.log('U', user)
    console.log('B', bookings)
    console.log('H', hotel)
}

function reAssignRooms(apiRooms) {
    apiRooms.forEach(element => {
      room = new Room(element)
      hotel.allRooms.push(room)
    })
  }
  
  function reAssignBookings(apiBookings) {
    apiBookings.forEach(element => {
      booking = new Booking(element)
      bookings.allBookings.push(booking)
    })
  }
  
  function reAssignUser(newPerson) {
    if (newPerson === 'manager') {
      manager = new Manager(newPerson)
    }
    user = new User(newPerson, bookings)
    console.log('user', user)
  }