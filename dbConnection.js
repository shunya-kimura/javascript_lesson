const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // パスワードなしで接続
    database: 'test',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('データベース接続エラー: ' + err.message);
        return;
    }
    console.log('データベースに接続成功');
});

connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
        console.error('クエリエラー: ' + err.message);
        return;
    }
    console.log(results);
});

connection.end();