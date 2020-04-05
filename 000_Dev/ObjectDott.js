{
  const arr = [90, 80, 110, 22]
  // document.write(arr)
  arr.push("88") // 接尾追加　< remove end > pop
  arr.unshift("9")　// 接頭追加 < remove start > shift
  // 削除・追加 場所と値の指定
  // arr.splice(1,2, 999,3)
  // document.write(`${arr}<br>`)

  //　スプレッド構文
  otherArr = [22,11,33,55,77]

  // 配列の結合 追加
  mixArr = [arr, ...otherArr]
  document.write(`mix: ${mixArr} <br>`)

  const lg = otherArr.length
  // document.write(lg)
  sum = (a, b, c) => {
    document.write(`sum(...otherArr) -> ${a + b + c}<br>`)
  }
  sum(...otherArr)
}

{
  // 配列の合計
  const arr = [1, 2, 3, 4, 5];
  const res = (arr) =>{
    let sum = 0;
    arr.forEach((elm) =>{
      sum += elm;
    });
    return sum;
  };
  document.write(`arr合計： ${res(arr)}<br>`); // 15
}

{
  // Sort
  let arr = [20, 12, 33, 12, 15, 18, 1, 2]
  arr.sort(function (a, b) {
    // return a > b ? 1 : -1
    // return a - b
    return b - a
  })
  document.write((`Sort: ${arr}<br>`))
}