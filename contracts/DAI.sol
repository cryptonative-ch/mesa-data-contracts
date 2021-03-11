// SPDX-License-Identifier: MIT
pragma solidity ^0.6.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DAI is ERC20 {
  constructor() public ERC20("DAI", "DAI") {
    _setupDecimals(18);
  }

  function mint(address _to, uint256 _amount) public {
      _mint(_to, _amount);
  }

}
