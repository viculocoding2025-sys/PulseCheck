const translations ={
    'fa' : {
        'title' : 'PulseCheck',
        'brand' : 'PulseCheck',
        'login' : 'ورود',
        'works' : 'نحوه کار' ,
        'pricing' : 'قیمت گذاری' ,
        'language' : 'زبان',
    }
}

function applyTranslations() {
    
    const elements = document.querySelectorAll('[data-i18n]');

    const currentLang = 'fa';

    elements.forEach(element => {

        const key = element.getAttribute ('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {

            const translatedText = translations[currentLang][key];
            element.innerText = translatedText;
        }
    })
}
