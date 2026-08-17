/* TeamRelay site data: all canned strings (no APIs).
   NOTE: translations are LLM-authored; have a native speaker review before launch. */

export const LANGS = {
    es: { flag: '🇪🇸', name: 'Spanish',  bcp: 'es-ES' },
    fr: { flag: '🇫🇷', name: 'French',   bcp: 'fr-FR' },
    de: { flag: '🇩🇪', name: 'German',   bcp: 'de-DE' },
    ja: { flag: '🇯🇵', name: 'Japanese', bcp: 'ja-JP' },
    ar: { flag: '🇸🇦', name: 'Arabic',   bcp: 'ar-SA' },
    zh: { flag: '🇨🇳', name: 'Chinese',  bcp: 'zh-CN' }
};

/* Per-scenario speaker identity + how the bubble header renders. */
export const SCENARIOS = {
    sport:     { speaker: 'Marco',       avatar: 'M', chip: 'Coach',     neutral: false, glow: '#15c2cf' },
    business:  { speaker: 'Priya',       avatar: 'P', chip: 'Presenter', neutral: false, glow: '#4f7dff' },
    family:    { speaker: 'Nonna Lucia', avatar: 'N', chip: null,        neutral: true,  glow: '#ff9d54' },
    tour:      { speaker: 'Ana',         avatar: 'A', chip: null,        neutral: true,  glow: '#ff4d6b' },
    classroom: { speaker: 'Ms. Rivera',  avatar: 'M', chip: null,        neutral: true,  glow: '#8b6bff' }
};

/* 3 phrases per scenario, each translated into the 6 playground languages. */
export const PHRASES = {
    sport: [
        {
            en: 'Push up and press high!',
            t: {
                es: '¡Subid y presionad arriba!',
                fr: 'Montez et pressez haut !',
                de: 'Rückt auf und presst hoch!',
                ja: 'ラインを上げて高い位置でプレス！',
                ar: 'اصعدوا واضغطوا عالياً!',
                zh: '压上去，高位逼抢！'
            }
        },
        {
            en: 'Water break, two minutes.',
            t: {
                es: 'Pausa para beber: dos minutos.',
                fr: 'Pause hydratation, deux minutes.',
                de: 'Trinkpause, zwei Minuten.',
                ja: '給水タイム、2分間。',
                ar: 'استراحة ماء، دقيقتان.',
                zh: '喝水休息，两分钟。'
            }
        },
        {
            en: 'Brilliant work. Same energy second half!',
            t: {
                es: 'Trabajo brillante. ¡La misma energía en la segunda parte!',
                fr: 'Superbe travail. Même énergie en seconde période !',
                de: 'Klasse Leistung. Gleiche Energie in der zweiten Halbzeit!',
                ja: '素晴らしい。後半も同じエネルギーで！',
                ar: 'عمل رائع. نفس الطاقة في الشوط الثاني!',
                zh: '干得漂亮。下半场保持这股劲头！'
            }
        }
    ],
    business: [
        {
            en: "Let's start with the quarterly numbers.",
            t: {
                es: 'Empecemos con las cifras del trimestre.',
                fr: 'Commençons par les chiffres du trimestre.',
                de: 'Beginnen wir mit den Quartalszahlen.',
                ja: 'まず四半期の数字から始めましょう。',
                ar: 'لنبدأ بأرقام الربع.',
                zh: '我们先从季度数据开始。'
            }
        },
        {
            en: 'Any questions before we move on?',
            t: {
                es: '¿Alguna pregunta antes de continuar?',
                fr: 'Des questions avant de continuer ?',
                de: 'Gibt es Fragen, bevor wir weitermachen?',
                ja: '先に進む前に質問はありますか？',
                ar: 'هل من أسئلة قبل أن نتابع؟',
                zh: '在继续之前有什么问题吗？'
            }
        },
        {
            en: 'We ship the new version on Monday.',
            t: {
                es: 'Lanzamos la nueva versión el lunes.',
                fr: 'Nous lançons la nouvelle version lundi.',
                de: 'Wir veröffentlichen die neue Version am Montag.',
                ja: '新バージョンは月曜日にリリースします。',
                ar: 'سنطلق الإصدار الجديد يوم الاثنين.',
                zh: '我们周一发布新版本。'
            }
        }
    ],
    family: [
        {
            en: "Dinner's ready, come to the table!",
            t: {
                es: '¡La cena está lista, venid a la mesa!',
                fr: 'Le dîner est prêt, à table !',
                de: 'Das Essen ist fertig, kommt an den Tisch!',
                ja: '夕食ができたよ、テーブルにおいで！',
                ar: 'العشاء جاهز، تعالوا إلى المائدة!',
                zh: '晚饭好了，快来吃饭！'
            }
        },
        {
            en: 'We leave for the airport at nine.',
            t: {
                es: 'Salimos hacia el aeropuerto a las nueve.',
                fr: "Nous partons pour l'aéroport à neuf heures.",
                de: 'Wir fahren um neun zum Flughafen.',
                ja: '9時に空港へ出発します。',
                ar: 'نغادر إلى المطار في التاسعة.',
                zh: '我们九点出发去机场。'
            }
        },
        {
            en: 'Tell Grandma what you did at school.',
            t: {
                es: 'Cuéntale a la abuela qué hiciste en el colegio.',
                fr: "Raconte à Mamie ce que tu as fait à l'école.",
                de: 'Erzähl Oma, was du in der Schule gemacht hast.',
                ja: '学校で何をしたか、おばあちゃんに話してあげて。',
                ar: 'أخبر جدتك بما فعلته في المدرسة.',
                zh: '告诉奶奶你在学校做了什么。'
            }
        }
    ],
    tour: [
        {
            en: 'We meet back at the fountain at six.',
            t: {
                es: 'Nos vemos en la fuente a las seis.',
                fr: 'Rendez-vous à la fontaine à six heures.',
                de: 'Wir treffen uns um sechs am Brunnen.',
                ja: '6時に噴水の前に集合です。',
                ar: 'نلتقي عند النافورة في السادسة.',
                zh: '我们六点在喷泉集合。'
            }
        },
        {
            en: 'This castle was built in 1476.',
            t: {
                es: 'Este castillo se construyó en 1476.',
                fr: 'Ce château a été construit en 1476.',
                de: 'Diese Burg wurde 1476 erbaut.',
                ja: 'この城は1476年に建てられました。',
                ar: 'بُني هذا القصر عام 1476.',
                zh: '这座城堡建于1476年。'
            }
        },
        {
            en: 'Lunch is included, follow me!',
            t: {
                es: 'El almuerzo está incluido, ¡seguidme!',
                fr: 'Le déjeuner est inclus, suivez-moi !',
                de: 'Das Mittagessen ist inklusive, folgt mir!',
                ja: '昼食付きです。ついてきてください！',
                ar: 'الغداء مشمول، اتبعوني!',
                zh: '午餐包含在内，跟我来！'
            }
        }
    ],
    classroom: [
        {
            en: 'Open your books to page forty.',
            t: {
                es: 'Abrid los libros por la página cuarenta.',
                fr: 'Ouvrez vos livres à la page quarante.',
                de: 'Öffnet eure Bücher auf Seite vierzig.',
                ja: '教科書の40ページを開いてください。',
                ar: 'افتحوا كتبكم على الصفحة الأربعين.',
                zh: '把书翻到第四十页。'
            }
        },
        {
            en: 'Work in pairs on exercise three.',
            t: {
                es: 'Trabajad en parejas en el ejercicio tres.',
                fr: "Travaillez en binômes sur l'exercice trois.",
                de: 'Arbeitet zu zweit an Aufgabe drei.',
                ja: 'ペアになって問題3に取り組んでください。',
                ar: 'اعملوا في أزواج على التمرين الثالث.',
                zh: '两人一组做第三题。'
            }
        },
        {
            en: "The quiz is on Friday. You've got this.",
            t: {
                es: 'El examen es el viernes. Vosotros podéis.',
                fr: 'Le contrôle est vendredi. Vous allez y arriver.',
                de: 'Der Test ist am Freitag. Ihr schafft das.',
                ja: '小テストは金曜日。きみたちならできる。',
                ar: 'الاختبار يوم الجمعة، أنتم قادرون على ذلك.',
                zh: '小测验在周五，你们没问题的。'
            }
        }
    ]
};

