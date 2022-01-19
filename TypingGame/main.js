"use strict";

{
  function setWord() {
    //word = words[Math.floor(Math.random() * words.length)];
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    //ランダムな位置から1個削除、[0]添え字
    target.textContent = word;
    loc = 0;
  }

  const words = ["red", "blue", "green", "yellow", "shine"];
  //const word = "red";
  let word; //変数にしておく
  let loc = 0;
  let startTime;
  const target = document.getElementById("target");
  // word = words[Math.floor(Math.random() * words.length)];
  // target.textContent = word;
  //setWord();
  //setWordを使う

  document.addEventListener("click", () => {
    startTime = Date.now();
    //clickしたら次の処理をする
    setWord();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== word[loc]) {
      return;
    }
    //↑のことは早期リターン
    //if (e.key === word[loc]) {
    loc++;

    target.textContent = "_".repeat(loc) + word.substring(loc);
    //＿をlocの文字列分表示させる //substring()→loc番目以降の文字を取り出す
    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById("result");
        result.textContent = "Finished! ${elapsedTime} seconds!";
        return;
        //それ以降処理しない
      }

      setWord();
      //locがwordのlengthと同じだったら、次にいく
    }
  });
}
