pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/lib/math/SafeMath.sol";

contract CounterApp is AragonApp {
    using SafeMath for uint256;

    /// Events
    event LockCar(address indexed entity);
    event UnlockCar(address indexed entity);

    /// State
    /// uint256 public value;
    
    /// Info 

    string public name = "myAwesomeCar";
    string model = "Tesla Model S";
    string id = "001A";
    string availability = "Available";
    bool locked = true;

    /// ACL
    bytes32 constant public LOCK_ROLE = keccak256("LOCK_ROLE");
    bytes32 constant public UNLOCK_ROLE = keccak256("UNLOCK_ROLE");


    function initialize() onlyInit public {
        initialized();
    }


    /**
     * @notice  Add New Car
     */
    function lockCar() auth(LOCK_ROLE) external {
        if(!locked){
            locked = true;
        }
        // emit event
        emit LockCar(msg.sender);
    }


    /**
     * @notice  Add New Car
     */
    function unlockCar() auth(UNLOCK_ROLE) external {
        if(locked){
            locked = false;
        }
        // emit event
        emit LockCar(msg.sender);
    }

}
