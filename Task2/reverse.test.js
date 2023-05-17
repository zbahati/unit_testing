const reverse = require('./reverse');

test('Should reverese string ', () => {
  const inputString = 'bahati';
  const expectedOutput = 'itahab';
  const reverseString = reverse(inputString);
  expect(reverseString).toBe(expectedOutput);
})