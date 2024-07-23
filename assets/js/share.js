---
---
{%- assign texts = site.data.texts -%}
document.addEventListener('DOMContentLoaded', function () {
    {%- if site.languages.size > 1 and site.plugins contains "jekyll-polyglot" %}
    var copiedText = {
        {%- for lang in site.languages %}
        {%- if site.data[lang].texts.share %}
        "{{ lang }}" : "{{ site.data[lang].texts.copied }}",
        {%- endif %}
        {%- endfor %}
        "{{ site.default_lang }}" : "{{ site.data.texts.copied }}"
    };
    {%- endif %}
    const shareButtons = document.querySelectorAll('.shareBtn');

    shareButtons.forEach(button => {
        const shareMsg = button.querySelector('.shareMsg');

        if (navigator.share) {
            button.style.display = 'inline-block';

            button.addEventListener('click', async function () {
                event.preventDefault();
                event.stopPropagation();

                const title = button.getAttribute('data-title');
                const url = button.getAttribute('data-url');
                if (url == "$here") {
                    shareurl = window.location.href;
                } else {
                    shareurl = "{{ site.url }}" + url;
                }

                try {
                    await navigator.share({
                        title: title,
                        url: shareurl
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

                const url = button.getAttribute('data-url');
                if (url == "$here") {
                    shareurl = window.location.href;
                } else {
                    shareurl = "{{ site.url }}" + url;
                }

                navigator.clipboard.writeText(shareurl).then(() => {
                    button.classList.add('disabled');

                    {%- if site.languages.size > 1 and site.plugins contains "jekyll-polyglot" %}
                    const lang = document.documentElement.lang;
                    if (lang in copiedText) {
                        shareMsg.textContent = copiedText[(lang)];
                    } else {
                        shareMsg.textContent = copiedText["{{ site.default_lang }}"];
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

