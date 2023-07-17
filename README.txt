nunjucksについて操作法や必須事項等を記載する。

-------
1. webサーバー起動方法
    
    npm run start

-------

メモ:
テンプレートの継承
※注意。読み込ませるとレイアウト全体が上書きされる。
その為画面作りの時には最初にテンプレートを作成する必要がある。
{% extends "base.html" %}

{% block title %}
    My Website
{% endblock %}

{% block content %}
    <h1>Welcome to My Website</h1>
    <p>This is the homepage content.</p>
{% endblock %}