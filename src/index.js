// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import $ from 'jquery';
import './css/base.scss';
import './css/base.scss';
import Bookings from './Bookings.js';
import Booking from './Booking.js';
import User from './User.js';
import Manger from './Manager.js';
import domUpdates from './domUpdates.js';
import Hotel from './Hotel.js';


// Images
import './images/hotel-main.jpg';
// import './images/user-login-page.jpg';

let bookings = new Bookings();
let hotel = new hotel();
let user;
let manager;
let date;
let room;
// will hold the bookingsData for the bookings API - 
// will pass this in when creating a new user
// fetch bookingsData when log in
let bookingsData = [];
let newUsersData = [];


// FETCHING
$("#login-submit-button").click(function() {
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(promise => promise.json())
  .then(data => windowHandler(data.users))
  .catch(error => console.log('login-in-error'))
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
  let newUser = verifyLogin(usersData)
  getNeededData(newUser)
    }
}

function verifyLogin(usersData) {
    let username = $('#login-username-input').val();
    let password = $('#login-password-input').val();
    if (username !== "" && password !== "") {
      let passwordId = verifyPassword(username, password)
      let correctUser = usersData.find(user => user.id === passwordId)
      return correctUser
    } else {
        $('#login-in-error').html('Invalid Login, please try again')
    }
}

function verifyPassword(username, password) {
    let passwordLetters;
    if (username.includes('customer') && password.includes('overlook2020')) {
      passwordLetters = verifyPasswordLength(username)
      return passwordLetters
    } else {
        $('#login-in-error').html('Please try a different password')
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
        $('#login-in-error').html('Incorrect password, please try again.')
    }
}



//   .then(() => {
    // userRepository = new UserRepository(userData, sleepData, activityData, hydrationData);
    // instantiateAllUsers();
    // instantiateAllUsersActivity();
    // instantiateAllUsersHydration();
    // instantiateAllUsersSleep();
//   })
//   .then(() => {
    // let user = userRepository.users[Math.floor(Math.random() * userRepository.users.length)]
    // let todayDate = "2020/01/22";
    // user.findFriendsNames(userRepository.users);
    // domUpdates.displayInitialDomData(user, todayDate, userRepository);
    // startApplication(user, userRepository, todayDate, activityData, hydrationData, sleepData);
//   })