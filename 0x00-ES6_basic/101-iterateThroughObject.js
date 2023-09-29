export default function iterateThroughObject(reportWithIterator) {
  let returnString = '';
  let counter = 0;
  for (const item of reportWithIterator) {
    returnString += item;
    if (counter < reportWithIterator.iterItems.length - 1) {
      returnString += ' | ';
    }
    counter += 1;
  }

  return returnString;
}
