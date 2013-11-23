# piglet [![Code Climate](https://codeclimate.com/repos/5290b0cac7f3a34a3804b2b7/badges/6e3552eab1ef6b6b4382/gpa.png)](https://codeclimate.com/repos/5290b0cac7f3a34a3804b2b7/feed)


A tiny grunt configuration

## Tasks

__CSS:__ Styl, Autoprefixer, CSSo optimizer

__Views:__ Jade

__JS:__ Concat, Uglify

__Lint:__ JSbeautifier, JShint

With autoreload, watch and more...

## Directory structure
````
.
├── api
│   ├── controllers
│   ├── models
│   ├── policies          // permissions
│   └── services          // single purpose functions
├── assets                // CDN files
│   ├── images
│   ├── js
│   ├── vendor            // bower
│   ├── styles
│   └── views
├── build
├── config                // express config
├── grunt
├── test
│   ├── api              
│   ├── client       
│   ├── integration
│   └── visual       
├── app.js
├── bower.json
├── Gruntfile.js
├── package.json
└── README.md
````

## License
MIT
