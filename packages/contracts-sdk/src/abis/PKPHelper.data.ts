export const pkpHelper = {
  "address": "0x8bB62077437D918891F12c7F35d9e1B78468bF11",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pkpNft",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_pkpPermissions",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "permittedAuthMethodTypes",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedAuthMethodIds",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedAuthMethodPubkeys",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[][]",
          "name": "permittedAuthMethodScopes",
          "type": "uint256[][]"
        },
        {
          "internalType": "bool",
          "name": "addPkpEthAddressAsPermittedAddress",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "sendPkpToItself",
          "type": "bool"
        }
      ],
      "name": "mintNextAndAddAuthMethods",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedIpfsCIDs",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[][]",
          "name": "permittedIpfsCIDScopes",
          "type": "uint256[][]"
        },
        {
          "internalType": "address[]",
          "name": "permittedAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[][]",
          "name": "permittedAddressScopes",
          "type": "uint256[][]"
        },
        {
          "internalType": "uint256[]",
          "name": "permittedAuthMethodTypes",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedAuthMethodIds",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedAuthMethodPubkeys",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[][]",
          "name": "permittedAuthMethodScopes",
          "type": "uint256[][]"
        },
        {
          "internalType": "bool",
          "name": "addPkpEthAddressAsPermittedAddress",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "sendPkpToItself",
          "type": "bool"
        }
      ],
      "name": "mintNextAndAddAuthMethodsWithTypes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pkpNFT",
      "outputs": [
        {
          "internalType": "contract PKPNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pkpPermissions",
      "outputs": [
        {
          "internalType": "contract PKPPermissions",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newPkpNftAddress",
          "type": "address"
        }
      ],
      "name": "setPkpNftAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newPkpPermissionsAddress",
          "type": "address"
        }
      ],
      "name": "setPkpPermissionsAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}