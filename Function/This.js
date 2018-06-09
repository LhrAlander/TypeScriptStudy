var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.changeInfo = function (newInfo) {
            _this.info = newInfo;
        };
    }
    return Handler;
}());
var h1 = new Handler();
h1.changeInfo('hello');
var h2 = new Handler();
h2.changeInfo('world');
console.log(h1.info, h2.info);
