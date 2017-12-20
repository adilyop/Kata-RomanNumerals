
function romanNumber(input) {
    let result = '';
    result += 'M'.repeat(input / 1000);
    input = input % 1000;
    if (Math.floor(input / 100) === 9) {
        result += 'CM';
    }
    input = input % 900;
    if (input / 500) {
        result += 'D'.repeat(input / 500);
    }
    input = input % 500;
    if (Math.floor(input / 100) === 4) {
        result += 'CD';
    }
    if (input / 100 < 4) {
        result += 'C'.repeat(input / 100);
    }
    input = input % 100;
    if (Math.floor(input / 10) === 9) {
        result += 'XC';
    }
    input = input % 90;
    result += 'L'.repeat(input / 50);
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
function romanNumberRecursive(input) {
    let result = '';
    while (input !== 0) {
        result += 'M'.repeat(input / 1000);

    }
    result += 'M'.repeat(input / 1000);
    input = input % 1000;
    if (Math.floor(input / 100) === 9) {
        result += 'CM';
    }
    input = input % 900;
    if (input / 500) {
        result += 'D'.repeat(input / 500);
    }
    input = input % 500;
    if (Math.floor(input / 100) === 4) {
        result += 'CD';
    }
    if (input / 100 < 4) {
        result += 'C'.repeat(input / 100);
    }
    input = input % 100;
    if (Math.floor(input / 10) === 9) {
        result += 'XC';
    }
    input = input % 90;
    result += 'L'.repeat(input / 50);
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