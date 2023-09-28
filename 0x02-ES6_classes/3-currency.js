export default class Currency {
  constructor(code, name) {
    // Validate input
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Initialize object
    this._name = name;
    this._code = code;
  }

  // Getter and setter for code attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method definition for displayFullCurrency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
