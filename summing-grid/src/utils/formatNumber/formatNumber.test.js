import formatNumber from '.';

test('it rounds the nubmer', () => {
  expect(formatNumber(12.3)).toEqual('12');
  expect(formatNumber(12.6)).toEqual('13');
});

test('it allows number ≤ 1000 through normally', () => {
  expect(formatNumber(123)).toEqual('123');
});

test('it makes decimal figures', () => {
  expect(formatNumber(1234)).toContain('1.23');
  expect(formatNumber(1234567)).toContain('1.23');
  expect(formatNumber(1234567).length).toEqual(5);
});

test('it makes figures without decimals when possible', () => {
  expect(formatNumber(123456)).toContain('123');
  expect(formatNumber(123456789)).toContain('123');
  expect(formatNumber(123456).length).toEqual(4);
});

test('it includes the correct unit', () => {
  expect(formatNumber(1234)).toContain('k');
  expect(formatNumber(12345)).toContain('k');
  expect(formatNumber(123456)).toContain('k');
  expect(formatNumber(1234567)).toContain('M');
  expect(formatNumber(12345678)).toContain('M');
  expect(formatNumber(123456789)).toContain('M');
  expect(formatNumber(1234567890)).toContain('B');
  expect(formatNumber(12345678901)).toContain('B');
  expect(formatNumber(123456789012)).toContain('B');
  expect(formatNumber(1234567890123)).toContain('T');
  expect(formatNumber(12345678901234)).toContain('T');
  expect(formatNumber(123456789012345)).toContain('T');
});

test('shows more than three digits after 999 trillion', () => {
  expect(formatNumber(1234567890123456)).toEqual('1,234T');
});
