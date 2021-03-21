export type Category = string;
export type CardText = string;

export interface CardContents {
    question: string;
    answer: string;
}

class Card {    
    constructor(
        private question: CardText, 
        private answer: CardText, 
        private category: Category
    ) {}

    public getQuestion(): CardText {
        return this.question;
    }

    public getAnswer(): CardText {
        return this.answer;
    }

    private getCategory(): Category {
        return this.category;
    }
}

export default Card;