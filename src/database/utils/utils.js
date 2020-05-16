const fs = require('fs');
const { join } = require('path');

const loadSqlQueries = async folderName => {
  // determine the file path for the folder
  const filePath = join(process.cwd(), 'src', 'database', folderName);

  // get a list of files in the folder
  const files = await fs.readdirSync(filePath);

  // get only files with .slq ext
  const sqlFiles = files.filter(file => file.endsWith('.sql'));

  // loop over files and read their conents
  const queries = {};
  for (let file of sqlFiles) {
    const query = fs.readFileSync(join(filePath, file), { encoding: 'utf-8' });
    queries[file.replace('.sql', '')] = query;
  }
  return queries;
};

module.exports = {
  loadSqlQueries,
};
