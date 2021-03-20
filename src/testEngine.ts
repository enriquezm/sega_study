import Card, { Category } from './card';
import CardStack, { Cards } from './cardStack';

class TestEngine {
    private correctPile: Cards;
    private incorrectPile: Cards;
    private activeCardStack: CardStack;

    constructor(category: Category) {
        this.correctPile = [];
        this.incorrectPile = [];

        // Create new card stack with given category to test
        this.activeCardStack = new CardStack(category);

        this.init();
    }

    private init() {

    }

    public addCardToStack(card: Card): void {
        this.activeCardStack.addToStack(card);
    }

    public getStackCategory(): Category {
        return this.activeCardStack.getStackCategory();
    }
}

export default TestEngine;