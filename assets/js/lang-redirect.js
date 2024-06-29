---
---
document.addEventListener('DOMContentLoaded', function() {
    const languages = {{ site.languages | jsonify }};
    const defaultLang = "{{ site.lang | default: site.languages[0] }}";
    
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0]; // "en-US" -> "en"

    if (languages.includes(langCode)) {
        window.location.replace(`/${langCode}${window.location.pathname}`);
    } else {
        window.location.replace(`/${defaultLang}${window.location.pathname}`);
    }
});

