import {createPage} from "../app/index.js";

const about = () => {
    const div = createPage('div');
    div.innerHTML = html`
    <h1>I am About page</h1>
    `
}

export default about;