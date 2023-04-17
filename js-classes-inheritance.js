// Base-class-ES5

function Builder(value) {
    this.value = value;
}
  
Builder.prototype.plus = function(n) {
    var sumArgs = n;
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i ++) {
        sumArgs += arguments[i];
      }
    }
    this.value += sumArgs;
    return this;
};
  
Builder.prototype.multiply = function(n) {
    var multiplier = this.value;
    for (var i = 1; i < n; i ++) {
        this.value += multiplier;
    }
    return this;
};

Builder.prototype.get = function() {
    return this.value;
};

// ES6-class-IntBuilder

class IntBuilder extends Builder {
    constructor (value) {
        super(value);
    }

    minus (...n) {
        for (let key in n) {
            if (n.hasOwnProperty(key)) {
                this.value -= n[key];
            }
        }
        return this;
    }

    divide (n) {
        this.value = Math.trunc(this.value / n);
        return this;
    }

    mod (n) {
        this.value = this.value % n;
        return this;
    }

    static random (from, to) {
        let random = from + Math.random() * (to - from + 1);
        return Math.floor(random);
    }
} 

// ES5-class-StringBuilder

function StringBuilder(value) {
    this.value = value;
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function(n) {
    this.value = this.value.slice(0, this.value.length - n);
    return this;
};

StringBuilder.prototype.divide = function(n) {
    this.value = this.value.slice(0, Math.floor(this.value.length / n));
    return this;
};

StringBuilder.prototype.remove = function(n) {
    var symbol = new RegExp(n, 'g');
    this.value = this.value.replace(symbol, '');
    return this;
};

StringBuilder.prototype.sub = function(from, n) {
    this.value = this.value.slice(from, (from + n));
    return this;
};