
function romanNumber(input) {
    if (input < 4) {
        return 'I'.repeat(input);
    }
    if (input === 4) {
        return 'IV';
    }
    if (input >= 5 && input <= 8) {
        return 'V' + 'I'.repeat(input % 5);
    }
    if (input === 9) {
        return 'IX'
    }
    if (input >= 10 && input <= 13) {
        return 'X' + 'I'.repeat(input % 5);
    }
    return input;
}


module.exports = romanNumber;