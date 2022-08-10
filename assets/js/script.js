const seat = document.querySelector("#seat");
let htmlStr = "";
for (let i = 1; i < 19; i++) {
  htmlStr += '<div class="seat__item">' + i + '</div>'
}

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

seat.innerHTML = htmlStr;
