main = document.querySelector(".main");
list = document.querySelectorAll(".list li");
info = document.querySelector(".info");

title = document.querySelector("h1");
movie = document.querySelector("img");
text = document.querySelector("p");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    list[i].style.backgroundColor = "red";
    movie.src = `./img/movie${[i + 1]}.jpg`;
    title.innerHTML=list[i].innerHTML;
    text.innerHTML=document.body.childNodes[i+1].data
  });

  list[i].addEventListener("mouseover", () => {
    if(list[i].style.backgroundColor !== "red"){
        list[i].style.backgroundColor = "blue"; 
     }else{
         backgroundColor='red'
     }
  });

  list[i].addEventListener("mouseout", () => {
      if(list[i].style.backgroundColor !== "red"){
         list[i].style.backgroundColor = "#abb3b4"; 
      }else{
          backgroundColor='red'
      }
    
  });
}

console.log(document.body.childNodes);
