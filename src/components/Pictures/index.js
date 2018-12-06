import "./pictures.css";

import { POINT_CONVERSION_COMPRESSED } from "constants";

export default class Pictures {
  constructor() {
    this.pictures = [
      {
        src:
          "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
        compressedSize: 200,
        originalSize: 1123
      },
      {
        src: "http://simple-fauna.ru/wp-content/uploads/2018/01/zhiraf.jpg",
        compressedSize: 220,
        originalSize: 643
      }
    ];

    this.addPictures = this.addPictures.bind(this);
  }

  fileReader(input) {
    if (input.pictures && input.pictures[0]) {
      let reader = new FileReader();

      reader.onload = function(e) {
        this.renderPicture = e.target.result;
      };
      reader.readAsDataURL(input.pictures[0]);
    }
  }
  addPictures(pictures) {
    this.pictures = [...this.pictures, ...pictures];
    this.render();
  }

  renderPicture(src) {
    const image = document.createElement("img");
    image.src = src;
    image.className = "pictures__image";
    return image;
  }

  dataPict1(compressedSize) {
    const td = document.createElement("td");
    td.className = "dataPict";
    td.innerHTML = compressedSize;
    return td;
  }

  dataPict2(originalSize) {
    const td = document.createElement("td");
    td.className = "dataPict";
    td.innerHTML = originalSize;
    return td;
  }

  buttDown(src) {
    const a = document.createElement("a");
    a.href = src;
    a.download;
    a.innerHTML = "Download";
    return a;
  }

  renderItem(data) {
    // you should generate row item here.
    const item = document.createElement("tr");
    item.className = "pictures__item";
    item.appendChild(this.renderPicture(data.src));
    item.appendChild(this.dataPict1(data.compressedSize));
    item.appendChild(this.dataPict2(data.originalSize));
    item.appendChild(this.buttDown(data.src));
    return item;
  }

  emptyTd() {
    const td = document.createElement("td");
    td.innerHTML = "";
    return td;
  }

  compSize() {
    const th = document.createElement("th");
    th.innerHTML = "Compressed Size";
    return th;
  }

  origSize() {
    const th = document.createElement("th");
    th.innerHTML = "Original Size";
    return th;
  }

  renderTrCompress() {
    const tr = document.createElement("tr");
    tr.className = "pictures__item";
    tr.appendChild(this.emptyTd());

    tr.appendChild(this.compSize());
    tr.appendChild(this.origSize());

    return tr;
  }

  render() {
    if (!this._el) {
      this._el = document.createElement("table");
      this._el.className = "pictures";
    }
    this._el.innerHTML = "";

    this.pictures.forEach(item => {
      this._el.appendChild(this.renderItem(item));
    });
    this._el.insertBefore(this.renderTrCompress(), this._el.children[0]);
    return this._el;
  }
}
