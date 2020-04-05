document.write("Hell")

// Skip
for (let index = 0; index < 12; index++) {

  if (index === 4) {
    continue
  }
  if (index === 9) {
    break
  }
  document.write(`${index}<br>`)
}

function showAdd(meg="初期Msg"){
  return document.write(`${meg}<br>`)
}

showAdd("moge")
showAdd("hage")
showAdd()
