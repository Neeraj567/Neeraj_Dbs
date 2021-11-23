let bars=document.querySelector("#bars");
let navBar=document.querySelector('.navBar');
let search=document.querySelector(".a");


document.querySelector('#search').onClick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector("#close").onClick= () => {
    document.querySelector('search-form').classList.remove('active');
}
