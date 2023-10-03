export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const idArray = students.map((student) => student.id);

  return idArray;
}
