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

export { contractAddress, abi };