{
let el = document.querySelector('.code');
el.innerHTML = "code";
const addDiv = document.createElement('div')
addDiv.className = 'sample'
el.appendChild(addDiv);
addDiv.innerHTML = "inner要素"

// get Date
const d = new Date()
const y = d.getFullYear()
const m = d.getMonth() + 1
const w = d.getDay() + 1
const arrW = ["su", "mo", "tu", "we", "th", "fr", "su"]
// document.writeln(d)
// document.writeln(y,m)

const date = new Date();

const year = date.getFullYear();	// 年
const month = date.getMonth() + 1;	// 月
const day = date.getDate();	// 日
const hour = date.getHours();	// 時
const minute = date.getMinutes();	// 分
const second = date.getSeconds();	// 秒
const dayOfWeek = date.getDay();	// 曜日(数値)
const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];	// 曜日(日本語表記)

document.write(`${year}/${month}/${day}/${dayOfWeekStr}`)
document.write(`<br>`)

// if(dayOfWeek == 0){
//   document.write("日曜です")
// }else{
//   document.write("not")
// }

switch (dayOfWeek) {
  case 0:
    document.write("Sun")
    break
  case 1:
    document.write("Mon")
    break
  default:
    document.write("def")
}
}