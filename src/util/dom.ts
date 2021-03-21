import { CardText, CardContents } from '../card';

export const createListItem = (contents: CardContents): HTMLElement => {
    const newListItem = document.createElement('li');
    const { question, answer } = contents;

    newListItem.append(createBlock(question, 'h3'));
    newListItem.append(createBlock(answer, 'p'));

    return newListItem;
}

const createBlock = (content: CardText, tag: string): HTMLElement => {
    const text = document.createTextNode(content);

    const element = document.createElement(tag);
    element.appendChild(text);

    return element;
}