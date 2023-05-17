const CalTest = require('./calculator');

describe('Calculator', () => {
  let calculator;
  beforeEach( () => {
    calculator = new CalTest();
  });

  test('Add two numbers', () => {
    const result = calculator.add(4,5);
    expect(result).toBe(9);
  });

  test('Multiply', () => {
    const mult = calculator.mult(2,2);
    expect(mult).toBe(4);
  });

  test('Multiply', () => {
    const sub = calculator.sub(2,2);
    expect(sub).toBe(0);
  });

  test('Div', () => {
    const div = calculator.div(2,2);
    expect(div).toBe(1);
  });


})