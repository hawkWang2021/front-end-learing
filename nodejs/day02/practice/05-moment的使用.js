const moment = require('moment');
// 日期格式化
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('now: ', now);
// 日期解析
let date = moment('2022-06-08').format();
console.log('date: ', date);
// 日期加
let add = moment('2022-06-08').add(1, 'days').format();
console.log('add: ', add);
// 日期减
let sub = moment('2022-06-08').subtract(1, 'days').format();
console.log('sub: ', sub);
// 相对时间
let from = moment('2022-06-08').fromNow();
console.log('from: ', from);
// 日历时间
let calendar = moment().calendar();
console.log('calendar: ', calendar);
