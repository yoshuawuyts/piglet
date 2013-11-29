# piglet [![Dependency Status](https://gemnasium.com/yoshuawuyts/piglet.png)](https://gemnasium.com/yoshuawuyts/piglet) [![Code Climate](https://codeclimate.com/github/yoshuawuyts/piglet.png)](https://codeclimate.com/github/yoshuawuyts/piglet)


A tiny grunt configuration

## Commands

````styles````:  Compile styl, autoprefix, optimize with CSSo

````views````: Compile jade

````js````: Concat, optimize, minify and mangle

````build````: JSbeautifier, JShint

````time````: Lint, build & test while benchmarking

````deploy````: Add git tags & push upstream

````default````: Build, lint, test, server & watch

While always autoreloading, autocorrecting and watching everything...

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
