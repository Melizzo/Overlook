import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';

describe('Hotel', function() {
  let hotel;
  
  beforeEach(() => {
    hotel = new Hotel({
        allRooms:[],
        allBookings: [{
           'id': '5fwrgu4i7k55hl6tg',
            'userID': 34,
            'date': '2020/04/18',
            'roomNumber': 17,
            'roomService': []
        }, {
            'id': '5fwrgu4i7k55hl6wp',
            'userID': 34,
            'date': '2020/04/17',
            'roomNumber': 14,
            'roomService': [],
        }],
        users:[]})
    })

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
    // console.log('hotel', hotel);
    
  });

  it.skip('should hold an array of Bookings', function() {
    expect(hotel.allBookings).to.deep.equal([{
        'id': '5fwrgu4i7k55hl6tg',
         'userID': 34,
         'date': '2020/04/18',
         'roomNumber': 17,
         'roomService': []
     }, {
         'id': '5fwrgu4i7k55hl6wp',
         'userID': 34,
         'date': '2020/04/17',
         'roomNumber': 14,
         'roomService': [],
     }]);
  });

  it.skip('should return total rooms available today', function() {
      hotel.totalRoomsAvailableForTodaysDate(2020/4/18);
      expect(hotel.totalRoomsAvailableForTodaysDate).to.equal(1)
  })

})