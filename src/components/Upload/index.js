
export default class Upload {
  constructor(props) {
    this.props = props;
  }

  renderInput() {
    const input = document.createElement("input");
    input.id = "menu_images";
    input.type = "file";
    input.name = "image";
    input.setAttribute("multiple", true);
    input.addEventListener("change", ({ target }) => {
      this.props.onChange(Array.from(target.files));
    });

    return input;
  }

  render() {
    const div = document.createElement("div");
    div.className = "upload";
    div.appendChild(this.renderInput());
    div.appendChild(this.renderImage());
    div.appendChild(this.renderLabel());
    return div;
  }

  renderImage() {
    const image = document.createElement("img");
    image.id = "menu_image";
    image.className = "preview_img";
    return image;
  }
  renderLabel(){
    const label = document.createElement("label");
    label.for="fileElem";
    label.className="label"
    label.innerHTML="Choose your photo!";
    label.appendChild(this.renderInput());
    return label;
  }
}
