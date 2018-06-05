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
 let isDone: boolean = true;

/**
 * number: 二进制、八进制、十进制、十六进制
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/**
 * string
 */
let myName: string = 'Gene'
let introduction: string = `Hello ${myName}`
console.log('-------------String-----------')
console.log(myName, introduction)
/**
 * 数组
 */
let list: number[] = [1, 2, 3]
let _list: Array<number> = [1, 2, 3]
let ol: number[] = []
ol.push(1)
console.log('-------------Array-----------')
console.log(list, ol)

/**
 * Tuple: 已知元素数量和类型的数组
 */
let x: [string, number]
x = ['Alander', 22]
x[3] = 'world'
console.log('-------------Tuple-----------')
console.log(x[3])

/**
 * enum
 */
enum Color { Red, Green, Blue = 3, Pink, Grey = 10 }
console.log('-------------Enum-----------')
console.log(Color)

/**
 * any
 */
let notSure: any = 4
notSure = true
notSure = "I'm String"
let nList: any[] = [1, true, notSure]

/**
 * void: 一般用于函数的返回类型，当用于变量时只能赋值为 null 和 undefined
 */
function warnUser(): void {
	alert("This is my warning message")
}
let unusable: void = undefined

/**
 * 断言：强制类型转换
 */
let someValue: any = "this is a string"
let strLength: number = (someValue as string).length

