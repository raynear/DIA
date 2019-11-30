/*
DiaStableCoin : 0xF0502E151076A6a1a38e1689e7B13fC73d7942D8
Pool : 0x7002B18b24E556c9da329e247B1E77a6F55A3add
Market : 0xbdFF61c24e8A0F8a8770e30E172E40a19a77bCf2

ReportRegistry : 0x542e4382C18865618B73fBb294AA0B4783Bad10E
DiaShieldNFT : 0xbbBA22b4fF18a8cdd7b74b5aA207D7195c3b970D

*/
const NFTContractAddress = "0xbbBA22b4fF18a8cdd7b74b5aA207D7195c3b970D";
const marketContractAddress = "0x4bE82FC4f07dEF398850E9611aBfd4fa574F78C2";
const reportContractAddress = "0x542e4382C18865618B73fBb294AA0B4783Bad10E";
const poolContractAddress = "0x7002B18b24E556c9da329e247B1E77a6F55A3add";

const NFTABI = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_proof",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_inputs",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes32",
        "name": "_reportRoot",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_tokenId",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_commitment",
        "type": "bytes32"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_proof",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_inputs",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes32",
        "name": "_root",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_nullifier",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_commitment",
        "type": "bytes32"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_anchorRegistry",
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
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "token_id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "commitment_index",
        "type": "uint256"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "nullifier",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "commitment_index",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "latestRoot",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "leafCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "merkleTree",
    "outputs": [
      {
        "internalType": "bytes27",
        "name": "",
        "type": "bytes27"
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "nullifiers",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "treeLUT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const marketABI = [
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
        "internalType": "bytes32",
        "name": "reportRoot",
        "type": "bytes32"
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
    "name": "rentDiamond",
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
            "internalType": "bytes32",
            "name": "reportRoot",
            "type": "bytes32"
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
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
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

const reportABI = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
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
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_identifier",
        "type": "bytes32"
      }
    ],
    "name": "getAnchorById",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "girdleCode",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "documentRoot",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "schema",
        "type": "string"
      }
    ],
    "name": "register",
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
        "internalType": "bytes32",
        "name": "girdleCode",
        "type": "bytes32"
      }
    ],
    "name": "getCommitment",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "documentRoot",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "schema",
            "type": "string"
          }
        ],
        "internalType": "struct ReportRegistry_pp.Commitment",
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "size",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "girdleCodesLUT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "code",
        "type": "bytes32"
      }
    ],
    "name": "NewCommitment",
    "type": "event"
  }
];

const poolABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "profits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "availableDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "deposit",
        "type": "uint256"
      }
    ],
    "name": "investForDiaTx",
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
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "caculateProfit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "settleforDeposit",
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
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "requestDeposit",
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
    "constant": true,
    "inputs": [],
    "name": "totalDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

const Gemmologist = "0x6304Dfe18f9C9e345300e5E6D4112DF1F426dE46";
const WholeSaler = "0x697d02973Ca7ca4e886c31f6600013B630Aa00D4";
const Retailer = "0xa09550C9B7c9B0884c3296a64073E80596B718E2";
const Investor = "0xD778e88dCF26f63D104c88056AE3c2A57FC3a0df";

// const Gemmologist = "0x8a04a53B05B47D6dc3f384400A37496140a818cD";
// const WholeSaler = "0x3095544b66Fb92C34097343ECB6148aF42fC535e";
// const Retailer = "0x760266F026464E8d9a784E0438a8Fab83194DD86";
// const Investor = "0xe90444895711AE970eBA83ad7186C58e51b21501";

export { Gemmologist, WholeSaler, Retailer, Investor, NFTContractAddress, NFTABI, marketContractAddress, marketABI, reportContractAddress, reportABI, poolContractAddress, poolABI };