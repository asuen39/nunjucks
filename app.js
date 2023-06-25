const nunjucks = require('nunjucks');
const express = require('express');

var app = express();
const port = 8000;

nunjucks.configure('.', {
    autoescape: true,
    express: app
});

app.get('', (req, res) => {

    //1. 設定された変数に対してメッセージを送る。
    //res.render('index.html', { message: 'nunjucksテンプレートがローカルで起動出来た。' });

    //2. オブジェクトのプロパティへのアクセ
    const person = {
        message: 'nunjucksテンプレートがローカルで起動出来た。',
        name: 'John',
        age: 30
    };

    // テンプレートにデータを渡す
    res.render('index.html', { person });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});