const { checkLuhn, isValid, generateCheckDigit } = require('./check.luhn');

describe("Luhn's algorithm", () => {
    test("Must return the check digit",
        () => {
            const expected = 1;
            const result = checkLuhn("422273337030291");
            expect(expected).toBe(result);
        });
    test("Must return true if the last digit check is valid",
        () => {
            const expected = true;
            const result = isValid("4222733370302911");
            expect(expected).toBe(result);
        });
    test("Must return the string with the check digit",
        () => {
            const expected = "4222733370302911";
            const result = generateCheckDigit("422273337030291");
            expect(expected).toBe(result);
        });
});