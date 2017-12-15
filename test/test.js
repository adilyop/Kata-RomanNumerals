
const chai = require('chai');
const expect = chai.expect;

const romanNumber = require('../app/app');

describe('FizzBuzz Kata Test: \n', () => {
    it('should return I when input is 1', () => {
        expect(romanNumber(1)).to.equal('I');
    });
    it('should return II when input is 2', () => {
        expect(romanNumber(2)).to.equal('II');
    });
    it('should return III when input is 3', () => {
        expect(romanNumber(3)).to.equal('III');
    });
});