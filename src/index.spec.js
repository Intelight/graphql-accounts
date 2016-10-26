import chai from 'chai';
//eslint-disable-next-line
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from "chai-as-promised";

import Accounts from './index';
//eslint-disable-next-line
const should = chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('graphql-accounts', () => {

  it('sets foo', () => {
    const accounts = new Accounts();
    accounts.foo.should.be.true;
  });

});
