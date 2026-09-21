const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח האשכנזי — מתכונים אותנטיים',
                description: 'המטבח האשכנזי — מתכונים אותנטיים ממזרח אירופה, בעברית.'
            },
            header: {
                logo: 'המטבח האשכנזי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח האשכנזי',
                subtitle: 'מתכונים אותנטיים מהשולחן היהודי במזרח אירופה',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                'מרקים וקניידלך': 'מרקים וקניידלך',
                'דגים ומאכלי פתיחה': 'דגים ומאכלי פתיחה',
                'צ׳ולנט ובשרים': 'צ׳ולנט ובשרים',
                'קוגל ותוספות': 'קוגל ותוספות',
                'מאפים וקינוחים': 'מאפים וקינוחים'
            },
            difficulty: {
                'קל': 'קל',
                'בינוני': 'בינוני',
                'מאתגר': 'מאתגר'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                kosher: 'כשרות',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח האשכנזי — מתכונים אותנטיים ממזרח אירופה, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Ashkenazi Cuisine — Authentic Recipes',
                description: 'Ashkenazi Cuisine — 50 authentic Ashkenazi recipes, all kosher, in English.'
            },
            header: {
                logo: 'Ashkenazi Cuisine',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Ashkenazi Cuisine',
                subtitle: 'Authentic recipes from the Jewish table of Eastern Europe',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                'מרקים וקניידלך': 'Soups & Kneidlach',
                'דגים ומאכלי פתיחה': 'Fish & Starters',
                'צ׳ולנט ובשרים': 'Cholent & Meats',
                'קוגל ותוספות': 'Kugel & Sides',
                'מאפים וקינוחים': 'Pastries & Desserts',
                'Soups & Kneidlach': 'Soups & Kneidlach',
                'Fish & Starters': 'Fish & Starters',
                'Cholent & Meats': 'Cholent & Meats',
                'Kugel & Sides': 'Kugel & Sides',
                'Pastries & Desserts': 'Pastries & Desserts'
            },
            difficulty: {
                'קל': 'Easy',
                'בינוני': 'Medium',
                'מאתגר': 'Hard',
                'Easy': 'Easy',
                'Medium': 'Medium',
                'Hard': 'Hard'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                kosher: 'Kosher',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Ashkenazi Cuisine — Authentic kosher Ashkenazi recipes',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
