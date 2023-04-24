import { createFooterElement } from "../app/index.js";

const footer = () => {
  const div = createFooterElement();
  div.innerHTML = html` <p>This is footer</p> `;
};

export default footer;
