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
        narxi:20.000,
        Photo: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1134.jpeg"
    },
    {
        name:"lenovoideapadgaming3",
        secondaryname:"lenovo",
        desc:"Lenovo ideapad gaming 3 in good condition",
        narxi:700,
        Photo: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1134.jpeg"
    },
    {
        name:"aceraspire5",
        secondaryname:"acer",
        desc:'Acer aspire 5 a laptop for you in good condition',
        narxi:600,
        Photo: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1134.jpeg"
    },
    {
        name:"aceraspire3",
        secondaryname:"acer",
        desc:'Acer aspire 3 a laptop for you in good condition',
        narxi:400,
        Photo: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1134.jpeg"
    },
]
function Clear() {
    document.getElementById("LaptopsPlace").innerHTML=""
    search.value = ""
}
function Search(){
    document.getElementById("LaptopsPlace").innerHTML=""
    var FirstFilter = search.value.toLowerCase();
    var SecondFilter = FirstFilter.replace(/\s/g, "");

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