/**cookies vs local storage vs session storage */

// local storage

localStorage.setItem('lunbbch', 'tea');

localStorage.setItem('launchddd', 'tea');

localStorage.removeItem('lunch');
localStorage.clear();


/**using the cookie storage */
document.cookie = 'benjamin =  olson';//
//expires
document.cookie = "doSomethingOnce = true;expires=Fri,31 Dec 9999 23:59:59 GMT";
//path
document.cookie = "person = ben;expires=Fri,31 Dec 9999 23:59:59 GMT path=/";

// delete
document.cookie = "doSomethingOnce = ;expires=Fri,31 Dec 1970 00:00:00 GMT path=/";
