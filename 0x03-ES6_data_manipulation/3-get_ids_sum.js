export default function getStudentIdsSum(students) {
  return students.reduce((id, student) => id + student.id, 0);
}
