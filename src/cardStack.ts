import Card, { Category } from './card';

export type Cards = Card[];
export type CardCount = number;

class CardStack {
    private category: Category;
    private cards: Cards = [];

    constructor(category: Category) {
        this.category = category;
    }

    public getNumberOfCards(): number {
        return this.cards.length;
    }

    public addToStack(card: Card): void {
        this.cards.push(card);
    }

    public getStackCategory(): Category {
        return this.category;
    }

    public getStack(): Cards {
        return this.cards;
    }
}

export default CardStack;