const renderCharacters = (characters) => {
    const listElement = document.getElementById("list")
    listElement.innerHTML = ""
    characters.forEach(character => {
        const cardElement = document.createElement("div");
        cardElement.innerHTML = `
            <div class="character-card">
            <img src=${character.image} alt="character"/>
            <div class="character-info">
            <div class="section"><p>Name: ${character.name}</p></div>
            <div class="section"><p>Status: ${character.status}</p></div>
            <div class="section"><p>Gender: ${character.gender}</p></div>
            <div class="section"><p>Species: ${character.species}</p></div>
            </div>`
        listElement.appendChild(cardElement)
    })
}

const fetchCharacters = (name) => {
    fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            renderCharacters(res.results)
        })
}

fetchCharacters('')

const searchElement = document.getElementById("search")

searchElement.addEventListener("change", (event) => {
    fetchCharacters(event.target.value)
})
