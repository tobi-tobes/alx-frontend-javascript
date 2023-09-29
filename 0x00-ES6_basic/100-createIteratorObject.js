export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const iterItems = [];
  for (const department in employees) {
    if (employees[department]) {
      iterItems.push(...employees[department]);
    }
  }

  const reportIter = {
    iterItems,
    [Symbol.iterator]() {
      let idx = 0;
      return {
        next: () => {
          if (idx < this.iterItems.length) {
            return {
              // eslint-disable-next-line no-plusplus
              value: this.iterItems[idx++],
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };

  return reportIter;
}
