module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    rinkeby: {
      host :"localhost",
      port : 8545,
      network_id: "4", // Rinkeby ID 4
      from : "0xdC99B3f0dE8225D71DeAD996E26B833a366fA8d5", //Account from which it will be deploy 
      gas: 4612388
    }
  }
};