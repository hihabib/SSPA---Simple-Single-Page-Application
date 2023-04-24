import SPAInit from "./SPAInit.js";
import createLink from "./createLink.js";
import {createElement, createFooterElement} from "./createElement.js";
import createPage from "./createPage.js";
// index file of core library
// to use html with es6-string-html extension on VSCode
window.html = String.raw;
export {SPAInit, createLink, createElement, createPage, createFooterElement}