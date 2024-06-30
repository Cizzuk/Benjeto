---
layout: post
title: "Benjetoへようこそ"
category: "articles"
lang: "ja"
tag:
permalink: /posts/welcome-to-benjeto/
---

Benjetoは、SNSのプロフィール風な個人用Webサイトを作成するために設計された、モダンなJekyllテーマです。  
短いつぶやきや、長い記事を共有するのに最適化し、落ち着いたデザインとダークモードに対応しています。

- SNSのプロフィール風な個人用Webサイトを作成するJekyllテーマ。
- 短い更新を投稿するために最適化されています。（もちろん、長い記事にも対応しています）
- [jekyll-polyglot](https://github.com/untra/polyglot)での多言語化に対応し、RTLもサポートしています。
- [jekyll-paginate](https://github.com/jekyll/jekyll-paginate)と[jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2)と互換性があります。


## インストール

この行をJekyllサイトの`Gemfile`に追加します。

```ruby
gem "benjeto-jekyll-theme"
```

そして、この行をJekyllサイトの`_config.yml`に追加します。

```yaml
theme: benjeto-jekyll-theme
```

最後に、テーマとその依存関係をインストールします。

    $ bundle install


## 設定

### _config.yml
[サンプル](https://github.com/Cizzuk/Benjeto/blob/main/_config.yml)を参照してください。
特に、
```yaml
defaults:
  - values:
      title: ""
```
は、タイトルのない短い投稿を作成するために必要です。

### プロフィール
[`_data/profile.yml`](https://github.com/Cizzuk/Benjeto/blob/main/_data/profile.yml)をサイトにコピーして、プロフィールを作成します。  
画像には相対リンクを使用します。ヘッダーは5:1の比率で、アイコンは1:1の比率である必要があります。

### Benjeto 設定
[`_data/settings.yml`](https://github.com/Cizzuk/Benjeto/blob/main/_data/settings.yml)をサイトにコピーします。

`home.tabs`で作成されたタブは、`layout: home`で専用ページを作成する必要があります。  
`pagination.category`または`pagination.tag`を指定すると、投稿は`jekyll-feed`でフィルタリングされます。  
[サンプル](https://github.com/Cizzuk/Benjeto/blob/main/category/articles.html)を参照してください。

### 翻訳
英語以外の言語でサイトを構築する場合は、[`_data/texts.yml`](https://github.com/Cizzuk/Benjeto/blob/main/_data/texts.yml)で翻訳ファイルを利用できます。  
カテゴリとタグのテキストを変更することもできます。

### カスタムHeadとCSS
`_includes/custom_head.html`でカスタムHeadを設定できます。  
`_sass/benjeto/custom.scss`でカスタムCSSを設定できます。


## includesを使う

### `image.html`
キャプションとライセンス付きのfigure画像。  
ドット絵(ピクセルアート)をサポートするには`pixel`を`true`に設定します。
```liquid
{%- raw -%}
{% include image.html
   src="/assets/sample.png"
   pixel=false
   alt="Sample alt"
   caption="This is a sample image"
   license="CC BY-SA 4.0"
   license_url="https://creativecommons.org/licenses/by-sa/4.0/"
%}
{% endraw -%}
```

### `video.html`
タイトル、キャプション、サムネイル、ライセンス付きのビデオプレーヤー
```liquid
{%- raw -%}
{% include video.html
   src="/assets/sample.mp4"
   title="Sample video"
   poster="/assets/thumbnail.png"
   caption="This is a sample video"
   license="CC BY-SA 4.0"
   license_url="https://creativecommons.org/licenses/by-sa/4.0/"
%}
{% endraw -%}
```

### `audio.html`
タイトル、キャプション、アートワーク、ライセンス付きのオーディオプレーヤー
```liquid
{%- raw -%}
{% include audio.html
   src="/assets/sapmle.mp3"
   title="Sample music"
   artwork="/assets/artwork.png"
   alt="Artwork alt"
   caption="This is a sample music"
   license="CC BY-SA 4.0"
   license_url="https://creativecommons.org/licenses/by-sa/4.0/"
%}
{% endraw -%}
```

### `youtube.html`と`nicovideo.html`
YouTubeとニコニコ用の埋め込みビデオプレーヤー
```liquid
{%- raw -%}
YouTube
{% include youtube.html id="rdwz7QiG0lk" aspect="4/3" title="YouTube on the tube!" %}

Niconico
{% include nicovideo.html id="sm38213757" aspect="16/9" title="削除動画" %}
{% endraw -%}
```


## ライセンス

このテーマは、[MIT License](https://opensource.org/licenses/MIT)の条件の下でオープンソースとして利用可能です。

このプロジェクトでは、次のオープンソースソフトウェアを使用しています。

- [Jekyll](https://github.com/jekyll/jekyll) - MIT License
- [jekyll-feed](https://github.com/jekyll/jekyll-feed) - MIT License
- [jekyll-paginate](https://github.com/jekyll/jekyll-paginate) - MIT License
- [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) - MIT License
- [jekyll-polyglot](https://github.com/untra/polyglot) - MIT License

これらの各ライブラリは、MITライセンスの下でライセンスされています。詳細については、それぞれのライセンスファイルを参照してください。

