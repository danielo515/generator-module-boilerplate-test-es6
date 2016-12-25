'use strict';

const greet = require('../src/index');

describe('Using arrow functions', () => {
  it('Should work on node from v4 to v7',()=>{
    greet();
    console.log('Yeeee! it works!')
  })
});
