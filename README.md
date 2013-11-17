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
│   ├── integration       // E2E testing
│   └── karma.conf.js     // test runner config
├── .bowerrc
├── .gitignore
├── .travis.yml
├── app.js
├── bower.json
├── Gruntfile.js
├── package.json
└── README.md
````