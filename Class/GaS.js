var passcode = 'secret passcode';
var Validator = /** @class */ (function () {
    function Validator(_rule) {
        this._rule = _rule;
    }
    Object.defineProperty(Validator.prototype, "rule", {
        get: function () {
            return this._rule;
        },
        set: function (rule) {
            this._rule = rule;
        },
        enumerable: true,
        configurable: true
    });
    return Validator;
}());
var v = new Validator(passcode);
console.log(v.rule);
v.rule = '123';
console.log(v.rule);
