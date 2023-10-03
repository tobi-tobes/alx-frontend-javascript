export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const arrayFromSet = [...set];
  const startsWithString = arrayFromSet.filter((word) => word.startsWith(startString));

  if (startString.length === 0 || set.size === 0 || startsWithString.length === 0) {
    return '';
  }

  let returnString = '';
  let counter = 0;

  for (const string of startsWithString) {
    const substringRemoved = string.replace(startString, '');
    returnString += substringRemoved;
    if (counter < startsWithString.length - 1) {
      returnString += '-';
    }
    counter += 1;
  }

  return returnString;
}
