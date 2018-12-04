import "./styles.css";
import "./components/Upload/styleButton.css";

import Pictures from "./components/Pictures";
import Upload from "./components/Upload";

function component() {
  let element = document.createElement("main");
  const pictures = new Pictures();
  const upload = new Upload({
    onChange: pictures.addPictures
  });
  element.appendChild(upload.render());
  element.appendChild(pictures.render());

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
