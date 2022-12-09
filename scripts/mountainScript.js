document.getElementById("MountainInput").innerHTML = 
`<option value="all"> MOUNTAIN </option>
${mountainsArray.map(mountainOptionTemplate).join(" ")}`;

function mountainOptionTemplate(mountain) {
    return `
      <option value="${mountain.name}"> ${mountain.name} </option>
    `
}

function mountainTemplate(mountain) {
    return `
    <h2 class="title">${mountain.name}</h2>
    <div class="bottom">
        <img src="/photos/${mountain.img}">
        <p class="description"> ${mountain.desc} <br><br> effort: ${mountain.effort} <br> elevation: ${mountain.elevation} <br> cords: ${mountain.cords}</p>
    </div>
`
}

function selectMountain(e) {
    const mountain = mountainsArray.filter(m => m.name === e.target.value)
    document.getElementById("mountainDisplay").innerHTML = `${mountainTemplate(mountain[0])}`
}