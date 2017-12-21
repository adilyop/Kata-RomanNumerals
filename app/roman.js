const mapSymbole = new Map([
    ['M' , 1000], ['CM' , 900], ['D' , 500], ['CD' , 400], ['C' , 100], ['XC' , 90], 
    ['L' , 50], ['XL' , 40], ['X' , 10], ['IX' , 9], ['V' , 5], ['IV' , 4], ['I' , 1]
]);
function toRomanNumber(n){
    if (isNaN(n) || n === '') {
        return 'Error';
    }
    let result = '';
    mapSymbole.forEach(function(valeur, clé) {
        while(n >= valeur) {
            result += clé;
            n -= valeur;
        }
      });   
      return result
};
function toArabicNumber(roman){
    let result = 0;
    while(roman.length != 0) {
        var twoDigits = roman.slice(0, 2);
        if (isNaN(mapSymbole.get(twoDigits))) {
            result += mapSymbole.get(roman[0]);
            roman = roman.slice(1);
        } else {
            result += mapSymbole.get(twoDigits);
            roman = roman.slice(2);
        }
    } 
    return result
};

module.exports = {
    toRomanNumber,
    toArabicNumber
 }