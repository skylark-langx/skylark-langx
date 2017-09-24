# skylark-langx
A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.

## What's included

- Class Support
- Evented 
- Deferred
- Tool functions

## Installation
There are multiple ways to install the skylark-langx library. 
- npm  
npm install skylark-langx --save
- bower  
bower install skylark-langx
- cdn  
http://registry.skylarkjs.org/packages/skylark-utils/v0.9.1/skylark-langx.js    or  
http://registry.skylarkjs.org/packages/skylark-utils/v0.9.1/uncompressed/skylark-langx.js 

## Usage

- Using the skylark-langx library for a AMD module.  
```js
require({
  'paths': {
     'skylark-langx': 'http://registry.skylarkjs.org/packages/skylark-langx/v0.9.1/skylark-langx' 
  }
}, ['skylark-langx'], function(slangx) {
  // slangx.isArrayLike(a) 
});
```

- Using the skylark-langx library for a global object named skylarkjs.  
```js
<script type="text/javascript" src="http://registry.skylarkjs.org/packages/skylark-langx/v0.9.1/skylark-langx.js"></script>
<script>
// skylarkjs.langx.isArrayLike(a);
</script>
```

- Using the skylark-langx library for a AMD package.  
```js
require({
  'packages': [
    { 'name': 'skylark-langx', 'location': 'http://registry.skylarkjs.org/packages/skylark-langx/v0.9.1/skylark-langx/' }
  ]
}, ['skylark-langx/langx'], function(slangx) {
  // slangx.isArrayLike(a);
});
```

## API Document
skyalrk.js application framwork contains the above modules, so the module API documentation can refer to sklark.js's api doc.

- http://www.skylarkjs.org/api

## Examples
Please access the following site for the execution of each example program under the "/examples" directory.

- http://www.skylarkjs.org/examples
- http://examples.skylarkjs.org/skylark-langx/

## License

Released under the [MIT](http://opensource.org/licenses/MIT)
