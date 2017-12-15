
function romanNumber(input) {
    if (input < 4) {
        return 'I'.repeat(input);
    }
    if (input === 4) {
        return 'IV';
    }
    if (input === 5) {
        return 'V';
    }
    return input;
}


module.exports = romanNumber;