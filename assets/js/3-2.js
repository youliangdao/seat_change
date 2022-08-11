// ulタグのDOMにappendして要素を反復処理で追加していく
// 九州地方の都道府県名を配列に格納しておき、その各要素にアクセスして処理していく
//  反復処理内の処理
//  <li> + 各都道府県名 + </li>で要素を文字列として作成
//  文字列を<ul>にinnerHTMLしていく形で処理

let htmlStr = "";
const prefectureList = document.getElementById("prefecture-list");
const kyushuPrefecture = ["福岡県", "大分県", "宮崎県", "熊本県", "佐賀県", "長崎県", "鹿児島県"];
kyushuPrefecture.forEach((val) => {
  htmlStr = htmlStr + `<li>${val}</li>`;
})
prefectureList.innerHTML = htmlStr;
