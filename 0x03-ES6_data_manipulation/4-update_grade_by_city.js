export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  let studentsWithGrades;

  if (newGrades.length === 0) {
    studentsWithGrades = students.filter((student) => student.location === city).map((student) => {
      // eslint-disable-next-line no-param-reassign
      student.grade = 'N/A';

      return student;
    });
  } else {
    studentsWithGrades = students.filter((student) => student.location === city).map((student) => {
      const matchingGrade = newGrades.filter((grade) => grade.studentId === student.id);
      // eslint-disable-next-line no-param-reassign
      student.grade = matchingGrade.length > 0 ? matchingGrade[0].grade : 'N/A';

      return student;
    });
  }

  return studentsWithGrades;
}
