export default function updateUniqueItems(groceryList) {
  if (!(groceryList instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const key of groceryList.keys()) {
    if (groceryList.get(key) === 1) {
      groceryList.set(key, 100);
    }
  }

  return groceryList;
}
