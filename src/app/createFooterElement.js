/**
 * Create HTML footer element.
 * @returns HTMLFooterElement
 */
const createFooterElement = () => {
    const footer = document.createElement('footer');
    root.append(footer);
    footer.setAttribute('data-element-type', 'footer');
    footer.innerHTML = html``;
    return footer;
}


export default createFooterElement;