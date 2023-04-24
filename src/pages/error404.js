import { createPage } from "../app/index.js"

const error404 = () => {
    const div = createPage('div');
    div.innerHTML = html`
        <h1>404 not found</h1>
    `
}

export default error404;