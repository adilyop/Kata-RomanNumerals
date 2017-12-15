
function romanNumber(input) {
    let result = '';
    // if (input < 4) {
    //     result = 'I'.repeat(input);
    // }
    // if (input === 4) {
    //     result = 'IV';
    // }
    // if (input >= 5 && input <= 8) {
    //     result = 'V' + 'I'.repeat(input % 5);
    // }
    // if (input === 9) {
    //     result = 'IX'
    // }
    // if (input >= 10 && input <= 13) {
    //     result = 'X' + 'I'.repeat(input % 5);
    // }
    // if (input === 14) {
    //     result = 'XIV';
    // }
    // if (input >= 15 && input <= 18) {
    //     result = 'XV' + 'I'.repeat(input % 5);
    // }
    // if (input === 19) {
    //     result = 'XIX';
    // }
    // if (input >= 20 && input <= 23) {
    //     result = 'XX' + 'I'.repeat(input % 5);
    // }
    // if (input === 24) {
    //     result = 'XXIV';
    // }
    // if (input >= 25 && input <= 28) {
    //     result = 'XXV' + 'I'.repeat(input % 5);
    // }

    if (input / 50) {
        result += 'L'.repeat(input / 50);
    }
    input = input % 50;
    if (Math.floor(input / 10) === 4) {
        result += 'XL';
    }
    if (input / 10 < 4) {
        result += 'X'.repeat(input / 10);
    }
    if (input % 10 === 4) {
        result += 'IV';
    }
    if (input % 10 === 9) {
        result += 'IX';
    }
    if (input % 10 >= 5 && input % 10 <= 8) {
        result += 'V' + 'I'.repeat(input % 5);
    }
    if (input % 10 >= 1 && input % 10 <= 3) {
        result += 'I'.repeat(input % 10);
    }
    return result;
}


module.exports = romanNumber;