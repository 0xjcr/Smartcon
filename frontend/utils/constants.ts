const chainlinkNetworks: any[] = [
  {
    label: "Ethereum Sepolia",
    chainlinkSelector: "16015286601757825753", // chainSelector
    transfers: [
      {
        label: "Ethereum Sepolia → Polygon Mumbai Lane",
        tokenAdresses: [
          {
            symbol: "CCIP-BnM",
            address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
          },
          {
            symbol: "CCIP-LnM",
            address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
          },
        ],
      },

      // {
      //   label: "Ethereum Sepolia → Optimism Goerli Lane",
      //   tokenAdresses: [
      //     {
      //       symbol: "CCIP-BnM",
      //       address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
      //     },
      //     {
      //       symbol: "CCIP-LnM",
      //       address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
      //     },
      //   ],
      // },

      // {
      //   label: "Ethereum Sepolia → Arbitrum Goerli Lane",
      //   tokenAdresses: [
      //     {
      //       symbol: "CCIP-BnM",
      //       address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
      //     },
      //     {
      //       symbol: "CCIP-LnM",
      //       address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
      //     },
      //   ],
      // },
      // {
      //   label: "Ethereum Sepolia → Avalanche Fuji Lane",
      //   tokenAdresses: [
      //     {
      //       symbol: "CCIP-BnM",
      //       address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
      //     },
      //     {
      //       symbol: "CCIP-LnM",
      //       address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
      //     },
      //   ],
      // },

      // {
      //   label: "Ethereum Sepolia → BNB Chain Testnet Lane",
      //   tokenAdresses: [
      //     {
      //       symbol: "CCIP-BnM",
      //       address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
      //     },
      //     {
      //       symbol: "CCIP-LnM",
      //       address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
      //     },
      //   ],
      // },
      // {
      //   label: "Ethereum Sepolia → Base Goerli Lane",
      //   tokenAdresses: [
      //     {
      //       symbol: "CCIP-BnM",
      //       address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
      //     },
      //     {
      //       symbol: "CCIP-LnM",
      //       address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
      //     },
      //   ],
      // },
    ],
  },
  {
    label: "Polygon Mumbai",
    chainlinkSelector: "12532609583862916517", // chainSelector
    transfers: [
      {
        label: "Polygon Mumbai → Ethereum Sepolia Lane",
        tokenAdresses: [
          {
            symbol: "CCIP-BnM",
            address: "0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40",
          },
          {
            symbol: "CCIP-LnM",
            address: "0xc1c76a8c5bFDE1Be034bbcD930c668726E7C1987",
          },
        ],
      },
    ],
  },
];

const chainlinkTransferNetworks: any[] = [
  {
    label: "Ethereum Sepolia",
    value: "16015286601757825753", // chainSelector
  },
  {
    label: "Ethereum Sepolia → Optimism Goerli Lane",
    value: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05", // token
  },
];

const STORAGE_CONTRACT_ADDRESS = "0xC7F32bD66e32a22671cB38D924828947D53896F6";

const CONSTANTS = {
  STORAGE_CONTRACT_ADDRESS,
};
