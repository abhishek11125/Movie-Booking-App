// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let money = JSON.parse(localStorage.getItem("amount")) || 0;

let wallet = document.getElementById("wallet");
wallet.innerText = money;

let getMovie = async () => {
  let query = document.getElementById("search").value;
  let key = "59285eb3";
  let url = `https://www.omdbapi.com/?s=${query}&apikey=${key}`;
  let res = await fetch(url);
  let data = await res.json();
  let actualData = data.Search;
  if(actualData!==undefined){
    movieAppend(data.Search);
  }
  
};

let container = document.getElementById('movies');
let movieAppend = (data) =>{
    container.innerHTML = null;
    data.forEach((el) => {
        let box = document.createElement('div');
        box.setAttribute('class','movie_tab');

        let poster = document.createElement('img');
        poster.src = el.Poster

        let title = document.createElement('p');
        title.innerText  = el.Title

        let btn = document.createElement('button');
        btn.setAttribute('class','book_now');
        btn.innerText = 'book_now'
        btn.addEventListener('click',function(){
            localStorage.setItem('movie',JSON.stringify(el));
            window.location.href = 'checkout.html';
        })

        box.append(poster,title,btn);

        container.append(box)

    });
}


function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func()
    },delay);
}