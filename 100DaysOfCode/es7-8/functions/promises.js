
// creating a Promise

let myPromise = new Promise((resolve, rejected) => {
	/**for making asynchronus api calls to nd from the database */
	if (true) {
		resolve(1234);
	} else {
		rejected();
	}
});

myPromise.then(() => {
	console.log(myPromise);

}).catch(() => {

});

myPromise.then(() => {
	console.log('benjamin');

}).catch(() => {
	console.log('your promise failed');

});
