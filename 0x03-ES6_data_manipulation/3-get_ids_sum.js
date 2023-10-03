export default function getStudentIdsSum(students) {
  const sum = students.reduce((accumulator, current) => accumulator + current.id, 0);

  return sum;
}
