
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
    it('should return V when input is 9', () => {
        expect(romanNumber(9)).to.equal('IX');
    });
    it('should return V when input is 10', () => {
        expect(romanNumber(10)).to.equal('X');
    });
    it('should return V when input is 11', () => {
        expect(romanNumber(11)).to.equal('XI');
    });
    it('should return V when input is 12', () => {
        expect(romanNumber(12)).to.equal('XII');
    });
    it('should return V when input is 13', () => {
        expect(romanNumber(13)).to.equal('XIII');
    });
    it('should return V when input is 14', () => {
        expect(romanNumber(14)).to.equal('XIV');
    });
    it('should return V when input is 15', () => {
        expect(romanNumber(15)).to.equal('XV');
    });
    it('should return V when input is 16', () => {
        expect(romanNumber(16)).to.equal('XVI');
    });
    it('should return V when input is 17', () => {
        expect(romanNumber(17)).to.equal('XVII');
    });
    it('should return V when input is 18', () => {
        expect(romanNumber(18)).to.equal('XVIII');
    });
    it('should return V when input is 19', () => {
        expect(romanNumber(19)).to.equal('XIX');
    });
    it('should return V when input is 20', () => {
        expect(romanNumber(20)).to.equal('XX');
    });
    it('should return V when input is 21', () => {
        expect(romanNumber(21)).to.equal('XXI');
    });
    it('should return V when input is 22', () => {
        expect(romanNumber(22)).to.equal('XXII');
    });
    it('should return V when input is 23', () => {
        expect(romanNumber(23)).to.equal('XXIII');
    });
});