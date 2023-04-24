import SPAInit from "./SPAInit.js";
import createLink from "./createLink.js";
import createFooterElement from "./createFooterElement.js";
import createElementInsideRoot from "./createElementInsideRoot.js";
// index file of core library
// to use html with es6-string-html extension on VSCode
window.html = String.raw;
export {SPAInit, createLink, createElementInsideRoot, createFooterElement}