const validateValue = require(`./validate-value`);

describe(`Test cases for validateValue (fn)`, () => {
  test(`with valid data`, () => {
    expect(validateValue(5)).toBe(true);
  });

  test(`with invalid data (negative)`, () => {
    expect(validateValue(-5)).toBe(false);
  });

  test(`with invalid data (positive)`, () => {
    expect(validateValue(15)).toBe(false);
  });

  test(`corner case (min)`, () => {
    expect(validateValue(0)).toBe(true);
  });

  test(`corner case (max)`, () => {
    expect(validateValue(10)).toBe(true);
  });
});
