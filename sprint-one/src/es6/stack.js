class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }



  push(value) {
    this.key++;
    this.storage[this.key]= value;
  }

  pop() {
    var del = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return del;
  }

  size() {
    var length=0;

    for( var i in this.storage) {
      length++;
    }
    return length;
  }

}
