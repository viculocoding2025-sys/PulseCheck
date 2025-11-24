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
        'features-title' : 'چرا PulseCheck بهتر است؟',
        'feature1-title' : 'فقط 5 دقیقه ، نه بیشتر',
        'feature1-desc' : 'گزارش دهی سریع و متمرکز ، جایگزین جلسات خسته کننده',
        'feature2-title' : 'تمرکز روی تیم ریموت',
        'feature2-desc' : 'طراحی شده برای تیم هایی که در مناطق زمانی مختلف کار میکنند',
        'feature3-title' : 'داده های عملیاتی',
        'feature3-desc' : 'دریافت گزارش های هفتگی برای تصمیم گیری های هوشمند مدیریتی'
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
