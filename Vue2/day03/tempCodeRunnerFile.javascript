function add(num) {
  let sum = 0
	for (let i = 0; i < num; i++) {
		sum += i
	}
	console.log(sum)
}
var start = new Date().getTime()
// call your function
add(1000000)
var end = new Date().getTime()
console.log('cost is', `${end - start}ms`)
