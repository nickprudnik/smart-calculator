class SmartCalculator {
  constructor(calcValue) {
    this.value = String(calcValue);
    // your implementation
  }

  add(num) {
    this.value += '+' + String(num);
    return this;
    // your implementation
  }

  subtract(num) {
    this.value += '-' + String(num);
    return this;
    // your implementation
  }

  multiply(num) {
    this.value += '*' + String(num);
    return this;
    // your implementation
  }

  devide(num) {
    this.value += '/' + String(num);
    return this;
    // your implementation
  }

  pow(num) {
    this.value += '**' + String(num);
    return this;
    // your implementation
  }
  valueOf(){
      return eval(this.value);
  }

}
module.exports = SmartCalculator;
