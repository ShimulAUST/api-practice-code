const searchTeam = () => {
    const search = document.getElementById('search-field');
    const searchValue = search.value;

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTeam(data.teams));
}

const displayTeam = datas => {
    const divSearchResult = document.getElementById('search-result');
    divSearchResult.textContent = '';

    datas.forEach(data => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('col-lg-3');

        createDiv.innerHTML = `

        <img class="img-fluid" src="${data.strTeamBadge}">
        <h3>${data.strTeam}</h3>

        `;
        createDiv.style.padding = '2%';
        createDiv.style.border = '1px solid';
        createDiv.style.margin = '2%';
        divSearchResult.appendChild(createDiv);
        console.log(data);

    });

}