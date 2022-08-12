// forEachを用いた実装法
const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const shuffleArray = function () {
  for (let i = studentNumbers.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumbers[i - 1];
    studentNumbers[i - 1] = studentNumbers[randomNum];
    studentNumbers[randomNum] = tmp;
  }
}

const showSeatBoxes = function () {
  let htmlStr = "";
  studentNumbers.forEach((val) => {
    htmlStr += '<div class="seat__item">' + val + '</div>'
  })
  document.querySelector("#seat").innerHTML = htmlStr;
}

const soundPlay = function (timer){
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener("ended", () => {
    clearInterval(timer)
  })
}

document.getElementById("btn-start").addEventListener("click", () => {
  document.querySelector(".c-overlay").classList.add("is-closed");
  const timer = setInterval(function(){
    shuffleArray();
    showSeatBoxes();
  }, 50);

  soundPlay(timer);
})

// for文を用いた実装法
// let htmlStr = "";
// for (let i = 1; i < 19; i++) {
//   htmlStr += '<div class="seat__item">' + i + '</div>'
// }
// seat.innerHTML = htmlStr;

// 一番原始的な実装方法
// const htmlStr = `
//       <div class="seat__item">1</div>
//       <div class="seat__item">2</div>
//       <div class="seat__item">3</div>
//       <div class="seat__item">4</div>
//       <div class="seat__item">5</div>
//       <div class="seat__item">6</div>
//       <div class="seat__item">7</div>
//       <div class="seat__item">8</div>
//       <div class="seat__item">9</div>
//       <div class="seat__item">10</div>
//       <div class="seat__item">11</div>
//       <div class="seat__item">12</div>
//       <div class="seat__item">13</div>
//       <div class="seat__item">14</div>
//       <div class="seat__item">15</div>
//       <div class="seat__item">16</div>
//       <div class="seat__item">17</div>
//       <div class="seat__item">18</div>
// `;
// seat.innerHTML = htmlStr;
