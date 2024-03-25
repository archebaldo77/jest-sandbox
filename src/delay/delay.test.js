const delay = require(`./delay`);

describe(`Test cases for delay (fn)`, () => {
  test(`with valid data (async test case)`, async () => {
    const result = await delay(() => `Andrey Zakharov`, 100);

    expect(result).toBe(`Andrey Zakharov`);
  });
});
