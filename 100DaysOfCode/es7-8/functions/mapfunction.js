// the map function
// maps re data structures that store key value pairs
// in javascript objects re maps

/**maps */
//  a func called myMap
let myMap = function () {
	this.collection = {};
	this.count = 0;
	this.size = function () {
		return this.count;
	}

	// the set oparator
	this.set = function (key, value) {
		this.collection[key] = value;
		this.count++;

	};
	// the has operator
	this.has = function (key) {
		return (key in this.collection);
	};
	//
	this.get = function (key) {
		// ternary opartor
		return (key in this.collection) ? this.collection[key] : null;
	};
	// the delete method
	this.delete = function (key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};
	this.value = function () {
		let result = new this.Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};
	// the clear method
	this.clear = function () {
		this.collection = {};
		this.count = 0;
	};
};

// making use of the mapfunction
let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('balley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());
