export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	setName(name) {
		this._name = name;
	}

	getName() {
		return this._name;
	}

	setLength(length) {
		this._length = length;
	}
	
	getLength() {
		return length;
	}

	setStudents(students) {
		this._students = students
	}

	getStudents() {
		return students;
	}
}
