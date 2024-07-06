# Benjeto

Benjeto is a sleek and modern Jekyll Theme designed to create personal websites that resemble social media profiles.  
This theme is perfect for sharing short posts or updates as well as long articles, and it offers a calm design with support for dark mode.

- A Jekyll Theme for creating personal websites with a look similar to social media profiles.
- Optimized for posting short updates. (and of course for longer articles.)
- Supports multilingual functionality with [jekyll-polyglot](https://github.com/untra/polyglot), including RTL.
- Compatible with [jekyll-paginate](https://github.com/jekyll/jekyll-paginate) and [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2).


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "benjeto-jekyll-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: benjeto-jekyll-theme
```

And install the theme and its dependancies:

    $ bundle install


## Settings

### _config.yml
Refer to the [sample configuration](https://github.com/Cizzuk/Benjeto/blob/main/_config.yml).
Specifically,
```yaml
defaults:
  - values:
      title: ""
```
is necessary for creating short posts without titles.

### Profile
Copy [`_data/profile.yml`](https://github.com/Cizzuk/Benjeto/blob/main/_data/profile.yml) to your site to create your profile.  
Use relative links for images: the header should be in a 5:1 ratio and the icon in a 1:1 ratio.

### Benjeto Settings
Copy [`_data/settings.yml`](https://github.com/Cizzuk/Benjeto/blob/main/_data/settings.yml) to your site.

For tabs created in `home.tabs`, you need to create a dedicated page with `layout: home`.  
When specifying `pagination.category` or `pagination.tag`, posts will be filtered by `jekyll-feed`.  
Refer to the [sample](https://github.com/Cizzuk/Benjeto/blob/main/category/articles.html) for guidance.

### Translation
If you are building a site in a language other than English, translation files are available in [`_data/texts.yml`](https://github.com/Cizzuk/Benjeto/blob/main/_data/texts.yml).  
You can also modify the text for categories and tags.

### Custom Head and CSS
You can configure the head in `_includes/custom_head.html`.  
You can configure the CSS in `_sass/benjeto/custom.scss`.


## Using includes

### `image.html`
figure image with caption and license.  
Set `pixel` to `true` to support pixel art.
```liquid
{% include image.html
   src="/assets/sample.png"
   pixel=false
   alt="Sample alt"
   caption="This is a sample image"
   license="CC BY-SA 4.0"
   license_url="https://creativecommons.org/licenses/by-sa/4.0/"
%}
```

### `video.html`
Video player with title, caption, thumbnail, and license
```liquid
{% include video.html
   src="/assets/sample.mp4"
   title="Sample video"
   poster="/assets/thumbnail.png"
   caption="This is a sample video"
   license="CC BY-SA 4.0"
   license_url="https://creativecommons.org/licenses/by-sa/4.0/"
%}
```

### `audio.html`
Audio player with title, caption, artwork, and license
```liquid
{% include audio.html
   src="/assets/sapmle.mp3"
   title="Sample music"
   artwork="/assets/artwork.png"
   alt="Artwork alt"
   caption="This is a sample music"
   license="CC BY-SA 4.0"
   license_url="https://creativecommons.org/licenses/by-sa/4.0/"
%}
```

### `youtube.html` and `nicovideo.html`
Embedded video player for YouTube and Niconico
```liquid
YouTube
{% include youtube.html id="rdwz7QiG0lk" aspect="4/3" title="YouTube on the tube!" %}

Niconico
{% include nicovideo.html id="sm38213757" aspect="16/9" title="削除動画" %}
```


## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

This project uses the following open source software:

- [Jekyll](https://github.com/jekyll/jekyll) - MIT License
- [jekyll-feed](https://github.com/jekyll/jekyll-feed) - MIT License
- [jekyll-paginate](https://github.com/jekyll/jekyll-paginate) - MIT License
- [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) - MIT License
- [jekyll-polyglot](https://github.com/untra/polyglot) - MIT License

Each of these libraries is licensed under the MIT License. Please see the respective LICENSE files for more information.
