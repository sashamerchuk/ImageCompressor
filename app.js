console.log("appinit");

fetch("./data/pictures.json")
  .then(function(response) {
    return response.json();
   })
  .then(function(compressedImage) {
    console.log("pictures => ", compressedImage.pictures);
  })
  .catch(function(err) {
      console.log("error happened => ", err);
  });