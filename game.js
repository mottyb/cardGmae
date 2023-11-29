// cards array
let mainArray = ['one', 'two', 'three', "Four", 'five', 'six']

// shuffle function
function shuffle(mainArray) {  
const reslut = mainArray.sort((a, b) => 0.5 - Math.random())
   return reslut
}

// init function
function init() {
    const arrayAfterShuffling = shuffle(mainArray.concat(mainArray));
    const boardElement =document.getElementsByClassName("board")[0];   

    arrayAfterShuffling.forEach((cardValue)=>{
        const cardElement =document.createElement("div");
        cardElement.className = "card";
        cardElement.value = cardValue;
        cardElement.onclick = (e) => {
            cardElement.innerText = e.target.value;
        }
        boardElement.appendChild(cardElement);

    });
};

init();
