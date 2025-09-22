function failFunction(str) {
  let i = 0;
  // 第一个失效值总是 0
  let failArr = [0];
  for (let s = 1; s < str.length; s++) {
    console.log(`s: ${s} i ${i}`);
    while (i > 0 && str[i] !== str[s]) {
      i = failArr[i - 1];
    }
    if (str[i] === str[s]) {
      i++;
    }
    failArr[s] = i;
  }
  return failArr;
}

function kmp() {
  let;
}
const s = "ababaa";
let res = failFunction(s);
console.log(res);
