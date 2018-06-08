/**
 * 接口不只检擦必要的属性是否存在
 */
interface LabelledValue {
	label: string
}

function printLabel(labelObj: LabelledValue) {
	console.log(labelObj.label)
}

let myObj = {
	size: 10,
	label: 'Size 10 Object'
}

printLabel(myObj)

/**
 * 可定义可选属性
 */
interface SquareConfig {
	color?: string,
	width?: number
}

function createSquare(config: SquareConfig): { color: string, area: number } {
	let newSquare = { color: 'black', area: 12 }
	if (config.color) newSquare.color = config.color
	if (config.width) newSquare.area = config.width * config.width
	return newSquare
}

let mySquare = createSquare({ color: 'yellow' })
console.log('----------可选属性-----------')
console.log(mySquare)

/**
 * 可定义只读属性
 */
interface Point {
	readonly x: number,
	readonly y: number,
	readonly a: ReadonlyArray<number>
}

let p1: Point = {
	x: 10,
	y: 12,
	a: [1, 2, 3]
}
console.log('----------只读属性-----------')
console.log(p1)

/**
 * 额外属性检查：当传入的参数包含接口中没有的参数时，报错
 * 解决方法为断言或者字符串索引签名
 */
// mySquare = createSquare({colour: 'red', width: 10}) // 此处报错，因为colour不在squareConfig接口中
// 断言
mySquare = createSquare({ width: 10, opacity: 0.5 } as SquareConfig)
// 索引签名
interface SquareConfig {
	color?: string,
	width?: number,
	[propName: string]: any
}

/**
 * 函数类型：让接口描述函数类型
 */
interface searchFunc {
	(source: string, subString: string): boolean
}
let mySearch: searchFunc
mySearch = function (source: string, subString: string): boolean {
	return source.search(subString) > -1
}

/**
 * 索引类型
 */
interface NumberDictionary {
	[index: string]: number,
	length: number
}
let num: NumberDictionary = {
	age: 12,
	length: 12
}

/**
 * 类类型
 */
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date): boolean
}

class Clock implements ClockInterface {
	currentTime: Date;
	constructor(h: number, m: number) { };
	setTime(d: Date) {
		return true
	}
}

/**
 * 接口继承
 */
interface Shape {
	color: string;
}

interface PenStroke {
	penWidth: number;
}

interface Square extends Shape, PenStroke {
	sideLength: number;
}

let square = <Square>{}
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * 混合类型
 */

interface Counter {
	(start: number): string,
	interval: number
}

function createCounter(): Counter {
	let count = <Counter> function(start: number) {}
	count.interval = 123
	return count
}

/**
 * 接口继承类
 */

class Control {
	private state: any;
}

interface SelectableControl extends Control {
	select(): void;
}

class Button extends Control implements SelectableControl {
	select() { }
}

class TextBox extends Control {
	select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
// 	select() { }
// }

// class Location {

// }