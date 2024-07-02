---
---
{%- assign texts = site.data.texts -%}
document.addEventListener('DOMContentLoaded', function () {
    {%- if site.languages.size > 1 and site.plugins contains "jekyll-polyglot" %}
    var shareText = {
        {%- for lang in site.languages %}
        {%- if site.data[lang].texts.share and lang != site.default_lang %}
        {{ lang }}: "{{ site.data[lang].texts.share }}",
        {%- endif %}
        {%- endfor %}
        {{ site.default_lang }}: "{{ site.data.texts.share }}"
    };
    var copiedText = {
        {%- for lang in site.languages %}
        {%- if site.data[lang].texts.share %}
        {{ lang }}: "{{ site.data[lang].texts.copied }}",
        {%- endif %}
        {%- endfor %}
        {{ site.default_lang }}: "{{ site.data.texts.copied }}"
    };
    {%- endif %}
    const shareButtons = document.querySelectorAll('.shareBtn');

    shareButtons.forEach(button => {
        const img = button.querySelector('img');
        const shareMsg = button.querySelector('.shareMsg');
        const url = window.location.protocol + window.location.host + button.getAttribute('data-url');

        if (navigator.share) {
            button.style.display = 'inline-block';
            img.src = '{{ "/assets/icon/share.svg" | relative_url }}';

            {%- if site.languages.size > 1 and site.plugins contains "jekyll-polyglot" %}
            const lang = document.documentElement.lang;
            if (lang in shareText) {
                img.alt = shareText[(lang)];
            } else {
                img.alt = shareText[{{ site.default_lang }}];
            }
            {%- else %}
            img.alt = '{{ texts.share }}';
            {%- endif %}

            button.addEventListener('click', async function () {
                event.preventDefault();
                event.stopPropagation();

                const title = button.getAttribute('data-title');

                try {
                    await navigator.share({
                        title: title,
                        url: url
                    });
                } catch (error) {
                    console.error('Error sharing:', error);
                }
            });
        } else {
            button.style.display = 'inline-block';

            button.addEventListener('click', function () {
                event.preventDefault();
                event.stopPropagation();

                navigator.clipboard.writeText(url).then(() => {
                    button.classList.add('disabled');

                    {%- if site.languages.size > 1 and site.plugins contains "jekyll-polyglot" %}
                    const lang = document.documentElement.lang;
                    if (lang in copiedText) {
                        shareMsg.textContent = copiedText[(lang)];
                    } else {
                        shareMsg.textContent = copiedText[{{ site.default_lang }}];
                    }
                    {%- else %}
                    shareMsg.textContent = '{{ texts.copied }}';
                    {%- endif %}

                    setTimeout(() => {
                        shareMsg.textContent = "";
                        button.classList.remove('disabled');
                    }, 1000);
                }).catch(err => {
                    console.error('Error copying URL:', err);
                });
            });
        }
    });
});

