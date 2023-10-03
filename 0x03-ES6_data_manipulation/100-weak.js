export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const call = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, call);
  }

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }

  return undefined;
}
