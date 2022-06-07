# JS高级笔记
<!-- TOC -->

- [JS高级笔记](#js高级笔记)
  - [1. 面向对象编程介绍](#1-面向对象编程介绍)
    - [1.1. 两大编程思想:面向过程,面向对象](#11-两大编程思想面向过程面向对象)
    - [1.2. 面向过程 POP](#12-面向过程-pop)
    - [1.3. 面向对象 OOP](#13-面向对象-oop)
    - [1.4. 面向过程与面向对象对比](#14-面向过程与面向对象对比)
  - [2. ES6中的类和对象](#2-es6中的类和对象)
    - [2.1. 对象](#21-对象)
    - [2.2. 类 Class](#22-类-class)
    - [2.3. 创建类](#23-创建类)
      - [2.3.1. 语法](#231-语法)
      - [2.3.2. 实例](#232-实例)
    - [2.4. 类创建添加属性和方法](#24-类创建添加属性和方法)
  - [3. 类的继承](#3-类的继承)
    - [3.1. 继承 extends](#31-继承-extends)
      - [3.1.1. 语法-](#311-语法-)
      - [3.1.2. super关键字](#312-super关键字)
      - [3.1.3. super调用父类普通函数以及继承中属性方法查找原则(就近原则）](#313-super调用父类普通函数以及继承中属性方法查找原则就近原则)
      - [3.1.4. super必须在子类this之前调用](#314-super必须在子类this之前调用)
      - [3.1.5. 几个注意点](#315-几个注意点)
  - [4. 面向对象案例](#4-面向对象案例)
    - [4.1. 案例总结](#41-案例总结)
  - [5. 构造函数和原型](#5-构造函数和原型)
    - [5.1. 创建对象的方法(ES6之前)](#51-创建对象的方法es6之前)
    - [5.2. 构造函数](#52-构造函数)
    - [5.3. 构造函数注意点](#53-构造函数注意点)
    - [5.4. new的执行过程](#54-new的执行过程)
    - [5.5. 实例成员和静态成员](#55-实例成员和静态成员)
      - [5.5.1. 实例成员](#551-实例成员)
      - [5.5.2. 静态成员](#552-静态成员)
    - [5.6. 构造函数的问题](#56-构造函数的问题)
    - [5.7. 构造函数原型prototype](#57-构造函数原型prototype)
    - [5.8. 对象原型__proto__](#58-对象原型__proto__)
    - [5.9. constructor构造函数](#59-constructor构造函数)
    - [5.10. 构造函数、实例、原型对象三者之间的关系](#510-构造函数实例原型对象三者之间的关系)
    - [5.11. 原型链](#511-原型链)
    - [5.12. 原型链和成员的查找机制](#512-原型链和成员的查找机制)
    - [5.13. 原型对象中this指向](#513-原型对象中this指向)
    - [5.14. 利用原型对象扩展内置对象](#514-利用原型对象扩展内置对象)
  - [6. 继承](#6-继承)
    - [6.1. call()](#61-call)
    - [6.2. 子构造函数继承父构造函数中的属性](#62-子构造函数继承父构造函数中的属性)
    - [6.3. 借用原型对象继承方法](#63-借用原型对象继承方法)
    - [6.4. ES6 类的本质](#64-es6-类的本质)
      - [6.4.1. ES6之前通过构造函数+原型,实现面向对象编程](#641-es6之前通过构造函数原型实现面向对象编程)
      - [6.4.2. ES6通过类,实现面向对象编程](#642-es6通过类实现面向对象编程)
  - [7. ES5新增方法](#7-es5新增方法)
    - [7.1. 数组方法](#71-数组方法)
      - [7.1.1. forEach遍历数组](#711-foreach遍历数组)
      - [7.1.2. filter()过滤数组](#712-filter过滤数组)
      - [7.1.3. some()查找数组中是否有满足条件的元素](#713-some查找数组中是否有满足条件的元素)
    - [7.2. 字符串方法](#72-字符串方法)
      - [7.2.1. trim()去除字符串两侧空格](#721-trim去除字符串两侧空格)
    - [7.3. 对象方法](#73-对象方法)
      - [7.3.1. Object.keys()获取对象属性名](#731-objectkeys获取对象属性名)
      - [7.3.2. Object.defineProperty()定义对象中新属性或修改原有的属性](#732-objectdefineproperty定义对象中新属性或修改原有的属性)
  - [8. 函数的定义和调用](#8-函数的定义和调用)
    - [8.1. 函数的定义方式](#81-函数的定义方式)
    - [8.2. 函数的调用](#82-函数的调用)
  - [9. this浅析](#9-this浅析)
    - [9.1. 函数内部的this指向](#91-函数内部的this指向)
    - [9.2. 改变函数内部 this 指向](#92-改变函数内部-this-指向)
      - [9.2.1. call方法](#921-call方法)
      - [9.2.2. apply方法](#922-apply方法)
      - [9.2.3. bind方法](#923-bind方法)
  - [10. 严格模式](#10-严格模式)
    - [10.1. 什么是严格模式？](#101-什么是严格模式)
    - [10.2. 开启严格模式](#102-开启严格模式)
      - [10.2.1. 为脚本开启严格模式](#1021-为脚本开启严格模式)
      - [10.2.2. 为函数开启严格模式](#1022-为函数开启严格模式)
    - [10.3. 严格模式中的变化](#103-严格模式中的变化)
      - [10.3.1. 变量规定](#1031-变量规定)
      - [10.3.2. 严格模式下this指向问题](#1032-严格模式下this指向问题)
      - [10.3.3. 函数变化](#1033-函数变化)
  - [11. 高阶函数](#11-高阶函数)
  - [12. 闭包浅析](#12-闭包浅析)
    - [12.1. 闭包概述](#121-闭包概述)
    - [12.2. 变量作用域](#122-变量作用域)
    - [12.3. 闭包是什么](#123-闭包是什么)
    - [12.4. 闭包的作用](#124-闭包的作用)
    - [12.5. 用闭包模拟私有方法](#125-用闭包模拟私有方法)
    - [12.6. 在循环中创建闭包会遇到的一个常见错误😵](#126-在循环中创建闭包会遇到的一个常见错误)
      - [12.6.1. 解决方法一:使用更多的闭包](#1261-解决方法一使用更多的闭包)
      - [12.6.2. 解决方法二:使用立即执行函数](#1262-解决方法二使用立即执行函数)
      - [12.6.3. 解决方法三:使用ES6变量`let`](#1263-解决方法三使用es6变量let)
    - [12.7. 性能考量](#127-性能考量)
  - [13. 递归](#13-递归)
    - [13.1. 递归概述](#131-递归概述)
    - [13.2. 案例(利用递归遍历数据)](#132-案例利用递归遍历数据)
    - [13.3. 浅拷贝](#133-浅拷贝)
    - [13.4. 深拷贝](#134-深拷贝)
  - [14. 正则表达式](#14-正则表达式)
    - [14.1. 案例(改变输入字符串的顺序)](#141-案例改变输入字符串的顺序)
  - [15. ES6概述](#15-es6概述)
  - [16. let关键字](#16-let关键字)
  - [17. const关键字](#17-const关键字)
  - [18. let const var 的区别](#18-let-const-var-的区别)
  - [19. 解构赋值](#19-解构赋值)
    - [19.1. 数组解构](#191-数组解构)
    - [19.2. 对象解构](#192-对象解构)
  - [20. 箭头函数](#20-箭头函数)
    - [20.1. 基本语法](#201-基本语法)
    - [20.2. 箭头函数的this指向](#202-箭头函数的this指向)
  - [21. 剩余参数](#21-剩余参数)
    - [21.1. 剩余参数与解构配合使用](#211-剩余参数与解构配合使用)
  - [22. ES6的内置对象扩展](#22-es6的内置对象扩展)
    - [22.1. Array的扩展方法](#221-array的扩展方法)
      - [22.1.1. 扩展运算符(展开语法)](#2211-扩展运算符展开语法)
      - [22.1.2. 构造函数方法 Array.from()](#2212-构造函数方法-arrayfrom)
      - [22.1.3. 实例方法 find()](#2213-实例方法-find)
      - [22.1.4. 实例方法 findIndex()](#2214-实例方法-findindex)
      - [22.1.5. 实例方法 includes()](#2215-实例方法-includes)
  - [23. String 的扩展方法](#23-string-的扩展方法)
    - [23.1. 模板字符串](#231-模板字符串)
    - [23.2. 实例方法：startsWith() 和 endsWith()](#232-实例方法startswith-和-endswith)
    - [23.3. 实例方法：repeat()](#233-实例方法repeat)
  - [24. Set 数据结构（★★★★★）](#24-set-数据结构)
    - [24.1. 实例方法](#241-实例方法)
    - [24.2. 遍历](#242-遍历)

<!-- /TOC -->

## 1. 面向对象编程介绍

### 1.1. 两大编程思想:面向过程,面向对象

### 1.2. 面向过程 POP

面向过程就是分析出解决问题所需要的步骤,然后用函数把这些步骤一步一步实现,使用的时候再一个一个的依次调用就可以了.==面向过程,就是按照我们分析好了的步骤,按照步骤解决问题.==

### 1.3. 面向对象 OOP

面向对象是把事务分解成为一个个对象,然后由对象之间分工与合作;
==面向对象是以对象功能来划分问题,而不是步骤.==
面向对象的特性：封装性、继承性、多态性.

### 1.4. 面向过程与面向对象对比

|      | 面向过程                                                                    | 面向对象                                                                                                           |
| ---- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 优点 | 性能比面向对象高,适合跟硬件联系很紧密的东西,例如单片机就采用的面向过程编程. | 易维护、易复用、易扩展,由于面向对象有封装、继承、多态性的特性,可以设计出低耦合的系统,使系统 更加灵活、更加易于维护 |
| 缺点 | 不易维护、不易复用、不易扩展                                                | 性能比面向过程低                                                                                                   |

## 2. ES6中的类和对象

### 2.1. 对象

在 Javascript 中,对象是一组无序的相关属性和方法的集合,所有的事物都是对象,例如字符串、数组、数值、函数等;
**对象由属性和方法组成：**
==属性==：事物的特征,在对象中用属性来表示（常用名词）;
==方法==：事物的行为,在对象中用方法来表示（常用动词）.

### 2.2. 类 Class

在 ES6 中新增加了类的概念,可以使用`class`关键字声明一个类,之后以这个类来实例化对象.类抽象了对象的公共部分,它泛指某一大类（`class`）对象特一个,通过类实例化一个具体的对象.

### 2.3. 创建类

#### 2.3.1. 语法

```javascript
class name {
  // class body
}
let xx = new name();
```

#### 2.3.2. 实例

```javascript
 // 1. 创建类 class  创建一个 明星类
 class Star {
   // 类的共有属性放到 constructor 里面
   constructor(name, age) {
   this.name = name;
   this.age = age;
   }
 }
   // 2. 利用类创建对象 new
   var ldh = new Star('刘德华', 18);
   console.log(ldh);
```

### 2.4. 类创建添加属性和方法

```javascript
class Star {
            constructor(name) {
                this.name = name;
            }
            sing() {
                console.log("我会唱歌")
            }
            dance() {
                console.log("我会跳舞");
            }
        }

```

**注意**:

1. 通过`class`关键字创建类,类名我们还是习惯性定义首字母大写;
2. 类里面有个`constructor`函数,可以接受传递过来的参数,同时返回实例对象;
3. `constructor`函数只要`new`生成实例时,就会自动调用这个函数,如果我们不写这个函数,类也会自动生成这个函数;
4. 多个函数方法之间不需要添加逗号分隔;
5. 生成实例`new`不能省略;
6. 语法规范,创建类,类名后面不要加小括号,生成实例类名后面加小括号, 构造函数不需要加`function`.

## 3. 类的继承

### 3.1. 继承 extends

#### 3.1.1. 语法-

```javascript
class Father{ // 父类
}
class Son extends Father { //子类继承父类
}
```

#### 3.1.2. super关键字

**super关键字用于访问和调用对象父类上的函数,可以调用父类的构造函数**,也可以调用父类的普通函数.

```javascript
constructor(props) {
  super(props);  //调用父类的构造函数
}
super.say(); //调用父类的普通函数
```

#### 3.1.3. super调用父类普通函数以及继承中属性方法查找原则(就近原则）

1. 继承中,如果实例化子类输出一个方法,先看子类有没有这个方法,如果有就先执行子类的方法;
2. 继承中,如果子类里面没有,就去查找父类有么有这个方法,如果有,就执行父类的这个方法（就近原则）.

#### 3.1.4. super必须在子类this之前调用

#### 3.1.5. 几个注意点

1. 在ES6中类没有变量提升,所以必须先定义类,才能通过类实例化对象;
2. 类里面的共有的属性和方法一定要加`this`使用;
3. 类里面`this`的指向问题;
4. `constructor`里面的`this`指向**实例对象**,方法里面的`this`指向这个方法的**调用者**.

## 4. 面向对象案例

![Tab栏案例图1](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402488.png)
![Tab栏案例图2](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402560.png)
![Tab栏案例图3](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402021.png)
![Tab栏案例图4](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402080.png)

### 4.1. 案例总结

1. 时刻注意==`this`的指向问题==,类里面的共有的属性和方法一定要加`this`使用;
    - =`constructor`中的`this`指向的是`new`出来的实例对象;
    - 自定义的方法,一般也指向的`new`出来的实例对象;
    - 绑定事件之后`this`指向的就是触发事件的事件源.
2. 切换选项卡模块时,用到了**排他思想**;
3. 双击事件 ：`ondblclick`
4. `that.lis[index].click()`可以自动触发点击事件,不需要鼠标再去点击
5. `input.select()`让文本框里面的文字处于选定状态
6. `this.blur()`自动触发失去焦点事件
7. 禁止双击选中文字

    ```js
      window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
    ```

8. 逻辑判断

    ```js
    that.lis[index] && that.lis[index].click(); // 当that.lis[index]为真,才会执行that.  lis [index].click()
    ```

9. 阻止冒泡

    ```javascript
      e.stopPropagation();
    ```

10. 添加元素

    ```javascript
    that.ul.insertAdjacentHTML("beforeend", li);
    ```

11. 双击过后不允许再次双击

    ```javascript
      if (str.indexOf('input') > 0) { // !如果已经双击过,内容已经存在 input ,不做任何操作
      return;
    }
    ```

## 5. 构造函数和原型

### 5.1. 创建对象的方法(ES6之前)

==在ES6之前,我们想使用面向对象,就使用构造函数创建面向对象.==
在ES6之前,对象不是基于类创建的,而是用一种称为构造函数的特殊函数来定义对象和它们的特征;
创建对象可以通过以下三种方式:

1. 对象字面量;
2. `new Object()`;
3. 自定义构造函数.

### 5.2. 构造函数

构造函数是一种特殊的函数,主要用来初始化对象,即为对象成员变量赋初始值,它总与**new**一起使用.我们可以把对象中一些公共的属性和方法抽取出来,然后封装到这个函数里面.

### 5.3. 构造函数注意点

1. 构造函数用于创建某一类对象,其首字母要大写;
2. 构造函数要和**new**一起使用才有意义.

### 5.4. new的执行过程

1. 在内存中创建一个新的空对象;
2. 让`this`指向这个新的对象;
3. 执行构造函数里面的代码,给这个新对象添加属性和方法;
4. 返回这个新对象（所以这个构造函数里面不需要`return`）.

### 5.5. 实例成员和静态成员

#### 5.5.1. 实例成员

实例成员就是构造函数内部通过this添加的成员,**静态成员只能通过构造函数来访问.**

#### 5.5.2. 静态成员

静态成员在构造函数本身上添加的成员,**静态成员只能通过构造函数来访问.**

```javascript
    // 利用构造函数创建对象
    // 构造函数中的属性和方法我们称为成员,成员可以添加
    // 1、实例成员 就是构造函数内部通过this添加的成员 name age 就是实例成员
    function Star(name,age){
        this.name = name;
        this.age = age;
    }
    // 创建实例
    const wlj = new Star("王老菊",18);
    console.log(wlj);
    // 2、静态成员 在构造函数本身上添加的成员 sex就是静态成员
    Star.sex = "男"; // 不能通过对象来访问
    console.log(Star.sex);
```

### 5.6. 构造函数的问题

构造函数方法很好用,但是存在浪费内存的问题.每次创建实例,都会开辟单独的空间存放同一个函数,浪费内存.

### 5.7. 构造函数原型prototype

构造函数通过原型分配的函数是所有对象所共享的.
JavaScript规定,**每一个构造函数都有一个`prototype`属性**,指向另一个对象.注意这个`prototype`就是一个对象,这个对象的所有属性和方法,都会被构造函数所拥有.
**我们可以把那些不变的方法,直接定义在`prototype`对象上,这样所有对象的实例就可以共享这些方法**.

```javascript
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
Star.prototype.sing = function() {
 console.log('我会唱歌');
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
ldh.sing();//我会唱歌
zxy.sing();//我会唱歌
```

🤔总结:
**原型是什么**：一个==对象==,我们也称为`prototype`为**原型对象**;
**原型的作用是什么**：==共享方法.==

### 5.8. 对象原型__proto__

1. 对象都会有一个属性`__proto__`指向构造函数的`prototype`原型对象,之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法,就是因为对象有 **proto** 原型的存在;
2. __proto__对象原型和原型对象prototype 是等价的;
3. __proto__对象原型的意义就在于为对象的查找机制提供一个方向,或者说一条路线,但是它是一个**非标准属性**,因此**实际开发中,不可以使用这个属性**,它只是内部指向原型对象prototype.

### 5.9. constructor构造函数

1. 对象原型__proto__和构造函数prototype原型对象里面都有一个`constructor`属性,constructor 我们称为构造函数,因为它指回构造函数本身。
2. constructor主要用于记录该对象引用于哪个构造函数,它可以让原型对象重新指向原来的构造函数。
3. 一般情况下,对象的方法都在构造函数的原型对象中设置。如果有多个对象的方法,我们可以**给原型对象采取对象形式赋值**,但是这样就会覆盖构造函数原型对象原来的内容,这样修改后的原型对象constructor就不再指向当前构造函数了。此时,我们可以**在修改后的原型对象中,添加一个constructor指向原来的构造函数。**
4. 案例

  ```javascript
  function Star(uname, age) {
    this.uname = uname;
    this.age = age;
  }
  Star.prototype = { // 很多情况下,我们需要手动的利用constructor 这个属性指回原来的构造函数
  constructor: Star, // 手动设置指回原来的构造函数
    sing: function() {
      console.log('我会唱歌');
    },
    movie: function() {
      console.log('我会演电影');
    }
  }
  var zxy = new Star('张学友', 19);
  console.log(zxy)
  ```

### 5.10. 构造函数、实例、原型对象三者之间的关系

![构造函数、实例、原型对象三者之间的关系](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402247.png)

### 5.11. 原型链

![原型链](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402154.png)

### 5.12. 原型链和成员的查找机制

1. 当访问一个对象的属性（包括方法）时,首先查找这个对象自身有没有该属性;
2. 如果没有就查找它的原型（也就是__proto__指向的prototype原型对象）;
3. 如果还没有就查找原型对象的原型（Object的原型对象）;
4. 以此类推一直找到Object为止（null）。

### 5.13. 原型对象中this指向

**构造函数中的this**和**原型对象的this**,都指向我们new出来的==实例对象==。

```javascript
    function Star(name, age) {
        this.name = name;
        this.age = age;
    }
    var that;
    Star.prototype = {
        constructor: Star,
        sing: function () {
            console.log("I can sing");
            that = this;
        },
        movie: function () {
            console.log("I can dance");
        },
    }
    // 1、在构造函数中,里面this指向的是对象实例 wlj
    const wlj = new Star("王老菊", 19);
    // 2、原型对象函数里面的this,指向的是实例对象 wlj
    wlj.sing(); // I can sing
    console.log(that); // Star { name: '王老菊', age: 19 }
```

### 5.14. 利用原型对象扩展内置对象

可以通过原型对象,对原来的内置对象进行扩展自定义的方法。比如给数组增加自定义求和的功能.

```javascript
Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};
```

**注意：数组和字符串内置对象不能给原型对象覆盖操作Array.prototype = {},只能是Array.prototype.xxx = function(){}的方式。**

## 6. 继承

### 6.1. call()

- `function.call(thisArg, arg1, arg2, ...)`
- `call()`可以调用函数;
- `call()`可以修改`this`的指向,使用`call()`的时候,参数1是修改后的`this`指向,参数2,参数3..使用逗号隔开连接.

```javascript
function fn(x, y) {
    console.log(this);
    console.log(x + y);
}
var o = {
  name: 'andy'
};
fn.call(o, 1, 2);//调用了函数此时的this指向了对象o
```

### 6.2. 子构造函数继承父构造函数中的属性

```javascript
 // 1. 父构造函数
 function Father(uname, age) {
  // this 指向父构造函数的对象实例
  this.uname = uname;
  this.age = age;
 }
  // 2 .子构造函数
function Son(uname, age, score) {
  // this 指向子构造函数的对象实例
  //3.使用call方式实现子继承父的属性
  Father.call(this, uname, age);
  this.score = score;
}
var son = new Son('刘德华', 18, 100);
console.log(son); // Son { uname: '刘德华', age: 18, score: 100 }
```

🤔**总结:通过call()把父类型的this指向子类型的this,这样就可以实现子类型继承父类型的属性.**

### 6.3. 借用原型对象继承方法

```javascript
// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = function () {
    console.log(100000);
};
// 2 .子构造函数 
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    Father.call(this, uname, age);
    this.score = score;
}
// Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
Son.prototype.constructor = Son;
// 这个是子构造函数专门的方法
Son.prototype.exam = function () {
    console.log('孩子要考试');
}
var son = new Son('刘德华', 18, 100);
console.log(son);
```

![借用原型对象继承方法代码结果](https://raw.githubusercontent.com/hawkWang2021/drawingBedWph/main/img/202205191402344.png)

### 6.4. ES6 类的本质

#### 6.4.1. ES6之前通过构造函数+原型,实现面向对象编程

1. 构造函数有原型对象prototype;
2. 构造函数原型对象prototype里面有constructor指向构造函数本身;
3. 构造函数可以通过原型对象添加方法;
4. 构造函数创建的实例对象有__proto__原型指向构造函数的原型对象.

#### 6.4.2. ES6通过类,实现面向对象编程

==类的本质其实就是一个函数,我们也可以简单的认为,类就是构造函数的另一种写法.==

1. class本质还是function;
2. 类的所有方法都定义在类的prototype属性上;
3. 类创建的实例,里面也有__proto__指向类的prototype原型对象;
4. 所以ES6的类它的绝大部分功能,ES5都可以做到,新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已;
5. 所以ES6的类其实就是语法糖;
6. **语法糖**：语法糖就是一种便捷写法。简单理解,有两种方法可以实现同样的功能,但是一种写法更加清晰、方便,那么这个方法就是语法糖.

## 7. ES5新增方法

### 7.1. 数组方法

迭代（遍历）方法：forEach()、map()、filter()、some()、every()。

#### 7.1.1. forEach遍历数组

```js
  arr.forEach(function(value, index, array) {
       //参数一是:数组元素
       //参数二是:数组元素的索引
       //参数三是:当前的数组
  })
  //相当于数组遍历的 for循环 没有返回值
```

#### 7.1.2. filter()过滤数组

```js
  var arr = [12, 66, 4, 88, 3, 7];
  var newArr = arr.filter(function(value, index,array) {
    //参数一是:数组元素
     //参数二是:数组元素的索引
     //参数三是:当前的数组
     return value >= 20;
  });
  console.log(newArr);//[66,88] //返回值是一个新数组
```

`filter()`方法创建一个新的数组,新数组中的元素是通过检查指定数组中符合条件的所有元素,主要用于筛选数组,
注意它直接返回一个**新数组**.

#### 7.1.3. some()查找数组中是否有满足条件的元素

```js
some 查找数组中是否有满足条件的元素 
  var arr = [10, 30, 4];
  var flag = arr.some(function(value,index,array) {
    //参数一是:数组元素
     //参数二是:数组元素的索引
     //参数三是:当前的数组
    return value < 3;
  });
console.log(flag);//false返回值是布尔值,只要查找到满足条件的一个元素就立马终止循环
```

`some()`方法用于检测数组中的元素是否满足指定条件。
注意：它返回值是布尔值,如果查找到这个元素,就返回`true`,如果查找不到就返回`false`;如果**查询数组中唯一的元素**,**some效率更高**;如果找到第一个满足条件的元素,则终止循环,不再继续查找.

🚀**使用`array.includes(item)`重构`array.indexOf(item) !== -1`**

### 7.2. 字符串方法

#### 7.2.1. trim()去除字符串两侧空格

```javascript
var str = '   hello   '
console.log(str.trim())  //hello 去除两端空格
var str1 = '   he l l o   '
console.log(str1.trim())  //he l l o  去除两端空格
```

### 7.3. 对象方法

#### 7.3.1. Object.keys()获取对象属性名

`Object.keys(对象)`获取到当前对象中的属性名,返回值是一个数组。

```javascript
var obj = {
    id: 1,
    pname: '小米',
    price: 1999,
    num: 2000
};
var result = Object.keys(obj)
console.log(result)//[id,pname,price,num]
```

#### 7.3.2. Object.defineProperty()定义对象中新属性或修改原有的属性

```javascript
Object.defineProperty(obj,prop,descriptor);
```

- 参数说明：
`obj`:必需。目标对象;
`prop`：必需。需定义或修改的属性的名字;
`descriptor`:必需。目标属性所拥有的特性;
- 第三个参数进一步说明：以对象形式{}书写
`value`：设置属性的值,默认为`undefined`;
`writeable`:值是否可以重写。`true|false` ,默认`false`;
`enumerable`:目标属性是否可以被枚举。`true|false`默认为`false`;
`configurable`:目标属性是否可以被删除或是否可以再次修改特性 `true|false`默认为`false`.

## 8. 函数的定义和调用

### 8.1. 函数的定义方式

1. 函数声明方式`function`关键字(命名函数)

    ```js
    function sum(num1, num2){
      return num1 + num2;
    } // 🤔可以看到这里函数定义最后没有加分号
    ```

2. 函数表达式(匿名函数)

    ```js
    var sum = function(num1, num){
      return num1 + num2;
    }
    ```

3. 使用`Function 构造函数

    ```js
    let sum = new Function("num1", "num2", "return num1 + num2");
    // 不推荐使用,不过这种方法很好地诠释了一种思想:把函数当作对象,把函数名当作指针.
    ```

4. 箭头函数

    ```js
    let sum = (num1, num2) => {
      return num1 + num2;
    }
    ```

### 8.2. 函数的调用

1. 普通函数

    ```js
    function fn(){
      console.log('helloWorld');
    }
    ```

2. 对象的方法

    ```js
    var obj = {
      sayHi: function() {
        console.log('helloWorld');
      }
    }
    ```

3. 构造函数

   ```js
   function Obj(){};
   new Obj();
   ```

4. 绑定事件函数

    ```js
    btn.onclick = function() {};   // 点击了按钮就可以调用这个函数
    ```

5. 定时器函数

    ```js
    setInterval(function() {}, 1000);  //这个函数是定时器自动1秒钟调用一次
    ```

6. 立即执行函数(自调用函数)

    ```js
    (function() {
      console.log('helloWorld');
    })();
    ```

## 9. this浅析

👉[this的详细资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

### 9.1. 函数内部的this指向

这些 this 的指向,是当我们调用函数的时候确定的.调用方式的不同决定了 this 的指向不同.一般指向我们的调用者.
| 调用方式     | this指向                                  |
|--------------|-------------------------------------------|
| 普通函数调用 | Window                                    |
| 构造函数调用 | 实例对象,原型对象里面的方法也指向实例对象 |
| 对象方法调用 | 该方法所属的对象                          |
| 事件绑定方法 | 绑定事件对象                              |
| 定时器函数   | Window                                    |
| 立即执行函数 | Window                                    |

### 9.2. 改变函数内部 this 指向

#### 9.2.1. call方法

`call()`方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的`this`指向;

```js
function.call(thisArg, arg1, arg2, ...)
```

主要应用场景:实现继承.

```js
// 使用 call 方法调用父构造函数
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

```

🚀该方法的语法和作用与`apply()`方法类似，只有一个区别，就是 **`call()`方法接受的是一个参数列表**，而 **`apply()`方法接受的是一个包含多个参数的数组**。

#### 9.2.2. apply方法

`apply()`方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的`this`指向。

```js
function.apply(thisArg, [argsArray])
```

主要应用场景:跟数组有关的操作.

```js
/* 找出数组中最大/小的数字 */
var numbers = [5, 6, 2, 3, 7];

/* 使用Math.min/Math.max以及apply 函数时的代码 */
var max = Math.max.apply(null, numbers); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* 对比：简单循环算法 */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}
```

#### 9.2.3. bind方法

`bind()`方法创建一个新的函数，在`bind()`被调用时，这个新函数的`this`被指定为`bind()`的第一个参数，而其余参数将作为**新函数的参数**，供调用时使用。

```js
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

主要应用场景:创建绑定函数.

```js
this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

## 10. 严格模式

👉[严格模式的详细资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

### 10.1. 什么是严格模式？

Javascript除了提供正常模式外，还提供了严格模式（`strict mode`）。ES5的严格模式是采用具有限制性Javascript变体的一种方式。即在严格条件下运行JS代码;
严格模式在IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略;
严格模式对正常的Javascript语义做了一些更改：

1. 消除了Javascript语法的一些不合理、不严谨之处，减少了一些怪异行为;
2. 消除代码运行的一些不安全之处，保证代码运行的安全;
3. 提高编译器效率，增加运行速度;
4. 禁用了在ECMAScript的未来版本中可能会定义的一些语法，为未来新版本的Javascript做好铺垫。比如一些保留字如：`class`、`enum`、`export`、`extends`、`import`、`super`不能做变量名;

### 10.2. 开启严格模式

严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为脚本开启严格模式和为函数开启严格模式两种情况。

#### 10.2.1. 为脚本开启严格模式

有的script基于是严格模式，有的script脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中，这样独立创建一个作用域而不影响其他script脚本;

```js
  (function(){
      'use strict';
      var num = 0;
      function fn(){}
})();
```

#### 10.2.2. 为函数开启严格模式

要给某个函数开启严格模式，需要把`“use strict”;`（或`‘use strict’;`）声明放在函数体所有语句之前;

### 10.3. 严格模式中的变化

严格模式对Javascript的语法和行为，都做了一些改变;

#### 10.3.1. 变量规定

1. 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var命令声明，然后再使用;
2. 我们不能随意删除已经声明好的变量;

#### 10.3.2. 严格模式下this指向问题

1. 以前在全局作用域函数中的`this`指向`window对象`;
2. 严格模式下全局作用域中函数中的`this`是`undefined`;
3. 以前构造函数时不加`new`也可以调用，当普通函数，`this`指向全局对象;
4. 严格模式下，如果构造函数不加`new`调用，`this`会报错;
5. `new`实例化的构造函数指向创建的对象实例;
6. 严格模式下定时器`this`还是指向`window`;
7. ==事件、对象还是指向调用者==;

#### 10.3.3. 函数变化

1. 严格模式下函数里面的参数不允许有重名;
2. 函数必须声明在顶层。新版本的Javascript会引入“块级作用域”（ES6中已引入）。为了与新版本接轨，不允许在非函数的代码块内声明函数。

## 11. 高阶函数

**高阶函数**是对其他函数进行操作的函数，它**接收函数作为参数**或**将函数作为返回值输出**。
函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。最典型的就是作为==回调函数==。

## 12. 闭包浅析

👉[闭包的详细资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

### 12.1. 闭包概述

一个函数和对其周围状态（**lexical environment**,**词法环境**）的引用捆绑在一起（或者说函数被引用包围）,这样的组合就是**闭包**（**closure**）。也就是说,闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中,每当创建一个函数,闭包就会在函数创建的同时被创建出来。**词法**（**lexical**）一词指的是，**词法作用域根据源代码中声明变量的位置来确定该变量在何处可用**.**嵌套函数可访问声明于它们外部作用域的变量**。

### 12.2. 变量作用域

变量根据作用域的不同分为两种：全局变量和局部变量。

1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

### 12.3. 闭包是什么

```js
function fn1(){ // fn1形成了闭包
  var num = 10;
  function fn2(){
    console.log(num);
  }
  fn2();
}
fn1();
```

JavaScript中的函数会形成了**闭包**。 **闭包**是由函数以及声明该函数的**词法环境**组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。

### 12.4. 闭包的作用

作用：延伸变量的作用范围。

### 12.5. 用闭包模拟私有方法

```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

上述案例中三个公共函数是共享同一个环境的闭包,该共享环境中包含两个私有项：名为`privateCounter`的变量和名为`changeBy`的函数。显然这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。

### 12.6. 在循环中创建闭包会遇到的一个常见错误😵

```HTML
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
```

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

运行这段代码可以发现,无论把焦点放在哪个`input`中,显示的都是关于age的信息.原因是由于==循环在事件触发之前早已执行完毕==，变量对象`item`（被三个闭包所共享）已经指向了`helpText`的最后一项。

#### 12.6.1. 解决方法一:使用更多的闭包

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}
setupHelp();
```

该方法可以让所有的回调不再共享同一个环境,`makeHelpCallback`函数为每一个回调创建一个新的**词法环境**。在这些环境中，`help`指向`helpText`数组中对应的字符串。

#### 12.6.2. 解决方法二:使用立即执行函数

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // 马上把当前循环项的item与事件回调相关联起来🤔
  }
}

setupHelp();
```

#### 12.6.3. 解决方法三:使用ES6变量`let`

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

这个例子使用`let`而不是`var`，因此**每个闭包都绑定了块作用域的变量**，这意味着不再需要额外的闭包。

### 12.7. 性能考量

1. 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，可能导致内存泄露。解决方法是，在退出函数之前，将不需要的局部变量赋值为`null`。
2. 闭包会在父函数外部改变父函数内部变量的值。如果你把父函数当作对象使用，把闭包当作它的公用方法，把内部变量当作它的私有属性，这时一定要注意，不要随便改变父函数内部变量的值。
3. ==当定义一个函数时，它实际上保存一个作用域链==。当调用这个函数时，它创建一个新的对象来存储它的局部变量，并将这个对象添加至保存的那个作用域链上，同时创建一个新的更长的表示函数调用作用域的“链”。对于嵌套函数来讲，事情变得更加有趣，每次调用外部函数时，内部函数又会重新定义一遍。因为每次调用外部函数的时候，作用域链都是不同的。内部函数在每次定义的时候都有微妙的差别——==在每次调用外部函数时，内部函数的代码都是相同的，但是关联这段代码的作用域链不相同，用闭包概念来说，也就是产生了新的闭包==.[🚀](https://juejin.cn/post/7097141521102667813)

## 13. 递归

### 13.1. 递归概述

**递归**：如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。简单理解:**函数内部自己调用自己**, 这个函数就是递归函数.
**注意**：递归函数的作用和循环效果一样，由于递归很容易发生"栈溢出"错误（`stack overflow`），所以必须要加**退出条件**`return`。

### 13.2. 案例(利用递归遍历数据)

```js
// 我们想要做输入id号,就可以返回的数据对象
var data = [{
    id: 1,
    name: '家电',
    goods: [{
        id: 11,
        gname: '冰箱',
        goods: [{
            id: 111,
            gname: '海尔'
        }, {
            id: 112,
            gname: '美的'
        },

        ]

    }, {
        id: 12,
        gname: '洗衣机'
    }]
}, {
    id: 2,
    name: '服饰'
}];
//1.利用 forEach 去遍历里面的每一个对象
function getID(json, id) {
    var o = {};
    json.forEach(function (item) {
        // console.log(item); // 2个数组元素
        if (item.id == id) {
            // console.log(item);
            o = item;
            return o;
            // 2. 我们想要得里层的数据 11 12 可以利用递归函数
            // 里面应该有goods这个数组并且数组的长度不为 0
        } else if (item.goods && item.goods.length > 0) {
            o = getID(item.goods, id);
        }
    });
    return o;
}
```

### 13.3. 浅拷贝

浅拷贝只是拷贝一层,更深层次对象级别的只拷贝引用.

```js
var obj = {
            id: 1,
            name: 'andy',
            msg: {
                age: 18
            }
        };
        // 方法一:forin循环浅拷贝
        var obj_new = {};
        for (const key in obj) {
            obj_new[key] = obj[key];
        }
        console.log(obj_new);
        obj_new.msg.age = 20;
        console.log(obj);
        // 方法二:ES6新增assign方法浅拷贝
        var obj_new = {};
        Object.assign(obj_new, obj);
        console.log(obj_new);
        obj_new.msg.age = 20;
        console.log(obj);
```

### 13.4. 深拷贝

针对深拷贝，需要使用其他办法，因为`Object.assign()`拷贝的是（可枚举）属性值。假如源值是一个对象的引用，它仅仅会复制其引用值。

```js
        // 深拷贝拷贝多层, 每一级别的数据都会拷贝.
        var obj = {
            id: 1,
            name: 'andy',
            msg: {
                age: 18
            },
            color: ['pink', 'red']
        };
        let o = {};
        // 方法一:
        function deepCopy(newobj, oldobj) { // 深拷贝简单实现,但是没有拷贝函数
            for (const key in oldobj) {
                let item = oldobj[key];
                if (item instanceof Array) {
                    newobj[key] = [];
                    deepCopy(newobj[key], item)
                } else if (item instanceof Object) {
                    newobj[key] = [];
                    deepCopy(newobj[key], item)
                } else {
                    newobj[key] = item;
                }
            }
        }
        let obj_new = {};
        deepCopy(obj_new, obj);
        console.log(obj_new); //
        obj_new.msg.age = 20;
        console.log('obj_new: ', obj_new); //
        console.log('obj: ', obj); //
        //方法二:
        let obj1 = JSON.parse(JSON.stringify(obj)); // 更为便捷的深拷贝
        obj1.msg.age = 22;
        console.log('obj1: ', obj1); //
        console.log('obj: ', obj); //
```

## 14. 正则表达式

👉[正则表达式的详细资料](https://www.runoob.com/regexp/regexp-tutorial.html)

### 14.1. 案例(改变输入字符串的顺序)
<!--MARK:这个例子需要再看看 -->
```js
// 下面这个姓名字符串包含了多个空格和制表符，
// 且在姓和名之间可能有多个空格和制表符。
var names = "Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// 准备两个模式的正则表达式放进数组里。
// 分割该字符串放进数组里。

// 匹配模式：匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
var pattern = /\s*;\s*/;

// 把通过上述匹配模式分割的字符串放进一个叫做nameList的数组里面。
var nameList = names.split(pattern);

// 新建一个匹配模式：匹配一个或多个连续的不可见字符及其前后紧接着由
// 一个或多个连续的基本拉丁字母表中的字母、数字和下划线组成的字符串
// 用一对圆括号来捕获该模式中的一部分匹配结果。
// 捕获的结果稍后会用到。
pattern = /(\w+)\s+(\w+)/;

// 新建一个数组 bySurnameList 用来临时存放正在处理的名字。
var bySurnameList = [];

// 输出 nameList 的元素并且把 nameList 里的名字
// 用逗号接空格的模式把姓和名分割开来然后存放进数组 bySurnameList 中。
//
// 下面的这个替换方法把 nameList 里的元素用 $2, $1 的模式
// （第二个捕获的匹配结果紧接着一个逗号一个空格然后紧接着第一个捕获的匹配结果）替换了
// 变量 $1 和变量 $2 是上面所捕获的匹配结果。

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
    output.push(nameList[i]);
    bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// 输出新的数组
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++) {
    output.push(bySurnameList[i]);
}

// 根据姓来排序，然后输出排序后的数组。
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++) {
    output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));

```

## 15. ES6概述

ES6实际上是一个泛指，泛指ES2015及后续的版本。

## 16. let关键字

ES6中新增的用于声明变量的关键字。

1. 使用`let`关键字声明的变量具有块级作用域，防止循环变量变成全局变量；
2. 不存在变量提升；
3. ==暂时性死区==:利用let声明的变量会绑定在这个块级作用域，不会受外界的影响.

```js
var num =10;
if(true) {
 console.log(num);  // ❌num is undefined
 let num = 20;
}
```

注意：在一个大括号中，使用`let`关键字声明的变量才具有块级作用域，`var`关键字不具备这个特点的；

## 17. const关键字

作用：声明常量，常量就是值（内存地址）不能变化的量；

1. 具有块级作用域；
2. 声明常量时必须赋值；
3. 常量赋值后，值不能修改；

## 18. let const var 的区别

|      var     |       let      |      const     |
|:------------:|:--------------:|:--------------:|
| 函数级作用域 |   块级作用域   |   块级作用域   |
|   变量提升   | 不存在变量提升 | 不存在变量提升 |
|    值可改    |     值可改     |    值不可改    |

## 19. 解构赋值

### 19.1. 数组解构

```js
  let ary = [1, 2, 3]; // 数组解构允许我们按照一一对应的关系从数组中提取值 然后将值赋值给变量
  let [a, b, c, d, e] = ary;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
```

### 19.2. 对象解构

```js
  let person = {
    name: 'li',
    age: 30,
    sex: '男'
  }
  let {
    name,
    age,
    sex,
    abc
  } = person;
  console.log('name :>> ', name); // li
  console.log('age :>> ', age); // 30
  console.log('sex :>> ', sex); // 男
  console.log('abc :>> ', abc); // undefined
  let {
    uname: myName
  } = person;
  console.log(myName); // li
  console.log(uname); // 😅uname is not defined
```

**总结**:

1. 解构赋值就是把数据结构分解，然后给变量进行赋值;
2. 如果结构不成功，变量跟数值个数不匹配的时候，变量的值为`undefine`;
3. 数组解构用中括号包裹，多个变量用逗号隔开，对象解构用花括号包裹，多个变量用逗号隔开;
4. 利用解构赋值能够让我们方便的去取对象中的属性跟方法.

## 20. 箭头函数

### 20.1. 基本语法

```js
() => {} // ()：代表是函数； =>：必须要的符号，指向哪一个代码块；{}：函数体
const fn = () => {}; //代表把一个函数赋值给fn
```

🎈**tips**:

1. 函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号；
2. 如果形参只有一个，可以省略小括号.

### 20.2. 箭头函数的this指向

箭头函数不绑定this关键字，**箭头函数中的this，指向的是函数定义位置的上下文this**.

```js
const obj = { name: '张三'};
  function fn () {
      console.log(this);//this 指向 是obj对象
      return () => {
        console.log(this);//this 指向 的是箭头函数定义的位置，那么这个箭头函数定义在fn里面，而这个fn指向是的obj对象，所以这个this也指向是obj对象
      }
  }
 const resFn = fn.call(obj);
 resFn();

```

🚀总结:

1. 箭头函数中不绑定`this`，箭头函数中的`this`指向是它所定义的位置，可以简单理解成，**定义箭头函数中的作用域的`this`指向谁，它就指向谁.**
2. 箭头函数的优点在于解决了`this`执行环境所造成的一些问题。比如：解决了匿名函数`this`指向的问题（**匿名函数的执行环境具有全局性**），包括`setTimeout`和`setInterval`中使用`this`所造成的问题

## 21. 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组，不定参数定义方式，这种方式很方便的去声明不知道参数情况下的一个函数.

### 21.1. 剩余参数与解构配合使用

```js
let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1, ...s2] = students; // 剩余参数与解构配合使用
console.log(s1);  // 'wangwu'
console.log(s2);  // ['zhangsan', 'lisi']
```

## 22. ES6的内置对象扩展

### 22.1. Array的扩展方法

#### 22.1.1. 扩展运算符(展开语法)

1. ==扩展运算符可以应用于合并数组==

    ```javascript
    // 方法一
    let ary1 = [1, 2, 3];
    let ary2 = [3, 4, 5];
    let ary3 = [...ary1, ...ary2];
    // 方法二
    ary1.push(...ary2);
    ```

2. ==扩展运算符可以将类数组或可遍历对象转换为真正的数组==

    ```javascript
    let oDivs = document.getElementsByTagName('div');
    oDivs = [...oDivs];
    ```

#### 22.1.2. 构造函数方法 Array.from()

1. 将类数组或可遍历对象转换为真正的数组；
2. 方法还接受第二个参数，作用类似于数组的`map`方法，用来对每个元素进行处理，将处理后的值放入返回的数组.

```javascript
  let arrayLike = {
    "0": 1,
    "1": 2,
    "length": 2
  }
  let newAry = Array.from(arrayLike, item => item *2)//[2,4]
```

#### 22.1.3. 实例方法 find()

用于找出**第一个符合条件**的数组成员，如果没有找到返回`undefined`.

```javascript
let ary = [{
    id: 1,
    name: '张三'
}, {
    id: 2,
    name: '李四'
}];
let target = ary.find((item, index) => item.id == 2);//找数组里面符合条件的值，当数组中元素id等于2的查找出来，注意，只会匹配第一个

```

#### 22.1.4. 实例方法 findIndex()

用于找出**第一个符合条件**的数组成员的**位置(索引)**，如果没有找到就返回-1.

```javascript
let ary = [1, 5, 10, 15];
let index = ary.findIndex((value, index) => value > 9); 
console.log(index); // 2
```

#### 22.1.5. 实例方法 includes()

判断某个数组是否包含给定的值，**返回布尔值**.

```javascript
[1, 2, 3].includes(2) // true
[1, 2, 3].includes(4) // false

```

## 23. String 的扩展方法

### 23.1. 模板字符串

ES6新增的创建字符串的方式，使用反引号定义.

💪Tips:

1. 模板字符串中可以**解析变量**;
2. 模板字符串中可以**换行**;
3. 模板字符串中可以**调用函数**.

```js
// 模板字符串可以解析变量
let name = "zhangsan";
console.log(`我的名字是${name}`); // zhangsan

// 模板字符串可以调用函数
const fn = ()=>{
    return "我是fn函数"
};
console.log(`我要调用 ${fn()}`);  // 我要调用 我是fn函数

// 模板字符串可以换行
let html = `
1
2
`;
console.log(html);
```

### 23.2. 实例方法：startsWith() 和 endsWith()

- `startsWith()`表示参数字符串是否在原字符串的头部，返回布尔值;
- `endsWith()`表示参数字符串是否在原字符串的尾部，返回布尔值;

```javascript
let str = 'Hello world!';
str.startsWith('Hello') // true
str.endsWith('!')       // true
```

### 23.3. 实例方法：repeat()

`repeat()`方法表示将原字符串重复n次，返回一个新字符串

```javascript
'x'.repeat(3)      // "xxx"
'hello'.repeat(2)  // "hellohello"
```

## 24. Set 数据结构（★★★★★）

ES6 提供了新的数据结构`Set`。它类似于数组，但是成员的值都是**唯一**的，没有重复的值。`Set`本身是一个构造函数，用来生成`Set`数据结构

```javascript
const s = new Set();
```

`Set`函数可以接受一个数组作为参数，用来初始化。

```javascript
const set = new Set([1, 2, 3, 4, 4]);//{1, 2, 3, 4}

```

### 24.1. 实例方法

- `add(value)`：添加某个值，返回`Set`结构本身
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功
- `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员
- `clear()`：清除所有成员，没有返回值

```javascript
 const s = new Set();
 s.add(1).add(2).add(3); // 向 set 结构中添加值
 s.delete(2)             // 删除 set 结构中的2值
 s.has(1)                // 表示 set 结构中是否有1这个值 返回布尔值
 s.clear()               // 清除 set 结构中的所有值
 //注意：删除的是元素的值，不是代表的索引
```

### 24.2. 遍历

`Set`结构的实例与数组一样，也拥有`forEach`方法，用于对每个成员执行某种操作，没有返回值。

```javascript
s.forEach(value => console.log(value))
```
