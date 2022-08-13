// forEachを用いた実装法
const setTargetStudents = studentNumber => {
  let studentNumberList = [];

  for (let i = 1; i <= studentNumber; i++) {
    studentNumberList.push(i);
  }
  const absenteeNumbers = document.querySelector("#absence").value;
  const absenteeNumberList = absenteeNumbers.split(",").map((value) => {
    return parseInt(value);
  })
  studentNumberList = studentNumberList.filter((value, index, array) => {
    return !absenteeNumberList.includes(value);
  })
  return studentNumberList;
}

const shuffleArray = studentNumberList => {
  for (let i = studentNumberList.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = tmp;
  }
  return studentNumberList;
}

const showSeatBoxes = shuffleStudent => {
  let htmlStr = "";
  shuffleStudent.forEach((val) => {
    htmlStr += `<div class="seat__item">${val}</div>`
  })
  document.querySelector("#seat").innerHTML = htmlStr;
}

const soundPlay = timer => {
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener("ended", () => {
    clearInterval(timer)
  })
}


document.getElementById("btn-start").addEventListener("click", () => {
  const studentNumber = document.querySelector("#studentNumber").value;
  const studentNumberIsEmpty = studentNumber === "";
  const studentUpperlimit = 50;

  if (studentNumberIsEmpty) {
    alert("人数が未入力です。入力してからスタートボタンを押してください");
    return false;
  }

  if (studentNumber > studentUpperlimit) {
    alert(`人数は${studentUpperlimit}人以内にしてください!`);
    return false;
  }
  const studentNumberList = setTargetStudents(studentNumber);
  document.querySelector(".c-overlay").classList.add("is-closed");
  const timer = setInterval(() => {
    const shuffleStudent = shuffleArray(studentNumberList);
    showSeatBoxes(shuffleStudent);
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
