const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const rows = data.split(/\r?\n/);

    let i = 0;
    let totalStudents = 0;
    const fields = {};

    for (const row of rows) {
      if (row.trim() !== '' && i > 0) {
        totalStudents += 1;
        const [fname, lname, age, field] = row.split(","); // eslint-disable-line

        if (!fields[field]) {
          fields[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          const newCount = fields[field].count + 1;
          const newStudent = fields[field].students.concat(fname);
          fields[field] = {
            count: newCount,
            students: newStudent,
          };
        }
      }
      i += 1;
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field of Object.keys(fields)) {
      const n = fields[field].count;
      //   console.log(fields[field]);
      const names = fields[field].students.join(', ');
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
