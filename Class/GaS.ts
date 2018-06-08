let passcode: string = 'secret passcode'
class Validator {
	constructor(private _rule: string) {}
	get rule(): string {
		return this._rule
	}
	set rule(rule: string) {
		this._rule = rule
	}
}

let v = new Validator(passcode)
console.log(v.rule)
v.rule = '123'
console.log(v.rule)