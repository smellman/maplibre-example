// css
import _ from './main.css'

// maplibre
const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tile.openstreetmap.jp/styles/osm-bright/style.json',
  center: [140.084556, 36.104611],
  zoom: 8,
})