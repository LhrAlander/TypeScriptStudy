function identity<T>(arg: T): T {
	return arg
}
// 泛型不具备一些类型的方法，例如 arg 并不能使用 arg.length 方法，因为不知道 arg 的类型
function loggingIdentity<T>(arg: Array<T>): Array<T> {
	console.log(arg.length)
	return arg
}

let myIdentity: { <T>(arg: T): T } = identity


interface GenericIdentityFn<T> {
	(arg: T): T
}

let nextIdentity: GenericIdentityFn<number> = identity

let result = nextIdentity(123)

/**
 * 可以定义一个接口描述泛型的约束条件
 */
interface Lengthwise {
	length: number
}

function extendLength<T extends Lengthwise>(arg: T): T {
	console.log(arg.length)
	delete arg.length
	return arg
}

let res = extendLength({ length: 12, width: 123 })
console.log(res)
