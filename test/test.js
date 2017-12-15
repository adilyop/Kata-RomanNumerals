
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
    it('should return VI when input is 6', () => {
        expect(romanNumber(6)).to.equal('VI');
    });
    it('should return VII when input is 7', () => {
        expect(romanNumber(7)).to.equal('VII');
    });
    it('should return VIII when input is 8', () => {
        expect(romanNumber(8)).to.equal('VIII');
    });
    it('should return XI when input is 9', () => {
        expect(romanNumber(9)).to.equal('IX');
    });
    it('should return X when input is 10', () => {
        expect(romanNumber(10)).to.equal('X');
    });
    it('should return XI when input is 11', () => {
        expect(romanNumber(11)).to.equal('XI');
    });
    it('should return XII when input is 12', () => {
        expect(romanNumber(12)).to.equal('XII');
    });
    it('should return XIII when input is 13', () => {
        expect(romanNumber(13)).to.equal('XIII');
    });
    it('should return XIV when input is 14', () => {
        expect(romanNumber(14)).to.equal('XIV');
    });
    it('should return XV when input is 15', () => {
        expect(romanNumber(15)).to.equal('XV');
    });
    it('should return XVI when input is 16', () => {
        expect(romanNumber(16)).to.equal('XVI');
    });
    it('should return XVII when input is 17', () => {
        expect(romanNumber(17)).to.equal('XVII');
    });
    it('should return V when input is 18', () => {
        expect(romanNumber(18)).to.equal('XVIII');
    });
    it('should return XVIII when input is 19', () => {
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
    it('should return V when input is 24', () => {
        expect(romanNumber(24)).to.equal('XXIV');
    });
    it('should return V when input is 25', () => {
        expect(romanNumber(25)).to.equal('XXV');
    });
    it('should return V when input is 26', () => {
        expect(romanNumber(26)).to.equal('XXVI');
    });
    it('should return V when input is 27', () => {
        expect(romanNumber(27)).to.equal('XXVII');
    });
    it('should return V when input is 28', () => {
        expect(romanNumber(28)).to.equal('XXVIII');
    });
    it('should return V when input is 30', () => {
        expect(romanNumber(30)).to.equal('XXX');
    });
    it('should return V when input is 31', () => {
        expect(romanNumber(31)).to.equal('XXXI');
    });
    it('should return V when input is 33', () => {
        expect(romanNumber(33)).to.equal('XXXIII');
    });
    it('should return V when input is 34', () => {
        expect(romanNumber(34)).to.equal('XXXIV');
    });
    it('should return V when input is 35', () => {
        expect(romanNumber(35)).to.equal('XXXV');
    });
    it('should return V when input is 39', () => {
        expect(romanNumber(39)).to.equal('XXXIX');
    });
    it('should return XL when input is 40', () => {
        expect(romanNumber(40)).to.equal('XL');
    });
    it('should return XLI when input is 41', () => {
        expect(romanNumber(41)).to.equal('XLI');
    });
    it('should return XLIII when input is 43', () => {
        expect(romanNumber(43)).to.equal('XLIII');
    });
    it('should return XLIV when input is 44', () => {
        expect(romanNumber(44)).to.equal('XLIV');
    });
    it('should return XLV when input is 45', () => {
        expect(romanNumber(45)).to.equal('XLV');
    });
    it('should return XLVIII when input is 48', () => {
        expect(romanNumber(48)).to.equal('XLVIII');
    });
    it('should return XLVIII when input is 49', () => {
        expect(romanNumber(49)).to.equal('XLIX');
    });
    it('should return L when input is 50', () => {
        expect(romanNumber(50)).to.equal('L');
    });
    it('should return LI when input is 51', () => {
        expect(romanNumber(51)).to.equal('LI');
    });
    it('should return LIII when input is 53', () => {
        expect(romanNumber(53)).to.equal('LIII');
    });
    it('should return LIV when input is 54', () => {
        expect(romanNumber(54)).to.equal('LIV');
    });
    it('should return LV when input is 55', () => {
        expect(romanNumber(55)).to.equal('LV');
    });
    it('should return LVIII when input is 58', () => {
        expect(romanNumber(58)).to.equal('LVIII');
    });
    it('should return LIX when input is 59', () => {
        expect(romanNumber(59)).to.equal('LIX');
    });
    it('should return LX when input is 60', () => {
        expect(romanNumber(60)).to.equal('LX');
    });
});