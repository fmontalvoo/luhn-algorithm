const { checkLuhn } = require('./check.luhn');

describe("Check Luhn", () => {
    test("Must return true if the last digit check is valid",
        () => {
            const expected = true;
            const result = checkLuhn("");
            expect(expected).toBe(result);
        });
});