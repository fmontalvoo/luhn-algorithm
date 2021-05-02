function checkLuhn(value = "") {
    if (!(/^\d+$/.test(value))) return false;

    const isEven = (num = 0) => (num % 2 == 0);

    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        let digit = parseInt(value[i]);
        if (isEven(i))
            sum += (digit * 2) >= 10 ? (digit * 2) - 9 : (digit * 2);
        else
            sum += digit;
    }
    let num = (sum % 10) === 0 ? 0 : 10 - (sum % 10);
    return num;
}

function isValid(value = "") {
    if (!(/^\d+$/.test(value))) return false;
    let toCheck = checkLuhn(value.substr(0, value.length - 1));
    if (toCheck === parseInt(value[value.length - 1]))
        return true;
    return true;

}

function generateCheckDigit(value = "") {
    if (!(/^\d+$/.test(value))) return;
    let checkDigit = checkLuhn(value);
    return value.concat(checkDigit);
}

module.exports = { checkLuhn, isValid, generateCheckDigit }