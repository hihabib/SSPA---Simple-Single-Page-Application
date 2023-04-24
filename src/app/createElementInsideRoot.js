/**
 * Create HTML Element before the footer when footer is created, otherwise the created HTML element append inside root element
 * Create HTML Element for creating page
 * Shound not be used to create component inside page
 * @param {string} elementName html tag name
 * @returns HTMLElement
 */
const createElementInsideRoot = (elementName = "div") => {
  if (document.querySelector('[data-element-type="page"]')) {
    document.querySelector('[data-element-type="page"]').remove();
  }
  const element = document.createElement(elementName);
  element.setAttribute("data-element-type", "page");

  if (document.querySelector("[data-element-type='footer']")) {
    root.insertBefore(
      element,
      document.querySelector("[data-element-type='footer']")
    );
  } else {
    root.append(element);
  }
  return element;
};
export default createElementInsideRoot;
