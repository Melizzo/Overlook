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
window.onload = () => {
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(promise => promise.json())
  .then(data => userDataHandler(data))
  .catch(error => console.log('userData error'))
};

function userDataHandler(userData) {
    domUpdates.displayAllInfo(userData);
    // this will be used to push the bookingsData into the new object
    // instance of user
    // example below
    // usersData.forEach(user => user = new User(user, bookingsData))

};

// $('#login-username-input').val();
$("#login-submit-button").click(function() {
    domUpdates.validateUserLogin()
    // findUserData(userID)
    // domUpdates.displayUserIDPage(userID)
})
    // const userFound = userData.forEach(element => {
        
    // })
    //if($('#login-username-input').val().contains('userData.id'))

function validateUserLogin() {
    //    console.log('userData', userData)
        let userId = 0
        let username = $('#login-username-input').val();
        if (username.includes('customer')) {
            username = username.split('');
            if(username[username.length -2] === 'r'){
            userId = parseInt(username[username.length -1])
            } else
            {userId = parseInt(username[username.length -2]  + username[username.length -1])}
            return userId 
        }
        else if(username.includes('manager')) {
            alert("I'm a BFD manager!")
        }
        else 
        $('#login-in-error').html('Invalid Login, please try again')
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