// 'use strict;'

var calculatorState = {
  currentValue: '',
  previousValue: '',
  pendingOperation: ''
};

window.calculatorApp = {
  clickDigit: function(digit) {
    display.value = digit;
  },
  clickDecimal: function() {
  },
  clickOperator: function(op) {
    alert('op clicked: ' + op)
  },
  clickEquals: function() {
    alert('equals clicked')
  }
}
