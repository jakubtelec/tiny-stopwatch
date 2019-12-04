//

const TinyTimer = function() {
  let startTime = Date.now();
  this.getInterval = function() {
    return `${new Date(Date.now() - startTime) / 1000}s`;
  };
  this.reset = function() {
    startTime = Date.now();
  };
};

// And that's it, it's really tiny

module.exports = TinyTimer;
