export default class HolbertonCourse {
    constructor(name, length, students) {
	// Check if name is a string
	if (typeof name !== "string") {
	    throw new TypeError("Name must be a string");
	}
	// Check if length is a number or greater than 0
	if (typeof length !== "number") {
	    throw new TypeError("Length must be a number");
	} else if (length < 0) {
	    throw new RangeError("Length must be greater or equal to 0");
	}
	// Check if students is an array of strings
	if (!Array.isArray(students)) {
	    throw new TypeError("Students must be an array");
	} else {
	    for (const student of students) {
		if (typeof student !== "string") {
		    throw new TypeError("Students must be an array of strings");
		}
	    }
	}
	// Now that parameter types have been verified, instantiate
	// object properties
	this._name = name;
	this._length = length;
	this._students = students;
    }

    // Getter and setter for name
    get name() {
	return this._name;
    }
    set name(newName) {
	if (typeof newName !== "string") {
	    throw new TypeError("Name must be a string");
	}
	this._name = newName;
    }

    // Getter and setter for length
    get length() {
	return this._length;
    }
    set length(newLength) {
	if (typeof newLength !== "number") {
	    throw new TypeError("Length must be a number");
	}
	this._length = newLength;
    }

    // Getter and setter for students
    get students() {
	return this._students;
    }
    set students(newStudents) {
	if (!Array.isArray(newStudents)) {
	    throw new TypeError("Students must be an array");
	} else {
	    for (const student of newStudents) {
		if (typeof student !== "string") {
		    throw new TypeError("Students must be an array of strings");
		}
	    }
	}
	this._students = newStudents;
    }
}
	    
