pragma solidity ^0.4.2;

import './zeppelin/lifecycle/Killable.sol';

contract Rideshare is Killable {
  struct Passenger {
    uint price;
    bool confirmed;
    string state;
  }

  struct Ride {
    address driver;
    uint capacity;
    string originAddress;.
    string destAddress;
    string state; // initial, acceptance, confirmed, enRoute, completion
    uint createdAt;
    uint confirmedAt;
    mapping (address => Passenger) public passengers;
    address[] public passengerAccts;
  }
  
  Ride[] public rides;
  uint public rideCount;
  
  // for now, only drivers can create Rides
  function createRide(uint _capacity, string _originAddress, string _destAddress, uint _confirmedAt) {
    rides.push(Ride(msg.sender, _capacity, _originAddress, _destAddress, "initial", block.timestamp, _confirmedAt);
  }
  
  // called by passenger
  function joinRide(uint rideNumber) public payable {
    var passenger = rides[rideNumber].passengers[msg.sender];
    
    passenger.price = msg.value;
    
    passengerAccts.push(msg.sender) -1; //***
  }
  
  function getPassengers(uint rideNumber) view public returns(address[]) {
    return ride[rideNumber].passengerAccts;
  }
  
  function passengerInRide(uint rideNumber, address passengerAcct) returns (bool) {
    Ride curRide = rides[rideNumber];
    for(uint i = 0; i < curRide.passengerAccts.length; i++) {
      if (curRide.passengerAccts[i] == passengerAcct) {
        return true;
      }
    }
    return false;
  }
  
  function cancelRide(uint rideNumber) {
    Ride curRide = rides[rideNumber];
    if (msg.sender == curRide.driver) {
      for (uint i = 0; i < curRide.passengerAccts.length; i++) {
        curRide.passengerAccts[i].transfer(curRide.passengers[passengerAccts[i]].price);
      }
    } else if (passengerInRide(rideNumber, msg.sender)) {
      require()block.timestamp < curRide.confirmedAt;
      msg.sender.transfer(curRide.passengers[msg.sender].price);
    }
  }
  
  function confirmDriverArrived(uint rideNumber, string gpsLocation) {
    require(rides[rideNumber].state == "confirmed");
    
  }
  
  function confirmPassengersArrived(uint rideNumber, uint[] passengerNumbers, string gpsLocation) {
    require(rides[rideNumber].state == "confirmed");
  }
  
  function arrived(uint rideNumber) {
    require(passengerInRide(rideNumber, msg.sender));
    
  }
}
