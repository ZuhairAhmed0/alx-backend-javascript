const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) reject(Error('Cannot load the database'));

      const rows = data.split(/\r?\n/);

      let i = 0;
      let totalStudents = 0;
      let msg = '';
      const fields = {};

      const getRow = () => {
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
      };

      const display = async () => {
        getRow();
        console.log(`Number of students: ${totalStudents}`);
        msg += `Number of students: ${totalStudents}\n`;
        for (const field of Object.keys(fields)) {
          const n = fields[field].count;
          const names = fields[field].students.join(', ');
          console.log(`Number of students in ${field}: ${n}. List: ${names}`);
          msg += `Number of students in ${field}: ${n}. List: ${names}\n`;
        }
        msg = msg.slice(0, -1);
      };

      display();
      resolve(msg);
    });
  });

  return promise;
}

module.exports = countStudents;
