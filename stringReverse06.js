
String.prototype.reverse = function () {
  if(!this || this.length <2) return this;

  return this.split('').reverse().join('');
}

> 'abc'.reverse();
  = 'cba'
