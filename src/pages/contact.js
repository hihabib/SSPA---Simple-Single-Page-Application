import { createElementInsideRoot } from "../app/index.js";

const contact = () => {
  const div = createElementInsideRoot();

  div.innerHTML = html` <h1>This is contact page</h1> `;
};

export default contact;
