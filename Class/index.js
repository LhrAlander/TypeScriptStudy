var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('Peter');
/**
 * 继承：当子类继承父类时，构造函数中一定要先调用 super()，以此执行父类构造函数
 */
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    Dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log('Wang! Wang!');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Dog;
}(Animal));
var dog = new Dog('putty');
var animal = new Animal('Tom');
dog.move();
dog.bark();
animal = dog;
animal.move();
/**
 * protected
 */
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, theDepartment) {
        var _this = _super.call(this, name) || this;
        _this.department = theDepartment;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello my name is " + this.name + " and  I work in " + this.department;
    };
    return Employee;
}(Person));
var howard = new Employee('Peter', 'sale');
console.log(howard.getElevatorPitch());
