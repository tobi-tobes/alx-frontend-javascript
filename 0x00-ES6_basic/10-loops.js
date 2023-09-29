export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const newElement = appendString + element;
    const idx = array.indexOf(element);
    // eslint-disable-next-line no-param-reassign
    array[idx] = newElement;
  }

  return array;
}
