const grid = document.querySelector(".grid");
const botao = document.querySelector(".botao");  
// var corretos = [10, 2, 4];

const randomNum = () => {
    const random = Math.floor(Math.random() * 20);
    console.log(random);
}
randomNum();

const nums = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createButton = (nums) => {
    const divbtt = createElement('div', 'div-btt');
    const botao = createElement('div', 'botao');

    // botao.style.backgroundImage = `url('/images/riddle.jpg')`;
    botao.innerHTML = `${nums}`;  

    divbtt.appendChild(botao);
    // grid.appendChild(divbtt);

    divbtt.setAttribute('data-num', nums);

    return divbtt;
}
// createButton();

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// const checkCorrect = () => {
//     if(randomNum.includes(this.value)){
//         this.value.backgroudColor = "green";
//     }else{
//         this.value.backgroudColor = "red";
//     }
// }

const createRandomNums = () => {

    const numeros = [...nums];

    const shuffledArray = numeros.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((nums) => {

        const divbtt = createButton(nums);
        grid.appendChild(divbtt);

    })
}
// createRandomNums();

function load() {   
    createButton();
    createRandomNums();
    const startgame = document.querySelector(".start-game");
    startgame.style.top = "92.1%";

    const restart = document.getElementById("btt2");
    restart.style.marginTop = "37px"
    
    const start = document.getElementById("btt1");
    start.parentNode.removeChild(start);
    return false;

}
function reset() {
    location.reload();
    return false;
}