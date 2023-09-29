export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const newElement = appendString + element;
    const idx = array.indexOf(element);
    array[idx] = newElement;
  }

  return array;
}
