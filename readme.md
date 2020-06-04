# dr-server
- dr-server is a npm pacakge used to find fastest Server from bunch of list of servers in one hit.

# Installation
dr-server requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dr-server
$ npm install -d
$ node index.js
```
# Testing
To perfom its testing just run test command as
```sh
$ cd dr-server
$ npm run test
```
# Server List in Json
#### server.json
```json
[
  {
    "url": "http://example1.com",
    "priority": 1
  },
  {
    "url": "http://example2.com",
    "priority": 7
  },
  {
    "url": "http://example3.com",
    "priority": 1
  },
  {
    "url": "http://example4.com",
    "priority": 7
  }
]
```

# Usage

### imports
```js
const { findServer } = require('dr-server')
const serverList = require('./server.json')
```
### findServer Promise
```js
//findServer is a promise
findServer(serverList).then(bestServer=>{
    // should get the best server object
}).catch(err=>{
    // should get error if request no online server found or takes more time 5000ms
})
```