const chai = require("chai");
const {describe, it} = require('mocha');
const chaiAsPromised = require("chai-as-promised");

const data = require('../data/serverList.json');

chai.use(chaiAsPromised);

const assert = chai.assert;

const { getServerStatus } = require('../apis/server');

describe('api/server.js', () => {
  describe('getServerStatus()', () => {
    it('should returns server object', async () => {
      let resolvedValueForOfflineServer = await getServerStatus(data[0])
      assert.typeOf(resolvedValueForOfflineServer, 'object');
    })
    it('return obj should have isServerOnline and other value', async () => {
      let resolvedValueForOfflineServer = await getServerStatus(data[0])
      assert.containsAllKeys(resolvedValueForOfflineServer, ['url', 'priority', 'isServerOnline'])
    })
  })
})