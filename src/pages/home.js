import {createPage} from "../app/index.js";

const home = () => {
    const div = createPage('div');
    div.innerHTML = html`
        <h1>I am Home page</h1>
    `
}

export default home;