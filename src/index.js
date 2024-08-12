const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'database-1-instance-1.cjow0ceesp1t.us-east-2.rds.amazonaws.com',
    user: 'username',
    port: '3306',
    password: 'paswork',
    database: 'databeis',
});

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const method = event.httpMethod;  // Obtén el método HTTP (GET, POST, PUT, DELETE)
    const body = event.body ? JSON.parse(event.body) : {}; // Parsear el cuerpo si existe

    let sql;
    let params = [];

    switch (method) {
        case 'GET':
            sql = "SELECT * FROM tb_estado";
            break;

        case 'POST':
            sql = "INSERT INTO tb_estado (estado) VALUES (?)";
            params = [body.estado];
            break;

        case 'PUT':
            sql = "UPDATE tb_estado SET estado = ? WHERE id_estado = ?";
            params = [body.estado, body.id_estado];
            break;

        case 'DELETE':
            sql = "DELETE FROM tb_estado WHERE id_estado = ?";
            params = [body.id_estado];
            break;

        default:
            callback(null, {
                statusCode: 405,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
                },
                body: JSON.stringify({ message: "Method Not Allowed" }),
            });
            return;
    }

    con.query(sql, params, (err, results) => {
        if (err) {
            callback(err);
            return;
        }

        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Cambia '*' por tu dominio específico si es necesario
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
            },
            body: JSON.stringify(results),
        };

        callback(null, response);
    });
};
