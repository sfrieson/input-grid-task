/*
  Formats numbers so that they only have 3 digits and a unit suffix.
  ex: 1234567 -> 1.23M
*/

const divisors = [
  {value: 1, symbol: ''},
  {value: 1e3, symbol: 'k'},
  {value: 1e6, symbol: 'M'},
  {value: 1e9, symbol: 'B'},
  {value: 1e12, symbol: 'T'}
];

export default function (num) {
  num = Math.round(num);
  if (num === 0) return 0;

  let divisor;
  let i = 0;
  while (divisors[i] && Math.abs(num) > divisors[i].value) {
    divisor = divisors[i];
    i++;
  }

  num /= divisor.value;
  const stringNum = num.toLocaleString();
  const decimalPosition = stringNum.indexOf('.');
  let sliceEnd = null;
  if (decimalPosition === -1 || decimalPosition === 3) sliceEnd = 3;
  else if (decimalPosition < 3) sliceEnd = 4;
  else sliceEnd = decimalPosition;

  return stringNum.slice(0, sliceEnd) + divisor.symbol;
}
