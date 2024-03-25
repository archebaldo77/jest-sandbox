const getMarkup = require(`./get-markup`);

test(`Snapshot test for getMarkup (fn)`, () => {
  expect(getMarkup()).toMatchSnapshot();
});
