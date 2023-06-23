/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        CONTRACT_ADDRESS: "0x653bd44d0e0a0ad230c3b67915eadd9e176c9a77",
        ABI: [{
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_num",
                    "type": "uint256"
                }],
                "name": "writeNum",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_number",
                    "type": "uint256"
                }],
                "name": "writeNumber",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "readNum",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "readNumber",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
}

module.exports = nextConfig