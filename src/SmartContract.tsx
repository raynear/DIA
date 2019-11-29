const playerRoleContractAddress = "0xFCd8f415ce3eC782501a89137A9b476e91dafa83";
const playerRoleABI = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_gemologists",
        "type": "address[]"
      }
    ],
    "name": "addGemologists",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_retailers",
        "type": "address[]"
      }
    ],
    "name": "addRetailers",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_wholesalers",
        "type": "address[]"
      }
    ],
    "name": "addWholesalers",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      }
    ],
    "name": "checkGemologist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      }
    ],
    "name": "checkRetailer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      }
    ],
    "name": "checkWholesaler",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      }
    ],
    "name": "checkPlayerRole",
    "outputs": [
      {
        "internalType": "enum PlayerRole.Role[]",
        "name": "",
        "type": "uint8[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = "0xc4be81B466F8cd2Eb2C245E58e28bbA7F571E33e";
const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "cut",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "color",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "clarity",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "carat",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "price",
        "type": "uint32"
      }
    ],
    "name": "register",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      },
      {
        "internalType": "enum Market.DiaStatus",
        "name": "newStatus",
        "type": "uint8"
      }
    ],
    "name": "transitState",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDiamonds",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "itemId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "cut",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "clarity",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "carat",
            "type": "string"
          },
          {
            "internalType": "uint32",
            "name": "price",
            "type": "uint32"
          },
          {
            "internalType": "enum Market.DiaStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Market.OpenData[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const marketContractAddress = "0x483B7C815BEeBc6cfb181E2f84bcFb2309D13611";
const marketABI = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }
    ],
    "name": "changeDiamondStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "cut",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "color",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "clarity",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "carat",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "price",
        "type": "uint32"
      }
    ],
    "name": "register",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }
    ],
    "name": "returnDiamond",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      },
      {
        "internalType": "enum Market.DiaStatus",
        "name": "newStatus",
        "type": "uint8"
      }
    ],
    "name": "transitStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "fundPool",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "cut",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "color",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "clarity",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "carat",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "price",
        "type": "uint32"
      }
    ],
    "name": "Register",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "price",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "addrFundPool",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }
    ],
    "name": "getDiamond",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "itemId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "cut",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "clarity",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "carat",
            "type": "string"
          },
          {
            "internalType": "uint32",
            "name": "price",
            "type": "uint32"
          },
          {
            "internalType": "enum Market.DiaStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Market.OpenData",
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDiamonds",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "enum Market.DiaStatus[]",
        "name": "",
        "type": "uint8[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export { playerRoleContractAddress, playerRoleABI, marketContractAddress, marketABI, contractAddress, abi };