export const createElement = (type: string, content: string): HTMLElement => {
    const newElement = document.createElement(type);
    newElement.append(document.createTextNode(content));

    return newElement;
}