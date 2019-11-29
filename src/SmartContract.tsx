const NFTContractAddress = "0x32B1d2aD8d38f35F651834E6Df08D08EcaC62303";
const reportContractAddress = "0x030C80d044091b4F83b25866E4350ED88B43E5Bf";
const marketContractAddress = "0x8569C52610db1452F5D98dB9a04faa6F9e78d631";

const NFTABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "merkleTree",
    "outputs": [
      {
        "name": "",
        "type": "bytes27"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x0df0ff90"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "nullifiers",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x2997e86b"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "leafCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x30e69fc3"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "latestRoot",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd7b0fef1"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "treeLUT",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd9e7c14b"
  },
  {
    "inputs": [
      {
        "name": "_anchorRegistry",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "token_id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "commitment",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "commitment_index",
        "type": "uint256"
      }
    ],
    "name": "Mint",
    "type": "event",
    "signature": "0x2a51231361b5b18fc70d285342d3e5bac50e0e37d31b0b7e291ba9e354f72b9d"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "nullifier",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "commitment",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "commitment_index",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "signature": "0xbc7a322f72742a0c810e1f76615f57ed3a5bbfcbd956d3d451b3158968faace9"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_proof",
        "type": "uint256[]"
      },
      {
        "name": "_inputs",
        "type": "uint256[]"
      },
      {
        "name": "_reportRoot",
        "type": "bytes32"
      },
      {
        "name": "_tokenId",
        "type": "bytes32"
      },
      {
        "name": "_commitment",
        "type": "bytes32"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x59f0df93"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_proof",
        "type": "uint256[]"
      },
      {
        "name": "_inputs",
        "type": "uint256[]"
      },
      {
        "name": "_root",
        "type": "bytes32"
      },
      {
        "name": "_nullifier",
        "type": "bytes32"
      },
      {
        "name": "_commitment",
        "type": "bytes32"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xab6f2d7e"
  }
];

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

const marketABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "addrFundPool",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9c166fbd"
  },
  {
    "inputs": [
      {
        "name": "fundPool",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "itemId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "cut",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "color",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "clarity",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "carat",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "price",
        "type": "uint32"
      }
    ],
    "name": "Register",
    "type": "event",
    "signature": "0x058a7142437a9d6ec41a4bee94a1ee7832a112ce70b6c70d33d9b0de860cc922"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "itemId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "price",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "success",
        "type": "bool"
      }
    ],
    "name": "Deposit",
    "type": "event",
    "signature": "0x32295dfcbea6190a89d19b43ea24624ca3500aeb96365456d3ee86e6ee6af190"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "cut",
        "type": "string"
      },
      {
        "name": "color",
        "type": "string"
      },
      {
        "name": "clarity",
        "type": "string"
      },
      {
        "name": "carat",
        "type": "string"
      },
      {
        "name": "reportRoot",
        "type": "bytes32"
      },
      {
        "name": "price",
        "type": "uint32"
      }
    ],
    "name": "register",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xb46c87e3"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "itemId",
        "type": "uint256"
      }
    ],
    "name": "getDiamond",
    "outputs": [
      {
        "components": [
          {
            "name": "itemId",
            "type": "uint256"
          },
          {
            "name": "cut",
            "type": "string"
          },
          {
            "name": "color",
            "type": "string"
          },
          {
            "name": "clarity",
            "type": "string"
          },
          {
            "name": "carat",
            "type": "string"
          },
          {
            "name": "price",
            "type": "uint32"
          },
          {
            "name": "reportRoot",
            "type": "bytes32"
          },
          {
            "name": "status",
            "type": "uint8"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe3ed14db"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDiamonds",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      },
      {
        "name": "",
        "type": "string[]"
      },
      {
        "name": "",
        "type": "string[]"
      },
      {
        "name": "",
        "type": "string[]"
      },
      {
        "name": "",
        "type": "string[]"
      },
      {
        "name": "",
        "type": "uint256[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "uint8[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xc2e41f2d"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "itemId",
        "type": "uint256"
      },
      {
        "name": "newStatus",
        "type": "uint8"
      }
    ],
    "name": "transitStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xd364de45"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "itemId",
        "type": "uint256"
      }
    ],
    "name": "changeDiamondStatus",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x551993d7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "itemId",
        "type": "uint256"
      }
    ],
    "name": "returnDiamond",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xdebf65e5"
  }
];

const reportABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x01ffc9a7"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "girdleCodesLUT",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9a676e8b"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "code",
        "type": "bytes32"
      }
    ],
    "name": "NewCommitment",
    "type": "event",
    "signature": "0xb03a5a3eb7a744ab6cc818ece45210e5dfe27150107ab8ba391b5f31a93c82b6"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "size",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x949d225d"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "girdleCode",
        "type": "bytes32"
      }
    ],
    "name": "getCommitment",
    "outputs": [
      {
        "components": [
          {
            "name": "documentRoot",
            "type": "bytes32"
          },
          {
            "name": "schema",
            "type": "string"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x7795820c"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "girdleCode",
        "type": "bytes32"
      },
      {
        "name": "documentRoot",
        "type": "bytes32"
      },
      {
        "name": "schema",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x0e5ceb47"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_identifier",
        "type": "bytes32"
      }
    ],
    "name": "getAnchorById",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x04d466b2"
  }
];

const Gemmologist = "0x6304Dfe18f9C9e345300e5E6D4112DF1F426dE46";
const WholeSaler = "0x697d02973Ca7ca4e886c31f6600013B630Aa00D4";
const Retailer = "0xa09550C9B7c9B0884c3296a64073E80596B718E2";
const Investor = "0xD778e88dCF26f63D104c88056AE3c2A57FC3a0df";

export { Gemmologist, WholeSaler, Retailer, Investor, NFTContractAddress, NFTABI, playerRoleContractAddress, playerRoleABI, marketContractAddress, marketABI, contractAddress, abi, reportContractAddress, reportABI };