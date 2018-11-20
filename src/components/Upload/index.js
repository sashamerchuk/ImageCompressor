export default class Upload {
  renderInput() {
    const input = document.createElement("input");
    input.id = "menu_images";
    input.type = "file";
    input.name = "image";
    input.setAttribute("multiple", true);
    input.addEventListener("change", this.onchange);

    return input;
  }

  render() {
    const div = document.createElement("div");
    div.className = "upload";
    div.appendChild(this.renderInput());
    div.appendChild(this.renderImage());
    return div;
  }
  renderImage() {
    const image = document.createElement("img");
    image.id = "menu_image";
    image.className = "preview_img";
    return image;
  }
  onchange(event) {
    console.log("Files arr:", event.target.files);
    const sizeFile = event.target.files.length;
    Array.from(event.target.files).forEach(file => {
      console.log("File is:", file);
      if (sizeFile > 10) {
        const fileInput = document.getElementById("menu_images");
        return (fileInput.disabled = true);
      }
      if (file.size > 5000);{
        alert("you photo is too big");
      }
    });
  }
}




  
