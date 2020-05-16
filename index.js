const express = require('express');
const { getConnection } = require('./src/database/index');
const { loadSqlQueries } = require('./src/database/utils/utils');

const app = async () => {
  const port = process.env.PORT || 5000;
  const connection = await getConnection();
  const db = connection.request();
  const server = express();
  const queries = await loadSqlQueries('queries');
  server.get('/', async (req, res) => {
    const results = await db.query(queries.getCompanies);
    res.json(results.recordset);
  });
  await server.listen(port, () => {
    console.log(`app started on http://locahost:${port}`);
  });
};

app();
