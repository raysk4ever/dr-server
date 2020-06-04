const chai = require("chai");
const {describe, it} = require('mocha');
const chaiAsPromised = require("chai-as-promised");

const data = require('../data/serverList.json');

chai.use(chaiAsPromised);

const expect = chai.expect;

const { findServer } = require('../index');

describe('index.js', () => {
  describe('findServer()', () => {
    it('should returns Error when no server online', async () => {
      
      findServer([data[0]]).catch(err=>{
        expect(()=>err).to.throw('No Online Server Found');
      })
    })

    it('should returns least Priority Online server', async () => {
      try{
        let response = await findServer(data);
        expect(Object.keys(response)).to.have.members(['url', 'priority', 'isServerOnline'])
      }catch(err){
        expect(err).to.be.a(ReferenceError);
      }
    })

    it('should return Error after 5sec', async ()=>{
        findServer(data).catch(err=>{
          expect(()=>err).to.throw('No Online Server Found');
        })
    })
  })
})