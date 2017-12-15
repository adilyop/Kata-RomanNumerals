
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
    it('should return IV when input is 4', () => {
        expect(romanNumber(4)).to.equal('IV');
    });
    it('should return V when input is 5', () => {
        expect(romanNumber(5)).to.equal('V');
    });
    it('should return V when input is 6', () => {
        expect(romanNumber(6)).to.equal('VI');
    });
    it('should return V when input is 7', () => {
        expect(romanNumber(7)).to.equal('VII');
    });
    it('should return V when input is 8', () => {
        expect(romanNumber(8)).to.equal('VIII');
    });
});