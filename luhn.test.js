const Luhn = require('./luhn');

describe("Luhn's algorithm", () => {

    test("Must return the check digit",
        () => {
            const expected = 7;
            const result = Luhn.calculateLuhn("422273337034291");
            expect(expected).toBe(result);
        });

    test("Must return true if the last digit check is valid",
        () => {
            const expected = true;
            const result = Luhn.isValid("4222733370342917");
            expect(expected).toBe(result);
        });

    test("Must return the string concat with the check digit",
        () => {
            const expected = "4222733370342917";
            const result = Luhn.generateCheckDigit("422273337034291");
            expect(expected).toBe(result);
        });

});