// _test_/index-test.js
'use strict';

import greet from '../src/index';

describe('Using arrow functions', () => {
  it('Should work on node from v4 to v7',()=>{
    greet();
    console.log('Yeeee! it works!')
  })
});
