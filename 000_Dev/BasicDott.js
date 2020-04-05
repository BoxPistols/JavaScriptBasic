{
  document.write("Hell")

  // Skip
  for (let index = 0; index < 12; index++) {

    if (index === 3) {
      continue
    }
    if (index === 5) {
      break
    }
    document.write(`${index}<br>`)
  }

  function showAdd(meg = "初期Msg") {
    return document.write(`${meg}<br>`)
  }

  showAdd("moge")
  showAdd("hage")
  showAdd()

  // 関数宣言
  // sum = (a, b, c) => {
  //   return a + b + c
  // }

  // 関数式
  // const sum = (a, b, c) => {
  //   return a + b + c
  // }

  // to Short
  const sum = (a, b, c) => a + b + c

  const total = sum(12, 4, 3)
  total

  // let el = document.querySelector(".code")
  // el.innerHTML = (total * 2)

  // const double = (a) =>{
  //   return a * 2
  // }
  const double = a => a * 2 + 1
  const dbl =  double(4 * 2)
  document.write(dbl)

}

{
  document.querySelector(".todos ul").addEventListener('click',e=>{
    console.log( e.currentTarget)
    if(e.target.nodeName==='LI'){
      e.target.classList.toggle("moge")
    }
  })
}