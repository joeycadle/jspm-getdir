# jspm-getdir

Returns the full path to a jspm package.

## Installation

```
npm install jspm-getdir --save
```

## Usage

```javascript
var getdir = require('jspm-getdir');

// Assuming you have a jspm package github:myusername/mypkg@0.1.0
console.log( getdir('github:myusername/mypkg@0.1.0') ); // /rootpath/someproject/jspm_packages/github/myusername/mypkg@0.1.0

// Assuming you have both a github:myusername/mypkg@0.1.0 and github:myusername/mypkg@0.2.0
console.log( getdir('github:myusername/mypkg') ); // /rootpath/someproject/jspm_packages/github/myusername/mypkg@0.2.0 (highest ver)
```
