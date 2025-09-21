import L from 'leaflet'

const mapIcon = L.divIcon({
  html: `<div style="font-size: 2rem;">🌸</div>`,
  className: '',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

export default mapIcon
