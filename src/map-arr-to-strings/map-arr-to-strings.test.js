const mapArrToStrings = require(`./map-arr-to-strings`);

describe(`Test cases for mapArrToStrings (fn)`, () => {
  test(`with valid data (only numbers)`, () => {
    expect(mapArrToStrings([1, 2])).toEqual([`1`, `2`]);
  });

  test(`with valid data (empty arr)`, () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test(`with valid data (different types of data)`, () => {
    expect(mapArrToStrings([1, 2, `string`, null, undefined])).toEqual([
      `1`,
      `2`,
    ]);
  });

  test(`with invalid data (empty arr)`, () => {
    expect(mapArrToStrings([`1`, `2`, `3`])).not.toBeNull();
    expect(mapArrToStrings([`1`, `2`, `3`])).toEqual([]);
  });
});
