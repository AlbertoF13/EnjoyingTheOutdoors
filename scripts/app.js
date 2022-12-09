document.getElementById("ParkRegionInput").innerHTML = 
`<option value="all"> REGION </option>
  ${filterRegion(nationalParks).map(regionOptionTemplate).join(" ")}`;

document.getElementById("ParkTypeInput").innerHTML = 
`<option value="all"> TYPE </option>
  ${filterType(nationalParks).map(regionOptionTemplate).join(" ")}`;

document.getElementById("row").innerHTML = 
`<h4 class="app-title">${nationalParks.length} park(s) found</h4>
${nationalParks.map(parkTemplate).join(" ")}`;


function filterRegion(parks) {
    let arr = []
    for(let park of parks) {
      if(!arr.includes(park.region)) {
        arr.push(park.region)
      }
    }
    return arr ;
}

function filterType(parks) {
  let arr = []
  for(let park of parks) {
    if(!arr.includes(park.type)) {
      arr.push(park.type)
    }
  }
  return arr ;
}

function regionOptionTemplate(region) {
  return `
    <option value="${region}"> ${region.toUpperCase()} </option>
  `
}

function parkTemplate(park) {
    return `
    <div class="col-4">
      <div class="park">
        <h1 class="parkname"></h1>
        <div class="park-card-body">
          <div class="background-card" style="background-image: url('${park.image}') ">
            <h3 class="park-card-title">${park.name}</h3>
            <p class="park-description">${park.city}, ${park.state}</p>
            <button type="button" class="btn btn-primary explore"><a class="park-name" href="${park.url}" target="_blank">Explore</a></button>
          </div>
        </div>
      </div>
    </div>`
 ;
}
      

function selectRegion(ev) {
    const filteredParks = ev.target.value === "all" ? nationalParks : nationalParks.filter(park => park.region === ev.target.value)
    filteredParks ?
      document.getElementById("row").innerHTML = `<h4 class="app-title">${filteredParks.length} park(s) found</h4> ${filteredParks.map(parkTemplate).join(" ")}` 
      :
      document.getElementById("row").innerHTML = "<p>No parks found</p>"
}

function selectType(ev) {
  const filteredParks = ev.target.value === "all" ? nationalParks : nationalParks.filter(park => park.type === ev.target.value)
  filteredParks ?
    document.getElementById("row").innerHTML = `<h4 class="app-title"> ${filteredParks.length} park(s) found</h4> ${filteredParks.map(parkTemplate).join(" ")}` 
    :
    document.getElementById("row").innerHTML = "<p>No parks found</p>"
}
