# piglet [![Dependency Status](https://gemnasium.com/yoshuawuyts/piglet.png)](https://gemnasium.com/yoshuawuyts/piglet) [![Code Climate](https://codeclimate.com/github/yoshuawuyts/piglet.png)](https://codeclimate.com/github/yoshuawuyts/piglet)


A tiny grunt configuration

## Tasks

__CSS:__ Styl, Autoprefixer, CSSo optimizer

__Views:__ Jade

__JS:__ Concat, Uglify

__Lint:__ JSbeautifier, JShint

__Time:__ time-grunt benchmark

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
MIT © [Yoshua Wuyts](yoshuawuyts.com)
