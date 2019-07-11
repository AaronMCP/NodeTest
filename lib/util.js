// uitl.inherits
// util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。

var util = require('util');

function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function () {
    console.log('Hello ' + this.name);
  };
}
Base.prototype.showName = function () {
  console.log(this.name);
};

function Sub() {
  this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello(); 
console.log(objSub);


// util.inspect
// util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法

function Person() {
  this.name = 'byvoid';
  this.toString = function () {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回true， 否则返回false。

util.isArray([])
// true
util.isArray(new Array)
// true
util.isArray({})
// false

// util.isRegExp(object)
// 如果给定的参数 "object"是一个正则表达式返回true， 否则返回false。

util.isRegExp(/some regexp/)
// true
util.isRegExp(new RegExp('another regexp'))
// true
util.isRegExp({})
// false

// util.isDate(object)
// 如果给定的参数 "object"是一个日期返回true， 否则返回false。

util.isDate(new Date())
// true
util.isDate(Date())
// false (without 'new' returns a String)
util.isDate({})
// false


// util.isError(object)
// 如果给定的参数 "object"是一个错误对象返回true， 否则返回false。
util.isError(new Error())
// true
util.isError(new TypeError())
// true
util.isError({
  name: 'Error',
  message: 'an error occurred'
})
// false