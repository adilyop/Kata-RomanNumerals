
function romanNumber(input) {
    if (input === 1) {
        return 'I';
    }
    if (input === 2) {
        return 'II';
    }
    if (input === 3) {
        return 'III';
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