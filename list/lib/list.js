'use strict';

/**
 * class List - constructor creates a list
 * @params length, data
 */
class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Resets the index of the list so that the idencies go from 0 to -1
   * @params acc, val, idx
   * @returns object
   */
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
   * Adds one or more elements of an array
   * @params item
   * @returns array
   */
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
   * Takes last element off the array and returns it to the caller
   * @params item, data
   * @returns item off the array
   */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
   * Removes first element from array and returns that item
   * @params data, item
   * @returns the removed item
   */
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
   * Adds one or more elements to the beginning of an array
   * @params item
   * @returns the length of the new array
   */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
   * Does this run a successful forEach?
   * @params callback
   */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
   * Creates a new array with results of calling a function for every array element
   * @params callback
   * @returns result
   */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
   * Creates an array filled with array elements that pass a test
   * @params callback
   * @returns result
   */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
   * Applies to array and reduces it
   * @params callback, state
   * @returns state
   */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;