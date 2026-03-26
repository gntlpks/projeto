// BOTAO DE MUDAR PARA DARK MODE -- NAO FUNCIONAL

function changeDarkMode() {

  let myBody = document.querySelector("body");

  if (myBody.classList.contains("day")) {
    myBody.classList.remove("day");
    myBody.classList.add("night");
  } else {
    myBody.classList.remove("night");
    myBody.classList.add("day");
  }}

// BOTAO DE MUDAR A IMAGEM 

 let imgBtn = document.getElementById('changeimg');

imgBtn.addEventListener('click', function(){
    let imgport = document.querySelector("img");

    if (imgport.getAttribute("src") == "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3c279366277695.5b105b769eb49.png") {
        imgport.setAttribute("src", "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/dd158a66277695.5b105b769e34e.png");
    } else {
        imgport.setAttribute("src", "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3c279366277695.5b105b769eb49.png");
    }
});

// BOTAO DE MUDAR COR DO BACKGROUND 

let changecolor = document.getElementById('changeBackgroundColor');

changecolor.addEventListener('click', function () {
    changeBackgroundColor();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeBackgroundColor() {
    let mycard = document.querySelector("body");

    mycard.style.backgroundColor =
        "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")";
}

//LISTA DE HOBBIES COM PROMPT 

let addHobbyBtn = document.getElementById('addHobby');
let hobbyList = document.getElementById('hobby-list');
addHobbyBtn.addEventListener('click', function(){
  
    let hobby = prompt("Qual é o teu hobby?");
    
    let newLi = document.createElement('li');
    
    newLi.innerText = hobby;
  
    hobbyList.appendChild(newLi);
});


// FORMULARIO -- NAO FUNCIONAL
let profileForm = document.getElementById('profileForm');

profileForm.addEventListener('submit', function(event) {
   
    event.preventDefault();

   
    let data = new FormData(this);

    let nome = data.get('nome');
    let frase = data.get('frase');
    let cor = data.get('cor');
    let foto = data.get('foto');

  
    document.getElementById('profile-nome').innerText = nome;

    document.getElementById('profile-frase').innerText = frase;

    document.getElementById('profile-card').style.backgroundColor = cor;
    if (foto) {
        document.getElementById('profile-foto').src = foto;
    }

    this.reset();
});

// CARTA DE TAROT DO DIA API 

const button = document.getElementById("drawCard");
const resultDiv = document.getElementById("result");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://tarotapi.dev/api/v1/cards/random?n=1");
    const data = await response.json();

    const card = data.cards[0];

    resultDiv.innerHTML = `
      <h2>${card.name}</h2>
      <p><strong>Significado:</strong> ${card.meaning_up}</p>
      <p><strong>Descrição:</strong> ${card.desc}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "Erro ao buscar carta 😢";
    console.error(error);
  }
});

//TECLA ENTER 

document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    alert("Tens certeza de que queres terminar o exercicio?");
  }
});