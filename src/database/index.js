const sql = require('mssql');
const { dbConfig } = require('../config');

const getConnection = async () => {
  let pool = null;
  const closePool = async () => {
    try {
      // try to close the connection
      await pool.close();

      // set the pool to null
      pool = null;
    } catch (error) {
      console.log(error);
      // set the pool to null to ensure a new one will be created
      pool = null;
    }
  };

  const connection = async () => {
    try {
      if (pool) {
        return pool;
      }
      // create pool
      pool = await sql.connect(dbConfig);
      pool.on('error', async () => {
        console.log(error);
        await closePool();
      });
      return pool;
    } catch (error) {
      console.log(error);
      pull = null;
    }
  };
  return connection();
};

module.exports = { getConnection };
