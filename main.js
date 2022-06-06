const resultsContainer = document.getElementById('resultsContainer');
const breadcrumbContainer = document.querySelector('.breadcrumb');
const progressBar = document.querySelector('.progress-bar');
const shapeURL = 'https://pokeapi.co/api/v2/pokemon-shape';
let shapeName, speciesName, speciesURL, breadcrumbMsg = "";

getShapes();

function reset() {
    breadcrumbContainer.innerHTML = `<li class="breadcrumb-item active" aria-current="page">Shape</li>`;
    resultsContainer.innerHTML = "";
    progressBar.style.width = '0%';
    progressBar.innerHTML = "Progress 0%";
    const isModal = document.querySelector('.modal');
    if (isModal) isModal.remove();
    shapeName, speciesName, speciesURL, breadcrumbMsg = "";
}

function getShapes() {
    fetch(shapeURL)
        .then(res => res.json()).then(res => {
            reset()
            res.results.forEach(result => {
                const name = result.name;
                const url = result.url;
                const shapeResults = document.createElement('div');
                shapeResults.innerHTML = bsCard(name);
                const btn = shapeResults.querySelector('.btn');
                btn.addEventListener('click', function () {
                    getSpecies(url);
                });
                resultsContainer.append(shapeResults);
            });
        });
}

function getSpecies(url) {
    fetch(url).then(res => res.json()).then(res => {
        resultsContainer.innerHTML = "";
        res.pokemon_species.forEach(result => {
            const name = result.name;
            const url = result.url;
            const speciesResults = document.createElement('div');
            speciesResults.innerHTML = bsCard(name);
            const btn = speciesResults.querySelector('.btn');
            btn.addEventListener('click', function () {
                getVarieties(url);
            });
            resultsContainer.append(speciesResults);
            progressBar.style.width = '33%';
            progressBar.innerHTML = "Progress 33%";
        })
        shapeName = res.name;
        speciesURL = url;

        breadcrumbMsg = `<li class="breadcrumb-item"><a href="javascript:getShapes();">Shape</a><span style="color:lightgray"> (${shapeName})</span></li>`;
        breadcrumbMsg += `<li class="breadcrumb-item active" aria-current="page">Species</li>`;
        breadcrumbContainer.innerHTML = breadcrumbMsg;
    });
}

function getVarieties(url) {
    fetch(url).then(res => res.json()).then(res => {
        resultsContainer.innerHTML = "";
        res.varieties.forEach(result => {
            const name = result.pokemon.name;
            const url = result.pokemon.url;
            const pokemonListResults = document.createElement('div');
            pokemonListResults.innerHTML = bsCard(name);
            const btn = pokemonListResults.querySelector('.btn');
            btn.addEventListener('click', function () {
                getPokemonSelected(url);
            });
            resultsContainer.append(pokemonListResults);
            progressBar.style.width = '66%';
            progressBar.innerHTML = "Progress 66%";
        })
        speciesName = res.name;


        breadcrumbMsg = `<li class="breadcrumb-item"><a href="javascript:getShapes();">Shape</a><span style="color:lightgray"> (${shapeName})</span></li>`;
        breadcrumbMsg += `<li class="breadcrumb-item"><a href="javascript:getSpecies('${speciesURL}');">Species</a><span style="color:lightgray"> (${speciesName})</span></li>`;
        breadcrumbMsg += `<li class="breadcrumb-item active" aria-current="page">Pokemons</li>`;
        breadcrumbContainer.innerHTML = breadcrumbMsg;
    });
}

function getPokemonSelected(url) {
    fetch(url).then(res => res.json()).then(res => {
        progressBar.style.width = '100%';
        progressBar.innerHTML = "Progress 100%";

        const image = res.sprites.front_default;
        const name = res.name;
        const species = res.species.name;
        const abilitiesArray = res.abilities;

        breadcrumbMsg = `<li class="breadcrumb-item"><a href="javascript:getShapes();">Shape</a><span style="color:lightgray"> (${shapeName})</span></li>`;
        breadcrumbMsg += `<li class="breadcrumb-item"><a href="javascript:getSpecies('${speciesURL}');">Species</a><span style="color:lightgray"> (${speciesName})</span></li>`;
        breadcrumbMsg += `<li class="breadcrumb-item"><span style="color:blue;text-decoration:underline">Pokemons</span></li>`;
        breadcrumbMsg += `<li class="breadcrumb-item active" aria-current="page">My Pokemon</li>`;
        breadcrumbContainer.innerHTML = breadcrumbMsg;

        const pokemonSelected = document.createElement('div');
        pokemonSelected.setAttribute('class', 'modal');
        pokemonSelected.setAttribute('tabindex', '-1');
        pokemonSelected.innerHTML = bsCardModal(image, name, species, shapeName, abilitiesArray);
        document.body.append(pokemonSelected);
        myModal = new bootstrap.Modal(pokemonSelected);
        myModal.show();

        pokemonSelected.addEventListener('hidden.bs.modal', function (event) {
            closeModal();
        })
    });
}

function closeModal() {
    progressBar.style.width = '66%';
    progressBar.innerHTML = "Progress 66%";
    breadcrumbMsg = `<li class="breadcrumb-item"><a href="javascript:getShapes();">Shape</a><span style="color:lightgray"> (${shapeName})</span></li>`;
    breadcrumbMsg += `<li class="breadcrumb-item"><a href="javascript:getSpecies('${speciesURL}');">Species</a><span style="color:lightgray"> (${speciesName})</span></li>`;
    breadcrumbMsg += `<li class="breadcrumb-item active" aria-current="page">Pokemons</li>`;
    breadcrumbContainer.innerHTML = breadcrumbMsg;
    const isModal = document.querySelector('.modal');
    let myModal = undefined;
    if (isModal) {
        myModal = bootstrap.Modal.getInstance(isModal);
        if (myModal) myModal.dispose();
        isModal.remove();
    }
    // console.log("closed");
}




function bsCard(name) {
    const msg = `
    <div class="card" style="width: 18rem;">
        <div class="card-body d-flex flex-column justify-content-center">
            <h5 class="card-title">${name}</h5>
            <span class="btn btn-primary">Select</span>
        </div>
    </div>
    `
    return msg;
}

function bsCardModal(image, name, species, shape, abilitiesArray) {
    const msg = `
        <div class="modal-dialog" style="width: 18rem;height: 36rem">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Your Pokemon:</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card" d-flex flex-column justify-content-center style="border: none;">
                        <img src="${image}" class="card-img-top">
                        <div class="card-body card-modal">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">Shape: ${shape}</p>
                            <p class="card-text">Species: ${species}</p>
                            <p class="card-text">Abilities: ${abilitiesArray.map(obj => `${obj.ability.name}`).join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="getShapes()">Reset</button>
                </div> 
            </div>
        </div>
    `
    return msg;
}
