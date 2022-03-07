export class photoloader {

  async getimg() {
    return fetch(
        `https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos`
    )
        .then(response => response.json());
  }

  async geturl(loop) {
    /*    this.getimg().then(data => {
            return ("https://webetu.iutnc.univ-lorraine.fr" + data.photos[loop].photo.thumbnail.href);
          })*/
  const response = await fetch(`https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos`)

      const aled = await response.json();
      return aled.photos[loop].photo.thumbnail.href;

  }
}

//        document.getElementById("a"+loop).src = "https://webetu.iutnc.univ-lorraine.fr" + data.photos[loop].photo.thumbnail.href;