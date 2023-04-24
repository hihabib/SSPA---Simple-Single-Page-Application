import { createElementInsideRoot } from "../app/index.js";

const error404 = () => {
  const div = createElementInsideRoot("div");
  div.innerHTML = html` <h1>404 not found</h1> `;
};

export default error404;
