import {createElementInsideRoot, createLink} from "../app/index.js";

const header = () => {
  const header = createElementInsideRoot('header');
  header.setAttribute('data-element-type', 'header');
  header.innerHTML = html`
    <header>
      <ul>
        <li>${createLink('/', 'Home')}</li>
        <li>${createLink('/contact', 'Contact')}</li>
        <li>${createLink('/about', 'About')}</li>
      </ul>
    </header>
  `;
};

export default header;
