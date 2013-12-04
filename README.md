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
├── assets                // CDN-ready files
│   ├── images
│   ├── js
│   ├── vendor            // bower
│   ├── styles
│   └── views
├── build
├── config                // config
├── grunt
└── tests  
````

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)
