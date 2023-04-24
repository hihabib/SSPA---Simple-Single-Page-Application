import {createElementInsideRoot} from "../app/index.js";

const about = () => {
    const div = createElementInsideRoot('div');
    div.innerHTML = html`
    <h1>I am About page</h1>
    `
}

export default about;