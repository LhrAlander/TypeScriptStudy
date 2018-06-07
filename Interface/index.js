function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'black', area: 12 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.area = config.width * config.width;
    return newSquare;
}
var mySquare = createSquare({ color: 'yellow' });
console.log('----------可选属性-----------');
console.log(mySquare);
var p1 = {
    x: 10,
    y: 12,
    a: [1, 2, 3]
};
p1.a.push(1);
console.log('----------只读属性-----------');
console.log(p1);
