
  

export default class Upload {
  renderInput() {
    const input = document.createElement("input");
    input.id="menu_images"
    input.type = "file";
    input.name = "image3";
    input.setAttribute("multiple",true);
    input.addEventListener("change",this.onchange);
  
return input;
  }
  

  render() {
    const div = document.createElement("div");
    div.className = "upload";
    div.appendChild(this.renderInput())
    div.appendChild(this.renderImage())
    
    




    return div;
  }
  renderImage() {
    const image = document.createElement("img");
    image.id="menu_image";
    image.className="preview_img";
    return image;
  }
  onchange (event){
console.log(event.target.files)

  }
  
}
