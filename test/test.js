
const chai = require('chai');
const expect = chai.expect;

const romanNumber = require('../app/app');

describe('Roman Numerals Kata Test: \n', () => {
    it('should return I* when %10 is 1, 2 or 3', () => {
        expect(romanNumber(1)).to.equal('I');
        expect(romanNumber(12)).to.equal('XII');
        expect(romanNumber(23)).to.equal('XXIII');
        expect(romanNumber(101)).to.equal('CI');
        expect(romanNumber(502)).to.equal('DII');
    });
    it('should return IV, XL or CD when input include 4', () => {
        expect(romanNumber(4)).to.equal('IV');
        expect(romanNumber(14)).to.equal('XIV');
        expect(romanNumber(40)).to.equal('XL');
        expect(romanNumber(44)).to.equal('XLIV');
        expect(romanNumber(400)).to.equal('CD');
    });
    it('should return VI* when %10 is 6, 7 or 8', () => {
        expect(romanNumber(6)).to.equal('VI');
        expect(romanNumber(17)).to.equal('XVII');
        expect(romanNumber(28)).to.equal('XXVIII');
        expect(romanNumber(106)).to.equal('CVI');
        expect(romanNumber(508)).to.equal('DVIII');
    });
    it('should return IX, XC or CM when input include 9', () => {
        expect(romanNumber(9)).to.equal('IX');
        expect(romanNumber(19)).to.equal('XIX');
        expect(romanNumber(90)).to.equal('XC');
        expect(romanNumber(99)).to.equal('XCIX');
        expect(romanNumber(900)).to.equal('CM');
    });
    it('should return new roman letter', () => {
        expect(romanNumber(5)).to.equal('V');
        expect(romanNumber(10)).to.equal('X');
        expect(romanNumber(50)).to.equal('L');
        expect(romanNumber(100)).to.equal('C');
        expect(romanNumber(500)).to.equal('D');
        expect(romanNumber(1000)).to.equal('M');
    });
    it('should return error if argument is not valid', () => {
        expect(romanNumber('')).to.equal('Error');
        expect(romanNumber('String')).to.equal('Error');
    });
});