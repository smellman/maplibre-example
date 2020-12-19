// css
import _ from './main.css'

// maplibre
import { Map } from 'maplibre-gl'

const map = new Map({
  container: 'map',
  style: 'https://tile.openstreetmap.jp/styles/osm-bright/style.json',
  center: [140.084556, 36.104611],
  zoom: 8,
})