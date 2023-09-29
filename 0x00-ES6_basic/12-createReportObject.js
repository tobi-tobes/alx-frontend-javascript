export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const departments = Object.keys(employeesList);
      const numberDepartments = departments.length;

      return numberDepartments;
    },
  };

  return report;
}
