// 1.向 module.exports 对象上挂载属性 username
module.exports.username = 'zs';

// 2.向 module.exports 对象上挂载方法 sayHello
module.exports.sayHello = function () {
	console.log('Hello!');
};

// 3.让 module.exports 指向一个全新的对象

module.exports = {
	nickname: '小黑',
	sayHi() {
		console.log('Hi!');
	},
};
