const sql = require('mssql/tedious');

var config = {
    server: 'localhost',
    user: 'sa',
    password: 'i@intech',
    database: 'auction1',
    driver: 'tedious',
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
}

sql.connect(config, function(err){
    if(err) console.log(err);
    var request = new sql.Request();
    request.query('select * from admin', function(err, recordset){
        if(err) console.log(err);
        console.log("records ", recordset);
    });
})
