import { data } from "./data.js";
let dat = JSON.parse(data);
// console.log(dat);

let list = document.querySelectorAll(".list li");

let title = document.querySelector("h1");
let movie = document.querySelector("img");
let text = document.querySelector("p");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    for (let j = 0; j < list.length; j++) {
      list[j].style.backgroundColor = "#abb3b4";
    }
    list[i].style.backgroundColor = "red";

    movie.src = dat[i]["image"];
    title.innerHTML = dat[i]["title"];
    text.innerHTML = dat[i]["description"];
  });

  list[i].addEventListener("mouseover", () => {
    if (list[i].style.backgroundColor !== "red") {
      list[i].style.backgroundColor = "blue";
    } else {
      list[i].style.backgroundColor = "red";
    }
  });

  list[i].addEventListener("mouseout", () => {
    if (list[i].style.backgroundColor !== "red") {
      list[i].style.backgroundColor = "#abb3b4";
    } else {
      list[i].style.backgroundColor = "red";
    }
  });
}
let result = document.querySelector(".result");
let movies = document.querySelector("#movie");
let titles = "";

movies.addEventListener("blur", movien);
movies.addEventListener("keypress", enter);
window.addEventListener("load", movien);

function enter(e) {
  if (e.key == "Enter") {
    movien();
  }
}

function movien() {
  let m = movies.value;
  if (m == "") {
    titles = Math.ceil(Math.random() * 10);
  } else {
    titles = m;
  }

  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0519611e1aaad0080a27f096e3b5f52a&language=en-US&query=${titles}&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let index = Math.ceil(Math.random() * data["results"].length - 1);

      movie.src = `https://image.tmdb.org/t/p/original/${data["results"][index]["poster_path"]}`;
      title.innerHTML = data["results"][index]["title"];
      text.innerHTML = data["results"][index]["overview"];

      result.innerHTML = "";
      for (let i = 0; i < data["results"].length; i++) {
        result.innerHTML += `<img src="https://image.tmdb.org/t/p/original/${data["results"][i]["poster_path"]}" width="20%">`;
        if (data["results"][i]["poster_path"] == null) {
          result.innerHTML += `<img src="./img/not_found.webp" width="20%">`;
        }
      }
      console.log(titles);
    });
}
