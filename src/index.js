import "./styles.css";

import Pictures from "./components/Pictures";

function component() {
  let element = document.createElement("main");
  const pictures = new Pictures();
  element.appendChild(pictures.render());

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
