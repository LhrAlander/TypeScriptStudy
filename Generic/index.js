function identity(arg) {
    return arg;
}
// 泛型不具备一些类型的方法，例如 arg 并不能使用 arg.length 方法，因为不知道 arg 的类型
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = identity;
var nextIdentity = identity;
var result = nextIdentity(123);
function extendLength(arg) {
    console.log(arg.length);
    delete arg.length;
    return arg;
}
var res = extendLength({ length: 12, width: 123 });
console.log(res);
