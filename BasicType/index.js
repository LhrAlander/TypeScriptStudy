/**
 * 支持的数据类型：
 * 1. boolean
 * 2. number
 * 3. string
 * 4. []
 * 5. tupe
 * 6. enum
 * 7. any
 * 8. void
 * 9. null undefined
 * 10. never
 * 11. assert
 */
/**
 * boolean: true false
 */
var isDone = true;
/**
 * number: 二进制、八进制、十进制、十六进制
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/**
 * string
 */
var myName = 'Gene';
var introduction = "Hello " + myName;
console.log('-------------String-----------');
console.log(myName, introduction);
/**
 * 数组
 */
var list = [1, 2, 3];
var _list = [1, 2, 3];
var ol = [];
ol.push(1);
console.log('-------------Array-----------');
console.log(list, ol);
/**
 * Tuple: 已知元素数量和类型的数组
 */
var x;
x = ['Alander', 22];
x[3] = 'world';
console.log('-------------Tuple-----------');
console.log(x[3]);
/**
 * enum
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Pink"] = 4] = "Pink";
    Color[Color["Grey"] = 10] = "Grey";
})(Color || (Color = {}));
console.log('-------------Enum-----------');
console.log(Color);
