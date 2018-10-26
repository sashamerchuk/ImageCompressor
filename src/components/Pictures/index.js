import "./pictures.css";

const pictures = [
  {
    src:
      "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
    compressedSize: 200,
    originalSize: 800
  },
  {
    src:
      "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
    compressedSize: 200,
    originalSize: 800
  },
  {
    src:
      "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
    compressedSize: 200,
    originalSize: 800
  },
  {
    src:
      "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
    compressedSize: 200,
    originalSize: 800
  },
  {
    src:
      "https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg",
    compressedSize: 200,
    originalSize: 800
  }
];

export default class Pictures {
  renderPicture(src) {
    const image = document.createElement("img");
    image.src = src;
    image.className = "pictures__image";
    return image;
  }

  renderItem(data) {
    // you should generate row item here.
    const item = document.createElement("div");
    item.className = "pictures__item";
    item.appendChild(this.renderPicture(data.src));
    return item;
  }

  render() {
    const div = document.createElement("div");
    div.className = "pictures";

    pictures.forEach(item => {
      div.appendChild(this.renderItem(item));
    });

    return div;
  }
}

// // old code
// var picture = {
// 	compressedSize: "200кб <strong>(-80%)</strong>",
// 	originalSize: "1.2мб"
// };
// var picture2 = {
// 	compressedSize:"300kb <strong>(-90%)</strong>",
// 	originalSize:"3mb"
// }
// var picture3 = {
// 	compressedSize:"150kb <strong>-50%</strong>",
// 	originalSize:"300kb"
// }
//
//
// var table = document.createElement("table"); // створюю таблицю
// table.className = "tbPictures"; //створюю клас
// pictures.appendChild(table); // додаю в div
// var tr = document.createElement("tr"); // create tr
// tr.className = "trOrigin"; // created the class trPictures
// table.appendChild(tr);
// var td = document.createElement("td");//create td
// td.innerHTML = "";
// tr.appendChild(td);
// var tdO = document.createElement("td"); //create td element for original size
// tdO.innerHTML = "<strong>Original Size</strong>";
// tr.appendChild(tdO);
// var tdComp = document.createElement("td");
// tdComp.innerHTML = "<strong>Compressed Size</strong>";
// tr.appendChild(tdComp);
// var secondTR = document.createElement("tr");
// table.appendChild(secondTR);
// var tdImg = document.createElement("td");
// tdImg.innerHTML="";
// secondTR.appendChild(tdImg);
// var tdimg = document.createElement("img");// foto in td
// tdimg.className = "fotoinTable";
// tdimg.src = "foto/church.jpg";
// tdImg.appendChild(tdimg);
// var tdDataobj = document.createElement("td");
// tdDataobj.innerHTML = picture.originalSize;
// secondTR.appendChild(tdDataobj);
// var tdDataobj1 = document.createElement("td");
// tdDataobj1.innerHTML = picture.compressedSize;
// secondTR.appendChild(tdDataobj1);
// var tdDataobj8 = document.createElement("td");
// tdDataobj8.innerHTML="";
// secondTR.appendChild(tdDataobj8);
// var tdDownload1 = document.createElement("a");
// tdDownload1.className="downloadInTable";
// tdDownload1.href = "foto/church.jpg";
// tdDownload1.download;
// tdDownload1.innerHTML="download";
// tdDataobj8.appendChild(tdDownload1);
// var thirdTR = document.createElement("tr");
// table.appendChild(thirdTR);
// var tdImg2 = document.createElement("td");
// tdImg2.innerHTML="";
// thirdTR.appendChild(tdImg2);
// var tdimg2 = document.createElement("img");// foto in td
// tdimg2.className = "fotoinTable";
// tdimg2.src = "foto/summer.jpg";
// tdImg2.appendChild(tdimg2);
// var tdDataobj2 = document.createElement("td");
// tdDataobj2.innerHTML=picture2.originalSize;
// thirdTR.appendChild(tdDataobj2);
// var tdDataobj3 = document.createElement("td");
// tdDataobj3.innerHTML = picture2.compressedSize;
// thirdTR.appendChild(tdDataobj3);
// var tdDataobj9 = document.createElement("td");
// tdDataobj9.innerHTML="";
// thirdTR.appendChild(tdDataobj9);
// var tdDownload2 = document.createElement("a");
// tdDownload2.className="downloadInTable";
// tdDownload2.href = "foto/summer.jpg";
// tdDownload2.download;
// tdDownload2.innerHTML="download";
// tdDataobj9.appendChild(tdDownload2);
// var fourTR = document.createElement("tr");
// table.appendChild(fourTR);
// var tdDataobj4 = document.createElement("td");
// tdDataobj4.innerHTML="";
// fourTR.appendChild(tdDataobj4);
// var tdimg3 = document.createElement("img");// foto in td
// tdimg3.className = "fotoinTable";
// tdimg3.src = "foto/sun.jpg";
// tdDataobj4.appendChild(tdimg3);
// var tdDataobj5 = document.createElement("td");
// tdDataobj5.innerHTML=picture3.originalSize;
// fourTR.appendChild(tdDataobj5);
// var tdDataobj6 = document.createElement("td");
// tdDataobj6.innerHTML = picture3.compressedSize;
// fourTR.appendChild(tdDataobj6);
// var tdDataobj7 = document.createElement("td");
// tdDataobj7.innerHTML="";
// fourTR.appendChild(tdDataobj7);
// var tdDownload3 = document.createElement("a");
// tdDownload3.className="downloadInTable";
// tdDownload3.href = "foto/sun.jpg";
// tdDownload3.download;
// tdDownload3.innerHTML="download";
// tdDataobj7.appendChild(tdDownload3);
