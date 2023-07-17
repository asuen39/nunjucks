const nunjucks = require('nunjucks');
const express = require('express');

var app = express();
const port = 8000;

const env = nunjucks.configure('.', {
    autoescape: true,
    express: app
});

// カスタムフィルターの定義
env.addFilter('uppercase', function(value) {
    return value.toUpperCase();
});

env.addFilter('reverse', (value) => {
  return value.split('').reverse().join('');
});

env.addFilter('int', (value) => {
  return parseInt(value, 10);
});

app.get('', async (req, res) => {

  //1. 設定された変数に対してメッセージを送る。
  //res.render('index.html', { message: 'nunjucksテンプレートがローカルで起動出来た。' });

  //2. オブジェクトのプロパティへのアクセ
  const person = {
    message: 'nunjucksテンプレートがローカルで起動出来た。',
    name: 'John',
    age: 30
  };

  const message = 'フィルターメッセージ';
  const age2 = '30';

  // テンプレートにデータを渡す
  res.render('index.html', { message, person, age2 });
});

//page2.htmlにテンプレートデータを渡す。
app.get('/page2', (req, res) => {
  res.render('page2.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
