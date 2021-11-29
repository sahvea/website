import { getAge } from './utils';

const myAge = getAge('05-16-1997');

export const translations = {
  en: {
    nav: {
      main: 'Homepage',
      projects: 'Projects',
      contact: 'Contact',
      lang: 'рус',
    },

    link: {
      down: 'scroll down',
      up: 'scroll up',
    },

    lead: {
      about: {
        option1: 'a#425t @m',
        option2: 'A1$8b! j&',
        option3: '\\A@64t $$',
        option4: '/A5d0? t#',
        option5: 'Ab0$it 9e',
        option6: '/Abou! ne',
        final: '/About me',
      },
      skills: {
        option1: 's&9Lir $rt',
        option2: '8ki\\ep 5#2',
        option3: '$p8b!; $$t',
        option4: '/Sm9d? j#y',
        option5: 'Sk0il5 9el',
        option6: '/Ski!! $e?',
        final: '/Skill set',
      }
    },

    about: {
      name: {
        label: 'Name:',
        value: 'Sophie Milash',
      },
      age: {
        label: 'Age:',
        value: myAge,
      },
      country: {
        label: 'Country:',
        value: 'Russia',
      },
      city: {
        label: 'City:',
        value: 'Kaliningrad',
      },
      specialization: {
        label: 'Specialization:',
        value: 'Frontend developer',
      },
      education: {
        label: 'Education:',
        value: {
          practikum: {
            name: 'Yandex.Practikum',
            dates: 'Jan 2021 - Oct 2021',
            descr: 'Web Development professional training course',
          },
          kant: {
            name: 'Immanuel Kant Baltic Federal University',
            dates: 'Sep 2015 - Jun 2019',
            descr: 'Linguistics and Intercultural Communication, bachelor',
          }
        }
      },
    },

    skills: {
      core: 'Core technologies:',
      frameworks: 'Frameworks / libraries:',
      preprocessors: 'Preprocessors:',
      bundlers: 'Module bundlers:',
      databases: 'Databases:',
      sliderTitles: {
        allPercentage: 'Languages over all time (in percentage)',
        allHours: 'Languages over all time (in hours)',
        activity30: 'Coding activity over last 30 days',
      },
    },

    notFound: {
      message: 'Page not found',
      link: 'Return',
    },
  },

  ru: {
    nav: {
      main: 'Главная',
      projects: 'Проекты',
      contact: 'Контакты',
      lang: 'eng',
    },

    link: {
      down: 'Вниз',
      up: 'Наверх',
    },

    lead: {
      about: {
        option1: 'о?г/ @н6',
        option2: 'О$!з нщу',
        option3: '\\0ре 9бе',
        option4: '/09о 6ц&',
        option5: 'о!р0 кп>',
        option6: '/О6о шн4',
        final: '/Обо мне',
      },
      skills: {
        option1: 'н46?&ки',
        option2: '5Аз9щ01',
        option3: 'новфки$',
        option4: '/Н\\в#зи',
        option5: 'Н0в@ли',
        option6: '/На!ык1',
        final: '/Навыки',
      }
    },

    about: {
      name: {
        label: 'Имя:',
        value: 'София Милаш',
      },
      age: {
        label: 'Возраст:',
        value: myAge,
      },
      country: {
        label: 'Страна:',
        value: 'Россия',
      },
      city: {
        label: 'Город:',
        value: 'Калининград',
      },
      specialization: {
        label: 'Специализация:',
        value: 'Frontend developer',
      },
      education: {
        label: 'Образование:',
        value: {
          practikum: {
            name: 'Yandex.Practikum',
            dates: 'янв 2021 - окт 2021',
            descr: 'Курс профессиональной подготовки по веб-разработке',
          },
          kant: {
            name: 'Балтийский Федеральный Университет им. Иммануила Канта',
            dates: 'сент 2015 - июнь 2019',
            descr: 'Лингвистика и международная коммуникация, бакалавр',
          }
        }
      },
    },

    skills: {
      core: 'Основные технологии:',
      frameworks: 'Фреймворки / библиотеки:',
      preprocessors: 'Препроцессоры:',
      bundlers: 'Сборщики модулей:',
      databases: 'Базы данных:',
      sliderTitles: {
        allPercentage: 'Языки за все время (в процентах)',
        allHours: 'Языки за все время (в часах)',
        activity30: 'Активность за последние 30 дней',
      },
    },

    notFound: {
      message: 'Страница не найдена',
      link: 'На главную',
    },
  },
};