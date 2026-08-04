const siteTranslations = {
    en: {
        home: 'Home', about: 'About', projects: 'Projects',
        role: 'AI SOFTWARE ENGINEER', pronoun: 'I',
        tech: 'Technology Ecosystem', problems: 'Solving Problems with Code',
        stability: 'System Stability', automation: 'Workflow Automation', visualization: 'Technical Visualization',
        devops: 'DevOps & Infrastructure', fullstack: 'Full-Stack Web', connect: "Let's Connect",
        resume: 'View Resume', work: "Let's Work Together", documentation: 'View Documentation ▹',
        profile: 'PLAYER PROFILE', vitality: 'Vitality Stats', coffee: 'Coffee Intake', bugs: 'Bugs Squashed', sleep: 'Sleep',
        studies: 'Technical Case Studies', studiesIntro: 'Engineering robust, scalable, and stable software solutions through low-level systems programming.',
        phrases: ['automate workflows', 'stabilize systems', 'simplify complexity', 'visualize data', 'build reliability']
    },
    fr: {
        home: 'Accueil', about: 'À propos', projects: 'Projets',
        role: 'IA INGÉNIEUR LOGICIEL', pronoun: 'Je',
        tech: 'Écosystème technologique', problems: 'Résoudre des problèmes avec le code',
        stability: 'Stabilité des systèmes', automation: 'Automatisation des flux', visualization: 'Visualisation technique',
        devops: 'DevOps & Infrastructure', fullstack: 'Web full-stack', connect: 'Restons en contact',
        resume: 'Voir le CV', work: 'Travaillons ensemble', documentation: 'Voir la documentation ▹',
        profile: 'PROFIL DU JOUEUR', vitality: 'Statistiques de vitalité', coffee: 'Consommation de café', bugs: 'Bugs corrigés', sleep: 'Sommeil',
        studies: 'Études de cas techniques', studiesIntro: 'Concevoir des solutions logicielles robustes, évolutives et stables grâce à la programmation système.',
        phrases: ['automatise les flux', 'stabilise les systèmes', 'simplifie la complexité', 'visualise les données', 'crée de la fiabilité']
    },
    ar: {
        home: 'الرئيسية', about: 'نبذة عني', projects: 'المشاريع',
        role: 'مهندس برمجيات', pronoun: 'أنا',
        tech: 'منظومة التقنيات', problems: 'حل المشكلات بالبرمجة',
        stability: 'استقرار الأنظمة', automation: 'أتمتة سير العمل', visualization: 'التصور التقني',
        devops: 'ديف أوبس والبنية التحتية', fullstack: 'تطوير ويب متكامل', connect: 'لنتواصل',
        resume: 'عرض السيرة الذاتية', work: 'لنعمل معًا', documentation: 'عرض التوثيق ◂',
        profile: 'ملف اللاعب', vitality: 'إحصاءات الحيوية', coffee: 'استهلاك القهوة', bugs: 'الأخطاء التي تم إصلاحها', sleep: 'النوم',
        studies: 'دراسات حالة تقنية', studiesIntro: 'بناء حلول برمجية قوية وقابلة للتوسع ومستقرة عبر برمجة الأنظمة منخفضة المستوى.',
        phrases: ['أؤتمت سير العمل', 'أثبت الأنظمة', 'أبسط التعقيد', 'أصوّر البيانات', 'أبني الموثوقية']
    }
};

function applyLanguage(language) {
    const dictionary = siteTranslations[language] || siteTranslations.en;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = dictionary[element.dataset.i18n];
        if (value) element.textContent = value;
    });
    document.querySelectorAll('.language-select').forEach((select) => select.value = language);
    window.siteLanguage = language;
    window.sitePhrases = dictionary.phrases;
    localStorage.setItem('portfolio-language', language);
    document.dispatchEvent(new CustomEvent('languagechange'));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('portfolio-language') || 'en';
    applyLanguage(savedLanguage);
    document.querySelectorAll('.language-select').forEach((select) => {
        select.addEventListener('change', (event) => applyLanguage(event.target.value));
    });
});
