export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const element of newArray) {
    const newElement = appendString + element;
    const idx = newArray.indexOf(element);
    newArray[idx] = newElement;
  }

  return newArray;
}
