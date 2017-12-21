
const chai = require('chai');
const expect = chai.expect;

const romanNumber = require('../app/roman').toRomanNumber;
const arabicNumber = require('../app/roman').toArabicNumber;

describe('to Roman Numerals Test: \n', () => {
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
describe('to Arabic Numerals Test: \n', () => {
    it('should return values when input is terminated by is I*', () => {
        expect(arabicNumber('I')).to.equal(1);
        expect(arabicNumber('XII')).to.equal(12);
        expect(arabicNumber('XXIII')).to.equal(23);
        expect(arabicNumber('CI')).to.equal(101);
        expect(arabicNumber('DII')).to.equal(502);
    });
    it('should return values when input include IV XL CD', () => {
        expect(arabicNumber('IV')).to.equal(4);
        expect(arabicNumber('XIV')).to.equal(14);
        expect(arabicNumber('XL')).to.equal(40);
        expect(arabicNumber('XLIV')).to.equal(44);
        expect(arabicNumber('CD')).to.equal(400);
    });
    it('should return values when input is terminated by is VI*', () => {
        expect(arabicNumber('VI')).to.equal(6);
        expect(arabicNumber('XVII')).to.equal(17);
        expect(arabicNumber('XXVIII')).to.equal(28);
        expect(arabicNumber('CVI')).to.equal(106);
        expect(arabicNumber('DVIII')).to.equal(508);
    });
    it('should return values when input include IX, XC or CM', () => {
        expect(arabicNumber('IX')).to.equal(9);
        expect(arabicNumber('XIX')).to.equal(19);
        expect(arabicNumber('XC')).to.equal(90);
        expect(arabicNumber('XCIX')).to.equal(99);
        expect(arabicNumber('CM')).to.equal(900);
    });
    it('should return valies when input is a new letter', () => {
        expect(arabicNumber('V')).to.equal(5);
        expect(arabicNumber('X')).to.equal(10);
        expect(arabicNumber('L')).to.equal(50);
        expect(arabicNumber('C')).to.equal(100);
        expect(arabicNumber('D')).to.equal(500);
        expect(arabicNumber('M')).to.equal(1000);
    });
});