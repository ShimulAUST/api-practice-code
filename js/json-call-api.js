const jsonPrint = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

jsonPrint();

const displayData = data => {
    const divAdd = document.getElementById('all-things');
    for (const dataSingle of data) {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <div onclick=showDetailData('${dataSingle.id}')>
        <h4>ID : ${dataSingle.id}</h4>
        <h5>Title: ${dataSingle.title}</h5>
        </div>`;
        createDiv.style.backgroundColor = 'red';
        createDiv.style.margin = '5px';
        divAdd.appendChild(createDiv);

    }
}
const showDetailData = id => {
    //console.log(id);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailData(data));
}

const displayDetailData = detailData => {
    console.log(detailData);
    const divAdd = document.getElementById('show-detail');
    const createDiv = document.createElement('div');
    divAdd.textContent = '';
    createDiv.innerHTML = `
        <h2>${detailData.title}</h2>
        <p>${detailData.body}</p>
    `;
    divAdd.style.border = '1px solid'
    divAdd.appendChild(createDiv);
}