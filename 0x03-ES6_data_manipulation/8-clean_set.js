export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || set.size === 0) {
    return '';
  }
  const arrayFromSet = [...set];
  const onlyStrings = arrayFromSet.filter((elem) => typeof elem === 'string');
  const startsWithString = onlyStrings.filter((word) => word.startsWith(startString));

  if (startString.length === 0 || startsWithString.length === 0) {
    return '';
  }

  const modifiedStrings = startsWithString.map((word) => word.replace(startString, ''));

  const returnString = modifiedStrings.join('-');

  return returnString;
}
