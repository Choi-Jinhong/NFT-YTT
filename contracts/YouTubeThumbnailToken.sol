pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract YouTubeThumbnailToken is ERC721Full{
  constructor(string memory name, string memory symbol) ERC721Full(name, symbol) public {}
}