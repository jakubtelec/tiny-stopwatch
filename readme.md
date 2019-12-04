### Why?

To avoid annoying missing labels error when using `console.time()` and `console.timeEnd()` in async js code.

### How?

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
const timer = new TinyStopwatch(); // initializes stopwatch

//
// some time consuming stuff
//

console.log("Time passed since Big Bang!" + timer.getInterval() + "s");

//
// another time consuming stuff
//

console.log("Time passed since Big Bang!" + timer.getInterval() + "s");

console.log("Big Bang, once again!");
timer.reset(); // reinitializes stopwatch
```
