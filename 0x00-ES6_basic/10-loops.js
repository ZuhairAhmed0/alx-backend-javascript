export default function appendToEachArrayValue(array, appendString) {
    const updatedArr = []
  for (let value of array) {
    updatedArr.push(appendString + value);
  }


  return updatedArr;
}
