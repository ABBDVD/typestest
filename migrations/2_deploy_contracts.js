var TestTypes = artifacts.require("./TestTypes.sol");

module.exports = function(deployer) {
  deployer.deploy(TestTypes);
};
