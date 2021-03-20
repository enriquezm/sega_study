import Card, { Category } from './card';
import CardStack, { Cards, CardCount } from './cardStack';

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

    /**
     * Adds a provided card to stack.
     * @param card The new card object to add to stack
     */
    public addCardToStack(card: Card): void {
        this.activeCardStack.addToStack(card);
    }

    /**
     * Returns the category for a given card stack.
     * @returns The card stack category
     */
    public getStackCategory(): Category {
        return this.activeCardStack.getStackCategory();
    }

    public getStackCount(): CardCount {
        return this.activeCardStack.getNumberOfCards();
    }

    public printStack(): void {
        console.log(this.activeCardStack.getStack());
    }

    public getStack(): Cards {
        return this.activeCardStack.getStack();
    }
}

export default TestEngine;