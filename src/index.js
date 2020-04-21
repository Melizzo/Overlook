// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import moment from "moment";
import $ from "jquery";
import "./css/base.scss";
import "./css/base.scss";
import Bookings from "./Bookings.js";
import Booking from "./Booking.js";
import User from "./User.js";
import Manager from "./Manager.js";
import domUpdates from "./domUpdates.js";
import Room from "./Room";
import Hotel from "./Hotel.js";

// Images
import "./images/hotel-main.jpg";
// import './images/user-login-page.jpg';

let booking;
let bookings = [];
let manager;
let hotel;
let user;
let users = [];
let date;
let room;
let rooms = [];

// FETCHING
$("#login-submit-button").click(function () {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then((promise) => promise.json())
    .then((data) => windowHandler(data.users))
    .catch((err) => console.error(err));
});

function windowHandler(data) {
  captureLoginInformation(data);
}

function captureLoginInformation(usersData) {
  let username = $("#login-username-input").val();
  let password = $("#login-password-input").val();
  console.log("username", username);
  console.log("password", password);
  if (username === "manager" && password === "overlook2020") {
    let newManager = "manager";
    console.log("newManger", newManager);
    getNeededData(newManager);
    domUpdates.togglePage($(".manager-login-page"), $(".login-area"));
  } else {
    let newUser = verifyUserLogin(usersData);
    domUpdates.togglePage($(".user-login-page"), $(".login-area"));
    getNeededData(newUser, usersData);
  }
}

function verifyUserLogin(usersData) {
  let username = $("#login-username-input").val();
  let password = $("#login-password-input").val();
  if (username !== "" && password !== "") {
    let passwordId = verifyPassword(username, password);
    let correctUser = usersData.find((user) => user.id === passwordId);
    return correctUser;
  } else {
    $("#login-error").html("Incorrect username or password, please try again");
  }
}

function verifyPassword(username, password) {
  let passwordLetters;
  if (username.includes("customer") && password.includes("overlook2020")) {
    passwordLetters = verifyPasswordLength(username);
    return passwordLetters;
  }
  if (username.includes("manager") && password.includes("overlook2020")) {
    passwordLetters = verifyPasswordLength(username);
    return passwordLetters;
  } else {
    $("#login-error").html("Incorrect username or password, please try again");
  }
  return passwordLetters;
}

function verifyPasswordLength(username) {
  let id1;
  username = username.split("");
  if (username.length === 9) {
    id1 = username[username.length - 1];
    id1 = parseInt(id1);
    return id1;
  } else if (username.length === 10) {
    id1 = username[username.length - 2] + username[username.length - 1];
    id1 = parseInt(id1);
    return id1;
  } else {
    $("#login-error").html("Incorrect username or password, please try again");
  }
}

function getNeededData(newPerson, usersData) {
  Promise.all([
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms"
    ).then((response) => response.json()),
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings"
    ).then((response) => response.json()),
  ]).then((data) =>
    reassignData(data[0].rooms, data[1].bookings, newPerson, usersData)
  );
}

function reassignData(apiRooms, apiBookings, newPerson, usersData) {
  reAssignRooms(apiRooms);
  console.log("apiRooms", apiRooms);
  reAssignBookings(apiBookings);
  reAssignUserArray(usersData);
  reAssignHotel(rooms, bookings, users);

  index.reAssignUser(newPerson);

  console.log("M", manager);
  console.log("U", usersData);
  console.log("H", hotel);
}

function reAssignHotel(rooms, bookings, users) {
  hotel = new Hotel(rooms, bookings, users);
}

function reAssignRooms(apiRooms) {
  apiRooms.forEach((element) => {
    room = new Room(element);
    rooms.push(room);
  });
}

function reAssignBookings(apiBookings) {
  apiBookings.forEach((element) => {
    booking = new Booking(element);
    bookings.push(booking);
  });
}

function reAssignUserArray(usersData) {
  console.log("usersData", usersData);
  usersData.forEach((element) => {
    user = new User(element, bookings);
    users.push(user);
  });
}
let index = {
  reAssignUser(newPerson) {
    console.log("newPerson", newPerson);
    if (newPerson === "manager") {
      manager = new Manager(newPerson);
      console.log("manager", manager);
      return;
    }
    let userBookings = hotel.checkUserBookings(newPerson.id);
    user = new User(newPerson, userBookings, rooms);
    console.log("index rooms", rooms);
    console.log("user", user);
    console.log("userBookings", userBookings);
    domUpdates.displayUserBookings(user);
    domUpdates.displayTotalCostOfUserBookings(user, rooms);
    return;
  },
};
export default index;
