const home = document.getElementById(`home`)
const info = document.getElementById(`info`)
const geo = document.getElementById(`geo`)
const search = document.getElementById(`searchBar`)
const lat  = document.getElementById(`lat`)
const lng  = document.getElementById(`lng`)

// pages
home.addEventListener(`click`, () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
})

info.addEventListener(`click`, () => {
    window.scrollTo({
        top: 820,
        left: 0,
        behavior: "smooth",
      });
})

geo.addEventListener(`click`, () => {
    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: "smooth",
      });
})

// map
var map = L.map('map').setView([41.289912, 69.249490], 18);
var fmap = L.map('fmap').setView([41.289912, 69.249490], 18);
L.marker([41.289912, 69.249490]).addTo(fmap)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(fmap);

var GeoJson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                69.24913398311782,
                41.29040695388457
              ],
              [
                69.24922456815679,
                41.290142707594356
              ],
              [
                69.24933113879226,
                41.28990248276625
              ],
              [
                69.24932581026047,
                41.28990248276625
              ],
              [
                69.24952296593486,
                41.28940601531758
              ],
              [
                69.249725450141,
                41.28948208718771
              ],
              [
                69.24981603518134,
                41.28950610986499
              ],
              [
                69.24988530609349,
                41.28954614764129
              ],
              [
                69.24951763740322,
                41.29051105061362
              ],
              [
                69.24913398311782,
                41.29040695388457
              ]
            ]
        ],
          "type": "Polygon"
        }
      }
    ]
}
L.geoJSON(GeoJson).addTo(map);

function Adress() {
    L.Routing.control({
        waypoints: [
          L.latLng(41.289912, 69.249490),
          L.latLng(lat.value , lng.value)
        ],
        draggableWaypoints: false,
        addWaypoints: false
      }).addTo(map);

}

// search system
  const tovarlar = [
    {
        name:"macbook",
        secondaryname:"macbookair",
        desc:"Macbook air pro 2017. In good condition",
        narxi:1200,
        Photo: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1134.jpeg"
    },
    {
        name:"lenovoideapadgaming3",
        secondaryname:"lenovo",
        desc:"Lenovo ideapad gaming 3 in good condition",
        narxi:700,
        Photo: "https://johnlewis.scene7.com/is/image/JohnLewis/Laptops-940x700-130423"
    },
    {
      name:"hpvictus",
      secondaryname:"hp",
      desc:"Hp Victus in good condition",
      narxi:700,
      Photo: "https://static3.webx.pk/files/17888/Images/71k5nvcdaol.-sl1500--4012-1818990-020823111038154-17888-0-18-17888-0-050124024037942.jpg"
    },
    {
      name:"hplowpower",
      secondaryname:"hp",
      desc:"Hp low power laptop in good condition",
      narxi:300,
      Photo: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000"
    },
    {
        name:"aceraspire5",
        secondaryname:"acer",
        desc:'Acer aspire 5 a laptop for you in good condition',
        narxi:600,
        Photo: "https://i.pcmag.com/imagery/reviews/01DwPnq2ew5930qO5p4LXWH-1.fit_lim.size_840x473.v1677608790.jpg"
    },
    {
        name:"aceraspire3",
        secondaryname:"acer",
        desc:'Acer aspire 3 a laptop for you in good condition',
        narxi:400,
        Photo: "https://i.pcmag.com/imagery/reviews/01DwPnq2ew5930qO5p4LXWH-1.fit_lim.size_840x473.v1677608790.jpg"
    },

    {
      name:"macbook",
      secondaryname:"macbookpro",
      desc:"Macbook pro. In good condition. Basic pack + mouse included",
      narxi:2000,
      Photo: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1134.jpeg"
    },
    {
      name:"lenovolegion5",
      secondaryname:"lenovo",
      desc:"Lenovo  Legion 5 in good condition",
      narxi:700,
      Photo: "https://i.pcmag.com/imagery/roundups/00m26Dq072QbQhc8LkAOuZ0-30..v1696527490.jpg"
    },
    {
      name:"lenovothinkpad3",
      secondaryname:"lenovo",
      desc:"Lenovo  ThinkPad 3 in good condition",
      narxi:700,
      Photo: "https://images.summitmedia-digital.com/spotph/images/2022/06/30/guide-to-everyhing-laptop-640-1656580338.jpg"
    },
    {
      name:"hpomen",
      secondaryname:"hp",
      desc:"Hp Omen in good condition",
      narxi:700,
      Photo: "https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg"
    },
    {
      name:"dellalienware",
      secondaryname:"alienware",
      desc:'Alienware for you in good condition',
      narxi:600,
      Photo: "https://www.pcworld.com/wp-content/uploads/2024/03/20220324_103646-1-1.jpg?quality=50&strip=all"
    },
    {
      name:"aceraspire3",
      secondaryname:"acer",
      desc:'Acer aspire 3 a laptop for you in good condition',
      narxi:400,
      Photo: "https://johnlewis.scene7.com/is/image/JohnLewis/Laptops-940x700-130423"
    },
]
function Clear() {
    document.getElementById("LaptopsPlace").innerHTML=""
    search.value = ""
}
function Search(){
  var FirstFilter = search.value.toLowerCase();
  var SecondFilter = FirstFilter.replace(/\s/g, "");
  if(SecondFilter !== ""){

  
    document.getElementById("LaptopsPlace").innerHTML=""

    var found = false;
    var existingLaptops = []

    tovarlar.forEach((el) => {
        if (el.name.includes(SecondFilter) || el.secondaryname.includes(SecondFilter)) {
            if (!existingLaptops.includes(el.name)) {
                found = true;
                existingLaptops.push(el.name);
                document.getElementById("LaptopsPlace").innerHTML += (`
                <div class="pomechaniy card" style="width: 18rem;">
                <img
                  src="${el.Photo}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">${el.desc} and costs you ${el.narxi}</p>
                </div>
                </div>
                `);
            }
        }
    });

    if (!found) {
        document.getElementById("LaptopsPlace").innerHTML = "<h1>The laptop you are looking for is not listed in our web site</h1>";
    }
  }
}