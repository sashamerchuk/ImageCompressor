import "./pictures.css";
import mapAgeCleaner from "map-age-cleaner";
import { POINT_CONVERSION_COMPRESSED } from "constants";

const pictures = [
  {
    src:
      "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
    compressedSize: 200,
    originalSize: 1123,
    comp: function() {
      return this.compressedSize;
    }
  },
  {
    src: "http://simple-fauna.ru/wp-content/uploads/2018/01/zhiraf.jpg",
    compressedSize: 220,
    originalSize: 643
  },
  {
    src: "https://www.segodnya.ua/img/article/11212/90_ls.1520759066.jpg",
    compressedSize: 123,
    originalSize: 890
  },
  {
    src:
      "https://ichef.bbci.co.uk/news/660/cpsprodpb/E4B7/production/_90515585_koala__2012_jpe_ws_01_low_res.jpg",
    compressedSize: 119,
    originalSize: 239
  },
  {
    src:
      "https://img04.rl0.ru/e1aa03029e240e3e6b12450baad6ddf4/c615x400/news.rambler.ru/img/2018/01/18131123.875643.8703.jpeg",
    compressedSize: 65,
    originalSize: 430
  },
  {
    src:
      "https://nashzeleniymir.ru/wp-content/uploads/2016/05/%D0%A1%D0%BB%D0%BE%D0%BD%D0%B8%D1%85%D0%B0-%D1%81%D0%BB%D0%BE%D0%BD%D0%B5%D0%BD%D0%BE%D0%BA-%D0%B8-%D1%81%D0%BB%D0%BE%D0%BD.jpg",
    compressedSize: 120,
    originalSize: 943
  },
  {
    src: "https://i.ytimg.com/vi/UsCbtB8cmeI/hqdefault.jpg",
    compressedSize: 345,
    originalSize: 1500
  },
  {
    src: "https://cdn1.img.ukraina.ru/images/101999/62/1019996264.jpg",
    compressedSize: 32,
    originalSize: 390
  },
  {
    src:
      "data:image/jpeg;base64,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",
    compressedSize: 15,
    originalSize: 190
  },
  {
    src: "https://ochepyatki.ru/upfiles/albums/3964/f_104925.jpg",
    compressedSize: 290,
    originalSize: 670
  }
];
export default class Pictures {
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
    const table = document.createElement("table");
    table.className = "pictures";
    pictures.forEach(item => {
      table.appendChild(this.renderItem(item));
    });
    table.insertBefore(this.renderTrCompress(), table.children[0]);
    return table;
  }
}
