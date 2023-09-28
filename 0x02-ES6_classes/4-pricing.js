import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Validate input
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (amount < 0) {
      throw new RangeError('Amount must be greater than 0');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a valid currency');
    }

    // Initialize object
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (newAmount < 0) {
      throw new RangeError('Amount must be greater than 0');
    }
    this._amount = newAmount;
  }

  // Getter and setter for currency attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a valid currency');
    }
    this._currency = newCurrency;
  }

  // displayFullPrice method definition
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // convertPrice static method definition
  static convertPrice(amount, conversionRate) {
    // Validate amount and conversion rate
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (amount < 0) {
      throw new RangeError('Amount must be greater than 0');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    } else if (conversionRate < 0) {
      throw new RangeError('Conversion rate must be greater than 0');
    }

    return amount * conversionRate;
  }
}
