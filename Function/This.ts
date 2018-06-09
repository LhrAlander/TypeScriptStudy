
interface Card {
	suit: string,
	card: number
}

interface Deck {
	suits: string[],
	cards: number[],
	createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

class Handler {
	info: string
	changeInfo = (newInfo: string) => {
		this.info = newInfo
	}
}

let h1 = new Handler()
h1.changeInfo('hello')
let h2 = new Handler()
h2.changeInfo('world')
console.log(h1.info, h2.info)