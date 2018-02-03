pragma solidity ^0.4.2;

import './zeppelin/lifecycle/Killable.sol';

contract Rideshare is Killable {
  struct Passenger {
    uint price;
    string state; // initial, acceptance, passengerConfirmed, driverConfirmed, enRoute, completion
  }

  struct Ride {
    address driver;
    uint drivingCost;
    uint capacity;
    string originAddress;
    string destAddress;
    uint createdAt;
    uint confirmedAt;
    mapping (address => Passenger) passengers;
    address[] passengerAccts;
  }
  
  Ride[] public rides;
  uint public rideCount;
  
  // for now, only drivers can create Rides
  function createRide(uint _driverCost, uint _capacity, string _originAddress, string _destAddress, uint _confirmedAt) {
    address[] memory _passengerAccts;
    rides.push(Ride(msg.sender, _driverCost, _capacity, _originAddress, _destAddress, block.timestamp, _confirmedAt, _passengerAccts));
  }
  
  // called by passenger
  function joinRide(uint rideNumber) public payable {
    var passenger = rides[rideNumber].passengers[msg.sender];

    require(msg.value == rides[rideNumber].drivingCost);
    
    passenger.price = msg.value;
    
    rides[rideNumber].passengerAccts.push(msg.sender) -1; //***
  }
  
  function getPassengers(uint rideNumber) view public returns(address[]) {
    return rides[rideNumber].passengerAccts;
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
    require(block.timestamp < curRide.confirmedAt);
    if (msg.sender == curRide.driver) {
      for (uint i = 0; i < curRide.passengerAccts.length; i++) {
        curRide.passengerAccts[i].transfer(curRide.passengers[curRide.passengerAccts[i]].price);
      }
    } else if (passengerInRide(rideNumber, msg.sender)) {
      msg.sender.transfer(curRide.passengers[msg.sender].price);
    }
  }
  
  function confirmDriverArrived(uint rideNumber) {
    require(keccak256(rides[rideNumber].passengers[msg.sender].state) == keccak256("driverConfirmed"));
    // require(rides[rideNumber].state == "confirmed");
    
  }
  
  function confirmPassengersArrived(uint rideNumber, uint[] passengerNumbers) {
    // require(rides[rideNumber].state == "confirmed");
  }
  
  function arrived(uint rideNumber) {
    require(passengerInRide(rideNumber, msg.sender));
    
  }
}
