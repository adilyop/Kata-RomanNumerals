
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
    it('should return LXI when input is 61', () => {
        expect(romanNumber(61)).to.equal('LXI');
    });
    it('should return LXIII when input is 63', () => {
        expect(romanNumber(63)).to.equal('LXIII');
    });
    it('should return LXIV when input is 64', () => {
        expect(romanNumber(64)).to.equal('LXIV');
    });
    it('should return LXV when input is 65', () => {
        expect(romanNumber(65)).to.equal('LXV');
    });
    it('should return LXVI when input is 66', () => {
        expect(romanNumber(66)).to.equal('LXVI');
    });
    it('should return LXVIII when input is 68', () => {
        expect(romanNumber(68)).to.equal('LXVIII');
    });
    it('should return LXIX when input is 69', () => {
        expect(romanNumber(69)).to.equal('LXIX');
    });
    it('should return LXX when input is 70', () => {
        expect(romanNumber(70)).to.equal('LXX');
    });
    it('should return LXXIX when input is 79', () => {
        expect(romanNumber(79)).to.equal('LXXIX');
    });
    it('should return LXXX when input is 80', () => {
        expect(romanNumber(80)).to.equal('LXXX');
    });
    it('should return LXXXIII when input is 83', () => {
        expect(romanNumber(83)).to.equal('LXXXIII');
    });
    it('should return LXXXIV when input is 84', () => {
        expect(romanNumber(84)).to.equal('LXXXIV');
    });
    it('should return LXXXV when input is 85', () => {
        expect(romanNumber(85)).to.equal('LXXXV');
    });
    it('should return LXXXVIII when input is 88', () => {
        expect(romanNumber(88)).to.equal('LXXXVIII');
    });
    it('should return LXXXIX when input is 89', () => {
        expect(romanNumber(89)).to.equal('LXXXIX');
    });
    it('should return XC when input is 90', () => {
        expect(romanNumber(90)).to.equal('XC');
    });
    it('should return XC when input is 91', () => {
        expect(romanNumber(91)).to.equal('XCI');
    });
    it('should return XC when input is 92', () => {
        expect(romanNumber(92)).to.equal('XCII');
    });
    it('should return XC when input is 93', () => {
        expect(romanNumber(93)).to.equal('XCIII');
    });
    it('should return XC when input is 94', () => {
        expect(romanNumber(94)).to.equal('XCIV');
    });
    it('should return XC when input is 95', () => {
        expect(romanNumber(95)).to.equal('XCV');
    });
    it('should return XC when input is 96', () => {
        expect(romanNumber(96)).to.equal('XCVI');
    });
    it('should return XC when input is 97', () => {
        expect(romanNumber(97)).to.equal('XCVII');
    });
    it('should return XC when input is 98', () => {
        expect(romanNumber(98)).to.equal('XCVIII');
    });
    it('should return XC when input is 99', () => {
        expect(romanNumber(99)).to.equal('XCIX');
    });
    it('should return C when input is 100', () => {
        expect(romanNumber(100)).to.equal('C');
    });
    it('should return CXIII when input is 113', () => {
        expect(romanNumber(113)).to.equal('CXIII');
    });
    it('should return CXXIX when input is 129', () => {
        expect(romanNumber(129)).to.equal('CXXIX');
    });
    it('should return CXLIV when input is 144', () => {
        expect(romanNumber(144)).to.equal('CXLIV');
    });
    it('should return CCXLIII when input is 243', () => {
        expect(romanNumber(243)).to.equal('CCXLIII');
    });
    it('should return CCCXX when input is 320', () => {
        expect(romanNumber(320)).to.equal('CCCXX');
    });
    it('should return CCCXCIX when input is 399', () => {
        expect(romanNumber(399)).to.equal('CCCXCIX');
    });
    it('should return CD when input is 400', () => {
        expect(romanNumber(400)).to.equal('CD');
    });
    it('should return CDXXIII when input is 423', () => {
        expect(romanNumber(423)).to.equal('CDXXIII');
    });
    it('should return CDLXXXIX when input is 489', () => {
        expect(romanNumber(489)).to.equal('CDLXXXIX');
    });
    it('should return CDXCIX when input is 499', () => {
        expect(romanNumber(499)).to.equal('CDXCIX');
    });
    it('should return D when input is 500', () => {
        expect(romanNumber(500)).to.equal('D');
    });
    it('should return DLXI when input is 561', () => {
        expect(romanNumber(561)).to.equal('DLXI');
    });
    it('should return DCLXVI when input is 666', () => {
        expect(romanNumber(666)).to.equal('DCLXVI');
    });
    it('should return DCCLXXVII when input is 777', () => {
        expect(romanNumber(777)).to.equal('DCCLXXVII');
    });
    it('should return DCCCXCIX when input is 899', () => {
        expect(romanNumber(899)).to.equal('DCCCXCIX');
    });
    it('should return CM when input is 900', () => {
        expect(romanNumber(900)).to.equal('CM');
    });
    it('should return CMXLV when input is 945', () => {
        expect(romanNumber(945)).to.equal('CMXLV');
    });
    it('should return CMLXXXIX when input is 989', () => {
        expect(romanNumber(989)).to.equal('CMLXXXIX');
    });
    it('should return CMXC when input is 990', () => {
        expect(romanNumber(990)).to.equal('CMXC');
    });
    it('should return CMXCIX when input is 999', () => {
        expect(romanNumber(999)).to.equal('CMXCIX');
    });
    it('should return M when input is 1000', () => {
        expect(romanNumber(1000)).to.equal('M');
    });
    it('should return MDXXVII when input is 1527', () => {
        expect(romanNumber(1527)).to.equal('MDXXVII');
    });
    it('should return MMMDXXIII when input is 3523', () => {
        expect(romanNumber(3523)).to.equal('MMMDXXIII');
    });
});