const nunjucks = require('nunjucks');
const express = require('express');

var app = express();
const port = 8000;

const env = nunjucks.configure('.', {
    autoescape: true,
    express: app
});

// カスタムフィルターの定義
env.addFilter('uppercase', function(str) {
    return str.toUpperCase();
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

  const message = 'Hello, World!';

  // テンプレートにデータを渡す
  res.render('index.html', { message, person });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
