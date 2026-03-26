// BOTAO DE MUDAR PARA DARK MODE


let darkModeBtn = document.getElementById('darkmode');

darkModeBtn.addEventListener('click', function(){
    changeDarkMode()
});
darkModeBtn.addEventListener('click', function(){
    let myBody = document.querySelector("body");
    
    if (myBody.getAttribute('data-bs-theme') === 'dark') {
        myBody.setAttribute('data-bs-theme', 'light');
        darkModeBtn.innerText = 'Night Mode 🌃';
    } else {
        myBody.setAttribute('data-bs-theme', 'dark');
        darkModeBtn.innerText = 'Light Mode ☀️';
    }
});

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


// FORMULARIO 
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
        document.getElementById('imgport').src = foto;
    }

    this.reset();
});

//BOTAO DE RESETAR TUDO (MENOS CONTADOR)
let resetBtn = document.getElementById('resetForm');

const initialHobbies = ['artes', 'colagem', 'design', 'fotografia analógica'];

resetBtn.addEventListener('click', function(){
    document.querySelector('body').setAttribute('data-bs-theme', 'light');
    darkModeBtn.innerText = 'Night Mode 🌃';

    document.getElementById('imgport').src = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3c279366277695.5b105b769eb49.png';

    let hobbyList = document.getElementById('hobby-list');
    hobbyList.innerHTML = '';
    initialHobbies.forEach(function(hobby){
        let li = document.createElement('li');
        li.innerText = hobby;
        hobbyList.appendChild(li);
    });

    document.getElementById('profileForm').reset();
    document.getElementById('profile-nome').innerText = '✨ Meu Portfólio ✨';
    document.getElementById('profile-frase').innerText = 'Me chamo Amanda, sou brasileira, casada, 34 anos. Moro em Portugal há 7 anos. Sou de Natal, Rio Grande doNorte, mas morei uma parte da minha vida em Belo Horizonte, Minas Gerais. Se me perguntar se sinto saudades do Brasil, vou dizer que não. É difícil falar sobre mim mesma, às vezes parece que não sou nada, ao mesmo tempo que sou muitas coisas. Sou tatuadora handpoke (uma técnica sem máquina), há 7 anos. É o que mais gosto de fazer em toda minha vida. Desde a primeira vez que tatuei nesta técnica, nunca mais parei.';

    document.getElementById('profile-card').style.backgroundColor = '';
   
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

// FORTUNE COOKIE API

let fortuneBtn = document.getElementById('fortuneBtn');
fortuneBtn.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fortune-text').innerText = '🔮 ' + data.slip.advice;
        });
});


//TECLA ENTER 

document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    alert("Tens certeza de que queres terminar o exercicio?");
  }
});