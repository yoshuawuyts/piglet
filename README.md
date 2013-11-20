piglet
======

A tiny grunt configuration

### Directory structure
````
.
├── .build				  // CDN dist
│   ├── index.html
│   ├── js.js
│   ├── styles.css
│   └── views.js
├── api
│   ├── controllers
│   ├── models
│   ├── policies          // permissions
│   └── services          // single purpose functions
├── assets                // CDN files
│   ├── images
│   ├── js
│   │   ├── controllers
│   │   ├── directives
│   │   ├── filters
│   │   └── services
│   ├── modules           // bower
│   ├── styles
│   └── views
├── config                // express config
│   ├── helmet            // security headers
│   ├── routes
│   ├── session
│   └── sockets           // socket.io
├── grunt
│   ├── config
│   ├── tasks
│   └── var
├── test
│   ├── api              
│   ├── assets            
│   └── integration       // E2E testing
├── .bowerrc
├── .gitignore
├── .travis.yml
├── app.js
├── bower.json
├── Gruntfile.js
├── package.json
└── README.md
````

### Flow

Grunt
````
build all tasks into .build > start connect server > open browser > watch files
````

JS
````
lint with jshint > concat & compile with uglify > integrate into views with linker
````

Styles
````
compile with styl > autoprefixer > lint with csslint > integrate into views with linker
````

Views
````
compile with jade > convert to js strings with jade
````