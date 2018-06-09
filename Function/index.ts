function add(x: number, y: number): number {
	return x + y
}

let myAdd = function(x: number, y: number): number {
	return x + y
}

/**
 * 完整地函数类型
 */
let _add: (x: number, y: number) => number = function(x: number, y: number): number {
	return x + y
}

/**
 * 可选参数： 可选参数必须跟在必须参数后面
 * 默认参数： 默认参数可以在必须参数前面，但是只能通过传入undefined来获取默认值
 */
function buildName(firstName = "Will", lastName: string) {
	return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"

/**
 * 剩余参数：不确定有多少参数，就将参数都存储在一个数组变量里
 */
function _buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = _buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

