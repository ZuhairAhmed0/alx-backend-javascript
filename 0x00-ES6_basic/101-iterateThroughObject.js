export default function iterateThroughObject(reportWithIterator) {
  let employees = [];
  for (const item of reportWithIterator) {
    employees.push(item)
  }
  return employees.join(" | ");
}
