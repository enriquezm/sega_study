import Card from "./card";
import TestEngine from "./testEngine";
import { createElement } from './util/dom';

// create new test instance with category of 'JavaScript'
const test1 = new TestEngine('JavaScript');
test1.getStackCategory();

// create cards and add them to test's card stack
test1.addCardToStack(new Card('Test question 1', 'Test answer for 1', 'Category 1'));
test1.addCardToStack(new Card('Test question 2', 'Test answer for 2', 'Category 2'));
test1.addCardToStack(new Card('Test question 3', 'Test answer for 3', 'Category 3'));

// print out stack for testing
test1.printStack();

const testList = document.getElementById('test-list');

for (let card of test1.getStack()) {
    const listElement = createElement('li', card.getQuestion());
    testList?.appendChild(listElement);
}

