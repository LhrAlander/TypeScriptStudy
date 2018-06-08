class Greeter {
	greeting: string
	constructor(message: string) {
		this.greeting = message
	}
	greet(): string {
		return `Hello, ${this.greeting}`
	}
}

let greeter = new Greeter('Peter')

/**
 * 继承：当子类继承父类时，构造函数中一定要先调用 super()，以此执行父类构造函数 
 */
class Animal {
	private name: string
	move(distanceInMeters: number = 0): void {
		console.log(`Animal moved ${distanceInMeters}m.`)
	}
	constructor(theName: string) {
		this.name = theName
	}
}

class Dog extends Animal {
	bark(): void {
		console.log('Woof! Woof!')
	}
	constructor(name: string) {
		super(name)
	}
	move(distanceInMeters: number = 10) {
		console.log('Wang! Wang!')
		super.move(distanceInMeters)
	}
}

let dog = new Dog('putty')
let animal = new Animal('Tom')
dog.move()
dog.bark()
animal = dog
animal.move()

/**
 * protected
 */

 class Person {
	 protected name: string
	 constructor(theName: string) {
		 this.name = theName
	 }
 }

 class Employee extends Person {
	 private department: string
	 constructor(name: string, theDepartment: string) {
		 super(name)
		 this.department = theDepartment
	 }
	 public getElevatorPitch() {
		 return `Hello my name is ${this.name} and  I work in ${this.department}`
	 }
 }

 let howard = new Employee('Peter', 'sale')
 console.log(howard.getElevatorPitch())

 /**
	* 参数属性：将属性的声明和赋值放在一起
  */
 class dAnimal {
	 constructor(private name: string) {}
 }
