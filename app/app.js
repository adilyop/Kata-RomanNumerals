
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
    return input;
}


module.exports = romanNumber;