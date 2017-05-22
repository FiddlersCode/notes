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
    },
    anInstanceOf: function(object, constructor) {
      if (object instanceof constructor !== true) {
        throw new Error("Assertion failed: " + object + " is not an instance of "
        + constructor)
      }
    }
  };
  exports.assert = assert;
})(this);
