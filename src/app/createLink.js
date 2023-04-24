/**
 * return html anchor tag as a string.
 * Useful when you want to create create an inner route link
 * @param {string} route
 * @param {string} htmlString
 * @returns html anchor tag as a string
 */
const createLink = (route, htmlString) => {
  return html`<a onclick="router('${route}'); return false;" href="${route}"
    >${htmlString}</a
  >`;
};

export default createLink;
