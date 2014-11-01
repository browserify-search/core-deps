core-deps
=========

Get a module or .js file's dependencies on Node core modules.

## Install

```
npm install core-deps
```

## Usage

```js
var coreDeps = require('core-deps')
coreDeps('some_js_file.js', function(err, deps){
  console.log(deps)
}
```

Output might be something like:

```
{ path: true,
  assert: true,
  fs: true,
  child_process: true,
  stream: true,
  util: true,
  buffer: true,
  events: true }
```