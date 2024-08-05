const text = document.querySelector('#text')
const blocks = document.querySelectorAll('.block')
const block = document.querySelector('.block')
const loadingAreaGrey = document.querySelector('#loading')
const loadingText = document.querySelector('#loading p')
const countB = document.querySelector('.squares-taken')
const startButton = document.querySelector('.strat-button')
const countNumber = document.querySelector(".match-time")
const max = 1000;
let isClicked = false;
let currentPlayer = block.querySelectorAll('p')

window.addEventListener('load' , () =>{
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 3000,
      delay: 1200,  
      easing: 'ease',
      fill: 'forwards'
    },
);
  loadingText.animate(
    {
      opacity:[1, 0]
    },
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    },
  )
})

let i = 0
countB.innerHTML = `📁 ${i++}`


startButton.addEventListener('click', () => {
  if(!isClicked){
    isClicked = true;
    countTime(countNumber, max);
    startButton.innerHTML =  `<button>⏹️ Pause</button>`
    text.textContent =  'Your Turn'
  } else {
    startButton.innerHTML =  `<button>➡️ Play </button>`
  }
});
blocks.forEach(block => {
  block.addEventListener('mouseover', () => {
    block.animate({opacity: [0, 1]}, 1000)
    })
  block.addEventListener('click', () => {
    i = 0
    if(text.textContent === 'Your Turn') {
      text.textContent = 'My Turn'
      currentPlayer.textContent = 'X'
      i++
      countB.innerHTML = `📁 ${i}`
    } else {
      text.textContent = currentPlayer.textContent === 'X' ? 'Your Turn' : 'My Turn';
      currentPlayer.textContent === 'X' ? 'O' : 'X';
      i++
      countB.innerHTML = `📁 ${i}`
    } 
  });
});
function countTime(countNumber, max) {
  max = 1;
  const handle = setInterval(() => {
    countNumber.innerHTML = `⌛ ${Math.ceil(max++)}`;
    if (max > 1000) {
      clearInterval(handle);
    }
  }, 1000)  
}
