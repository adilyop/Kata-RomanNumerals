
const chai = require('chai');
const expect = chai.expect;

const romanNumber = require('../app/app');

describe('FizzBuzz Kata Test: \n', () => {
    it('should return I when input is 1', () => {
        expect(romanNumber(1)).to.equal('I');
    });
});