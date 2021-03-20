type Question = string;
type Answer = string;
export type Category = string;

class Card {    
    constructor(
        private question: Question, 
        private answer: Answer, 
        private category: Category
    ) {}

    private getQuestion(): Question {
        return this.question;
    }

    private getAnswer(): Answer {
        return this.answer;
    }

    private getCategory(): Category {
        return this.category;
    }
}

export default Card;