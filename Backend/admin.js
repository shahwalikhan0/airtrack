const express = require('express');
const router = express.Router();

const sql = require('mssql/tedious');

const config = {
  server: 'localhost',
  user: 'sa',
  password: 'i@intech',
  database: 'auction1',
  driver: 'tedious',
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  }
};

router.get('/users', (req, res) => {
  const conn = new sql.ConnectionPool(config);

  conn.connect()
    .then(() => {
      const request = new sql.Request(conn);

      request.query('SELECT * FROM admin')
        .then(result => {
          res.json(result.recordset);
          conn.close();
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ message: 'Error retrieving admin' });
          conn.close();
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error connecting to database' });
    });
});

module.exports = router;
