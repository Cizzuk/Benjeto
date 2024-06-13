---
---
{%- assign texts = site.data.texts -%}
document.addEventListener('DOMContentLoaded', function () {
    const shareButtons = document.querySelectorAll('.shareBtn');

    shareButtons.forEach(button => {
        const img = button.querySelector('img');
        const shareMsg = button.querySelector('.shareMsg');
        const url = window.location.protocol + window.location.host + button.getAttribute('data-url');

        if (navigator.share) {
            button.style.display = 'inline-block';
            img.src = '{{ "/assets/icon/share.svg" | relative_url }}';
            img.alt = '{{ texts.share }}';

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

                    shareMsg.textContent = '{{ texts.copied }}';

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
