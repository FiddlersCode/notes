(function(exports) {
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error("Assertion failed: " + assertion + " is not truthy");
      }
    },
    isFalse: function(assertion) {
      if (!!assertion) {
        throw new Error("Assertion failed: " + assertion + " is not falsey");
      }
    },
    isEqual: function(a, b) {
      if (a !== b) {
        throw new Error("Assertion failed: " + a + " is not equal to " + b);
      }
    },
    isNotEqual: function(a, b) {
      if (a === b) {
        throw new Error("Assertion failed: " + a + " is equal to " + b);
      }
    }
  };
  exports.assert = assert;
})(this);

expect(countModel instanceof Countmodel).toBe(true)
assert.instanceof(countModel,Countmodel)
