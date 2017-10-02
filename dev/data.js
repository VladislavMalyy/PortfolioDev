
const DATA = {
    'skills' : [
        {
            'id' : '0',
            'title' : 'HTML+CSS+JS',
            'desc' : 'It is a standard tools for any frontend developer. It all starts with these technologies. Without them, nothing would have happened.',
            'imgUrl' : './images/html_css_js.png'
        },
        {
            'id' : '1',
            'title' : 'JavaScript 2015',
            'desc' : 'This is the new standard of the most used programming language in the world. Many programmers were waiting for the introduction of new standards. And this is not in vain. Many new features and capabilities. That is cool.',
            'imgUrl' : './images/es6.png'
        },
        {
            'id' : '2',
            'title' : 'Craft CMS',
            'desc' : 'This is a very convenient and usable CMS for both developers and users.It has a user-friendly interface, many plugins and very convenient tools for working with templates.',
            'imgUrl' : './images/craft.png'
        },
        {
            'id' : '3',
            'title' : 'Gulp',
            'desc' : 'This is one of the most used tools for building your project. It significantly speeds up the development of the code and allows the use of new technologies for development.',
            'imgUrl' : './images/gulp.png'
        },
        {
            'id' : '4',
            'title' : 'Webpack',
            'desc' : 'Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs.',
            'imgUrl' : './images/webpack.png'
        },
        {
            'id' : '5',
            'title' : 'CSS Pre-processors',
            'desc' : 'These are tools that allow you to speed up the development of css. Make development very understandable and readable.',
            'imgUrl' : './images/css_preprocessors.jpg'
        },
        {
            'id' : '6',
            'title' : 'CSS Frameworks',
            'desc' : 'This is a ready-made web application template that speeds development and allows for the shortest time to develop an initial version of the application.',
            'imgUrl' : './images/css_frameworks.png'
        }
    ],
    'projects' : [
        {
            'id' : '0',
            'title' : 'Bermuda Quest',
            'description' : 'Site for quest rooms in Odessa.',
            'link' : 'http://bermuda-quest.com.ua/',
            'tasks' : 'all',
            'tools' : [
                {
                    'id' : '0',
                    'title' : 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'SASS'
                },
                {
                    'id' : '2',
                    'title' : 'Gulp'
                },
                {
                    'id' : '3',
                    'title' : 'Twitter Bootstrap 3'
                }
            ]
        },
        {
            'id' : '2',
            'title' : 'AJ Recruiting',
            'description' : 'UpWork project for recruiting company.',
            'link' : 'http://ajr.veotest.co.uk/',
            'tasks' : 'all',
            'tools' : [
                {
                    'id' : '0',
                    'title' : 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'SASS'
                },
                {
                    'id' : '2',
                    'title' : 'Gulp'
                }
            ]
        },
        {
            'id' : '3',
            'title' : 'Netoctat',
            'description' : 'Website for SEO company in Odessa',
            'link' : 'http://netocrat.wideweb.pro/',
            'tasks' : 'all',
            'tools' : [
                {
                    'id' : '0',
                    'title' : 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'SASS'
                },
                {
                    'id' : '2',
                    'title' : 'Gulp'
                }
            ]
        },
        {
            'id' : '4',
            'title' : 'Wideweb',
            'description' : 'Website for Development company',
            'link' : 'http://wideweb.pro',
            'tasks' : 'craft',
            'tools' : [
                {
                    'id': '0',
                    'title': 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'Craft'
                }
            ]
        },
        {
            'id' : '5',
            'title' : 'Crimea Rentime',
            'description' : 'Website for lease auto in Crimea.',
            'link' : 'http://crimea-rentime.ru/',
            'tasks' : 'craft',
            'tools' : [
                {
                    'id': '0',
                    'title': 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'Craft'
                }
            ]
        },
        {
            'id' : '6',
            'title' : 'Eco Vagonka',
            'description' : 'Website for sale lining.',
            'link' : 'http://eco-vagonka.com.ua/',
            'tasks' : 'craft',
            'tools' : [
                {
                    'id': '0',
                    'title': 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'Craft'
                },
                {
                    'id' : '3',
                    'title' : 'Twitter Bootstrap 3'
                }
            ]
        },
        {
            'id' : '7',
            'title' : 'Pack',
            'description' : 'Website for sale package.',
            'link' : 'http://pack.wideweb.pro/',
            'tasks' : 'craft',
            'tools' : [
                {
                    'id': '0',
                    'title': 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'Craft'
                }
            ]
        },
        {
            'id' : '8',
            'title' : 'CSC',
            'description' : 'Website for construction and sale furniture.',
            'link' : 'http://csc.mechanised.co.uk/',
            'tasks' : 'craft',
            'tools' : [
                {
                    'id': '0',
                    'title': 'HTML+CSS+JS'
                },
                {
                    'id' : '1',
                    'title' : 'Craft'
                }
            ]
        },
        {
            'id' : '10',
            'title' : 'BestMebel',
            'description': 'Website for sale furniture',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://best-mebel.com.ua/'
        },
        {
            'id' : '11',
            'title' : 'Suvorovskiy',
            'description': 'Website for house management company',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://suvorovskiy.com.ua/'
        },
        {
            'id' : '12',
            'title' : 'Lisenok',
            'description': 'Website for sale baby clothes',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://lisenok.ua/'
        },
        {
            'id' : '13',
            'title' : 'Kuzia',
            'description': 'Website for sale baby clothes',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://kuzya.wideweb.com.ua/'
        },
        {
            'id' : '14',
            'title' : 'Sova',
            'description': 'Website for event agency',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'https://sova.org.ua/'
        },
        {
            'id' : '15',
            'title' : 'Faberlic',
            'description': 'Website for sale cosmetics',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://faberlic-online.org/'
        },
        {
            'id' : '16',
            'title' : 'AngelMu',
            'description': 'Website for internet game',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://angelmu.ru/'
        },
        {
            'id' : '17',
            'title' : 'JuliaSwed',
            'description': 'Website for photographer',
            'tasks' : 'different',
            'tools' : [],
            'link' : 'http://juliaswed.com/'
        }

    ]
};

export default DATA;
