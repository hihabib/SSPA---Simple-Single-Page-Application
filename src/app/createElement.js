/**
 * Create HTML element as a component of any page
 * Warning: Footer should not be created with createElement function.
 * @param {String} elementName HTML tag name
 * @returns HTMLElement
 */
const createElement = (elementName = 'div') => {
    const element = document.createElement(elementName);
    root.append(element);
    return element;
}

/**
 * Create HTML footer element.
 * @returns HTMLFooterElement
 */
const createFooterElement = () => {
    const footer = createElement('footer');
    footer.setAttribute('data-element-type', 'footer');
    footer.innerHTML = html``;
    return footer;
}


export {createElement, createFooterElement};