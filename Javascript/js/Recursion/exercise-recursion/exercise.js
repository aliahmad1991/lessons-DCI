function sumTo(n) {
    let sum = 0;
        for (let i = 1; i <= n; i++) {
        sum += i;
        }
        return sum;
    }
   console.log( sumTo(100) );
   /////////////////////////////////////

   var factorial = function(n) {
	if(n == 0) {
		return 1
	} else {
		return n * factorial(n - 1);
	}
}

alert(factorial(5));
///////////////////////////////////////////////
function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
  alert(fib(3)); // 2
  alert(fib(7)); // 13
  alert(fib(77)); // 5527939700884757