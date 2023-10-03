export default function getListStudentIds(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const studentsByLocation = students.filter((student) => student.location === city);

  return studentsByLocation;
}
