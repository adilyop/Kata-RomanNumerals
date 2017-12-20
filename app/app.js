
function romanNumber(n){
    if (isNaN(n) || n === '') {
        return 'Error';
    }
    var r = ''
        for (var c = 0; c < 4; c++) {
            r += toRomanNumber(getDigitByIndex(toFourDigitFormat(n), c), c);
        }
        return r        
}

function toFourDigitFormat(input){
    return  '0'.repeat(4 - input.toString().length) + '' + input;
}

function getDigitByIndex(input, index){
    return input.toString()[index] 
}

function toRomanNumber(input, index) {
    let result = '';
    switch (index) {
        case 0:
            return 'M'.repeat(input);
            break;
        case 1:
            if(input < 4)
                return 'C'.repeat(input);
            else if(input == 4)
                return 'CD';
            else if(input < 9)
                return 'D' + 'C'.repeat(input - 5)
            else if(input == 9)
                return 'CM';
        break;
        case 2:
            if(input < 4)
                return 'X'.repeat(input);
            else if(input == 4)
                return 'XL';
            else if(input < 9)
                return 'L' + 'X'.repeat(input - 5)
            else if(input == 9)
                return 'XC';
        break;
        case 3:
            if(input < 4)
                return 'I'.repeat(input);
            else if(input == 4)
                return 'IV';
            else if(input < 9)
                return 'V' + 'I'.repeat(input - 5)
            else if(input == 9)
                return 'IX';
        break;
        default:
            return ''
        break;
    }
    return result;
}


module.exports = romanNumber;