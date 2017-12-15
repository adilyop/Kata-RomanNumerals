
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
    if (input === 6) {
        return 'VI';
    }
    if (input === 7) {
        return 'VII';
    }
    if (input === 8) {
        return 'VIII';
    }
    return input;
}


module.exports = romanNumber;