export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentIndex < employees.length) {
        return {
          value: employees[currentIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}
