### What does it do?

It measueres time passed since moment of its initialization. In seconds, because we are humans.

### Why?

To avoid annoying `missing/duplicated labels` errors and inconvenient syntax when triggering `console.time()` and `console.timeEnd()` in async JS code. Since I'm using this tiny snippet in many projects it's better to keep it - and share - as a separated package.

### How?

install:

```bash
yarn add tiny-stopwatch
```

or

```bash
npm i tiny-stopwatch
```

then:

```javascript
import TinyStopwatch from "tiny-stopwatch";
// or const TinyStopwatch = require('tiny-stopwatch');

console.log("Big Bang!");
const timer = new TinyStopwatch(); // creating instance initializes stopwatch

//
// some time consuming stuff
//

console.log("Time passed since Big Bang!: " + timer.getInterval() + "s");

//
// another time consuming stuff
//

console.log("Time passed since Big Bang!: " + timer.getInterval() + "s");

console.log("Big Bang, once again!");
timer.reset(); // reinitializes stopwatch
```
