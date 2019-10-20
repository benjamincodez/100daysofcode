let mypromise = new Promise((res, rej) => {
	let request = new XMLHttpRequest();
	// request.onreadystatechange = function () {
		// console.log(request.response);
	request.onload = res;
	request.onerror = rej;
	// };
	request.open('get', 'https://randomuser.me/api/');
	request.send();

});
mypromise,.then((data) => {
	data = data.target.response;
	console.log(data);
}).catch(() => {
	console.log(`theres an error`);
})
