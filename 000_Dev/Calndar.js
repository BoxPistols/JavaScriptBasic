{
  /*
    const 定数
    let 変数
  */

  // const d = new Date()
  // const y = d.getFullYear()
  // const m = d.getMonth() + 1
  // const w = d.getDay() + 1
  // const arrW = ["su", "mo", "tu", "we", "th", "fr", "su"]
  // document.writeln(d)
  // document.writeln(y,m)

  const date = new Date();

  const year = date.getFullYear();	// 年
  const month = date.getMonth();	// 月
  const day = date.getDate();	// 日;
  const hour = date.getHours();	// 時
  const minute = date.getMinutes();	// 分
  const second = date.getSeconds();	// 秒
  const dayOfWeek = date.getDay();	// 曜日(数値)
  const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];	// 曜日(日本語表記)
  const week = ["日", "月", "火", "水", "木", "金", "土"]

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, `${month + 1}`, 0)
  const firstWeek = firstDay.getDay()

  document.write(`<p>${year}/${month + 1}/${day}/${dayOfWeekStr} </p><br>`)

  document.write(`<div class="clalArea">`)

  // Week View
  document.write(`<div class="weeks">`)
  for (let index = 1; index < lastDay.getDate() + 1; index++) {
    document.write(`<div class="week">(${week[(firstWeek + index - 1) % 7]}) </div>`)
  }
  document.write(`</div>`)

  // document.write(`<div class=""> <br><br> </div>`)

  // day View
  document.write(`<div class="days">`)
  for (let index = 1; index < lastDay.getDate() + 1; index++) {
    // let r = index % 7 document.write(`<span>(${week[(firstWeek + index - 1) % 7]}) </span>`)

    if (index % 7 == 0) {
      document.write(`<div class="break"></div>`)
    }else{
    document.write(`<div class="day">`)
    if (week[(firstWeek + index - 1) % 7] == "日" || week[(firstWeek + index - 1) % 7] == "土") {
      document.write(`<span class="weekEnd">${index}</span>`)
      // document.write(`<span class="weekEnd">(${week[(firstWeek + index - 1) % 7]}) </span>`)
    } else {
      document.write(`<span>${index}</span>`)
      // document.write(`<span>(${week[(firstWeek + index - 1) % 7]}) </span>`)
    }
    document.write(`</div>`)
  }
  }
  document.write(`</div>`)

  switch (week[i]) {
    case i == 0:
      this.span.classList.add("Sun")
      break
    case i == 1:
      this.span.classList.add("Sat")
      break
    default:
      // document.write("")
  }
  // document.write(`<br>`)

  // if(dayOfWeek == 0){
  //   document.write("日曜です")
  // }else{
  //   document.write("not")
  // }


}