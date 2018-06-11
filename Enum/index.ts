namespace eenum {
	enum Response {
		No = 0,
		Yes = 1
	}
	function respond(recipient: string, message: Response): void {

	}
	respond('hello', Response.No)
	/**
 * 在运行时 枚举 是真正的对象
 */
	const enum E {
		x, y, z
	}
	function f (obj: E) {
		// return obj.x
	}
	f(E.x)  // 不会报错，因为E这是处于运行时，是个真正的对象

	
}

