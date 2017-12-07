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