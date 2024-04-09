var map = L.map('map').setView([41.289912, 69.249490], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
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

count = 0
function Adress() {
    if(count == 0) {
        L.Routing.control({
            waypoints: [
              L.latLng(41.289912, 69.249490),
              L.latLng(lat.value , lng.value)
            ],
            draggableWaypoints: false,
            addWaypoints: false
          }).addTo(map);
          count ++
    }

}
