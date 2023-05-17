const cap = require('./capitalize')
test('capitalize', () => {
  const inputString = 'bahati';
  const ouputString = 'Bahati';
  const capitalize = cap(inputString);
   expect(capitalize).toBe(ouputString);
})