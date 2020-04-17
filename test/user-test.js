import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';

describe('User', function() {
  let user1;

  beforeEach(() => {
    user1 = new User({
      'id': 34,
      'name': 'Luisa Ardella Jakubowski',
      'myBookings': [{
        'id': '5fwrgu4i7k55hl6tg',
        'userID': 34,
        'date': '2020/02/03',
        'roomNumber': 17,
        'roomService': []
      }, {
        'id': '5fwrgu4i7k55hl6wp',
        'userID': 34,
        'date': '2020/02/05',
        'roomNumber': 14,
        'roomService': [],
      }]
    })
  })
  it.only('should be a function', function() {
    expect(User).to.be.a('function');
  });
  it('should have an id', function() {
    expect(user1.id).to.eq(34);
  });
  it('should have a name', function() {
    expect(user1.name).to.eq("Luisa Ardella Jakubowski")
  });
  it.only('should have an array of rooms booked', function() {
    // user1.findMyBookings()
    expect(user1.myBookings).to.deep.equal([{
      'id': '5fwrgu4i7k55hl6tg',
      'userID': 34,
      'date': '2020/02/03',
      'roomNumber': 17,
      'roomService': []
    }, {
      'id': '5fwrgu4i7k55hl6wp',
      'userID': 34,
      'date': '2020/02/05',
      'roomNumber': 14,
      'roomService': [],
    }])
  });
  

});