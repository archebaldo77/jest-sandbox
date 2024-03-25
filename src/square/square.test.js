const square = require(`./square`);

describe(`Test cases for square (fn)`, () => {
  beforeEach(() => jest.clearAllMocks());

  test(`with valid data`, () => {
    expect(square(2)).toBe(4);
  });

  test(`corner case`, () => {
    expect(square(1)).toBe(1);
  });

  test(`check correct call Math (with valid data)`, () => {
    const spyMathPow = jest.spyOn(Math, `pow`);
    square(2);

    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });

  test(`check correct call Math (with invalid data)`, () => {
    const spyMathPow = jest.spyOn(Math, `pow`);
    square(1);

    expect(spyMathPow).not.toHaveBeenCalled();
  });
});
