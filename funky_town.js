//Jawadul Kadir and Taylor Wong
//SoftDev1 pd7
//HW15 -- Sequential Progression
//2000-12-07

var fibonacci = function(n) {
	if (n < 2) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

var gcd = function(a, b) {
	var ans;
	for (var i = 1; i < Math.min(a + 1, b); i++) {
		if (a % i == 0 && b % i == 0) {
			ans = i;
		}
	}
	return ans;
};

var randomStudent = function(){
	var students = ["Alice", "Bailey", "Candace", "Derek"];
	return students[Math.floor(Math.random() * students.length)];
};

var buttonCallback = function(e){
    console.log("\n\nhere comes e...");
    console.log(e);
    console.log("\n\nhere comes 'this'...");
    console.log(this);
}

var b = document.getElementById('fibonacci');
b.addEventListener('click', fibonacci);

var b = document.getElementById('gcd');
b.addEventListener('click', gcd);

var b = document.getElementById('randomStudent');
b.addEventListener('click', randomStudent);
