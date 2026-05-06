const ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

function toReadable(number) {
  if (number === 0) return 'zero';

  if (number < 20) {
    return ones[number];
  }

  if (number < 100) {
    const ten = tens[Math.floor(number / 10)];
    const one = ones[number % 10];
    return one ? `${ten} ${one}` : ten;
  }

  if (number < 1000) {
    const hundred = ones[Math.floor(number / 100)];
    const rest = number % 100;
    return rest
      ? `${hundred} hundred ${toReadable(rest)}`
      : `${hundred} hundred`;
  }

  return '';
}

module.exports = toReadable;
