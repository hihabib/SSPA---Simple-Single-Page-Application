import { createElementInsideRoot } from "../app/index.js";
import buttonElement from "../components/buttonElement.js";
import counterText from "../components/counterText.js";

const home = () => {
  const div = createElementInsideRoot("div");
  let count = 0;
  div.innerHTML = html`
    <div>
      ${buttonElement()}
      ${counterText(count)}
    </div>
  `;

  document.getElementById("counter").addEventListener("click", (event) => {
    count++;
    event.target.parentNode.querySelector('h1').innerText = count
  });
};

export default home;
