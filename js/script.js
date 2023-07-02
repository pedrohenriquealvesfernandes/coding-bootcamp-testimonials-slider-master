const info = document.querySelector(".info");
const first = document.querySelector(".nome");
const job = document.querySelector(".job");
const img = document.querySelector(".img");
const sliderContainer = document.querySelector(".conjunto");

let val = 0;

const sliderArray = [
    {
        img: "./images/image-tanya.jpg",
        alt: "Tanya",
        informacao: "“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        nome: "Tanya Sinclair",
        emprego: "UX Engineer"
    },
    {
        img: "./images/image-john.jpg",
        alt: "John",
        informacao: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        nome: "John Tarkpor",
        emprego: "Junior Front-end Developer"
    }
]

showArray();
prev();
next();

function prev(){
  document.getElementById('prev').addEventListener('click',function () {
    val--
    if(val < 0){
      val = sliderArray.length - 1
    }
    
    classListController()
    showArray()
  }) 
}

function next(){
  document.getElementById('next').addEventListener('click',function (){
    val++
    if(val == sliderArray.length){
      val = 0
    }

    classListController()
    showArray()
  })
}

function showArray() {

  sliderContainer.innerHTML = `
    
    <img src="${sliderArray[val].img}" alt="${sliderArray[val].alt}" class="img">
      <div class="texto">
        <p class="informacoes">${sliderArray[val].informacao}</p>
        <div class="personal">
          <p class="nome">${sliderArray[val].nome}</p>
          <span class="profissao">${sliderArray[val].emprego}</span>
        </div>
    </div>
    
`;
}


function classListController(){
  document.querySelector(".conjunto").classList.add('u')

  document.getElementById('prev').classList.add('passive')
  document.getElementById('next').classList.add('passive')

  setTimeout(() =>{
    document.getElementById('prev').classList.remove('passive')
    document.getElementById('next').classList.remove('passive')
  
    document.querySelector(".conjunto").classList.remove('u')
  },500)
}