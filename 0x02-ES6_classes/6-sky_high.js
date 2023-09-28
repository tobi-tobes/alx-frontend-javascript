import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // Validate floors
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    } else if (floors < 0) {
      throw new RangeError('Floors must be greater than 0');
    }

    this._floors = floors;
  }

  // Getter for floors attribute
  get floors() {
    return this._floors;
  }

  // Implement evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}