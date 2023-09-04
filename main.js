const form = document.querySelector(".main-form");
const search = document.querySelector(".input");
const elList = document.querySelector(".list");
const select = document.querySelector(".select");
const fragment = document.createDocumentFragment();


function renderfunction(arr, list) {
    elList.innerHTML = null;
    arr.forEach(element => {
        console.log(element);
        const item = document.createElement("li");
        const image = document.createElement("img");
        const title = document.createElement("h3");
        const types = document.createElement("p");
        image.src = element.Poster;
        image.alt = element.Title;
        image.width = "150"
        image.heigh = "200"
        title.textContent = element.Title;
        types.textContent = element.Type;
        types.classList.add("types")
        item.append(image, title, types)
        fragment.appendChild(item);
    });
    elList.appendChild(fragment);

}


form.addEventListener("submit", evt => {
    evt.preventDefault();
    const searchVAlue = search.value.trim();
    const selectValue = select.value.trim();
    console.log(selectValue);
    getfunction(`http://www.omdbapi.com/?apikey=6120116f&s=${searchVAlue}&type=${selectValue}`)
})
function getfunction(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderfunction(data.Search, elList)
        })
}

