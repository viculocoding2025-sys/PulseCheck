const translations ={
    'fa' : {
        'title' : 'PulseCheck',
        'brand' : 'PulseCheck',
        'login' : 'ورود',
        'works' : 'نحوه کار' ,
        'pricing' : 'قیمت گذاری' ,
        'language' : 'زبان',
        'main_slogan' : 'بدون جلسه ، ضربان تیمت رو بگیر',
        'cta_button' : 'شروع رایگان',
        'features-title' : 'چرا PulseCheck',
        'feature1-title' : 'فقط 5 دقیقه',
        'feature1-desc' : 'گزارش‌های روزانه بدون نیاز به جلسات طولانی و خسته‌کننده.'
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
document.addEventListener('DOMContentLoaded' , applyTranslations);
