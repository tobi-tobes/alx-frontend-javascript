export default class HolbertonClass {
  constructor(size, location){
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    } else if (size < 0) {
      throw new RangeError('Size must be greater than 0');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Define behavior when cast to a Number
  valueOf() {
    return this._size;
  }

  // Define behavior when cast to a String
  toString() {
    return `${this._location}`;
  }
}