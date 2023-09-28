export default class Building {
  constructor(sqft) {
    // Validate sqft
    if (typeof sqft !== 'number') {
      throw new TypeError('Square foot must be a number');
    } else if (sqft < 0) {
      throw new RangeError('Square foot must be greater than 0');
    }

    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  evacuationWarningMessage() {
    console.log(this._sqft);
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }
}
