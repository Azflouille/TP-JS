document.querySelector('#load_gallery')
    .addEventListener('click',  e => {
    })

async function getimg() {
  return fetch(
      `https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos`
  )
      .then(response => response.json());
}

function geturl() {
  getimg().then(data => {
    let loop = 0;
    for (let i = 0; i < 10; i++) {
      document.getElementById("a"+loop).src = "https://webetu.iutnc.univ-lorraine.fr" + data.photos[loop].photo.thumbnail.href;
      loop++;
    }
  });
}

geturl();