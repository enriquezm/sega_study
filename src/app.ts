import Card from "./card";
import TestEngine from "./testEngine";

const test1 = new TestEngine('JavaScript');
test1.getStackCategory();

// create card and add it to test's card stack
test1.addCardToStack(new Card('Test question', 'Test answer', 'Test category'));

console.log('hello');
