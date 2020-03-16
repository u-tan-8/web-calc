const buttonAdd = document.getElementById('button-add');
const buttonSub = document.getElementById('button-sub');
const buttonMul = document.getElementById('button-mul');
const buttonDiv = document.getElementById('button-div');
const box = document.getElementById('box');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

// num1の数値を戻り値としてreturnする処理
const getNum1 = () => {
  return Number.parseFloat(num1.value);
};

  // num2の数値を戻り値としてreturnする処理を書いてください
const getNum2 = () => {
  return Number.parseFloat(num2.value);
};

  // <div id="box">にnumを表示する処理を書いてください
const showResult = (num) => {
  box.textContent = num;
};

buttonAdd.addEventListener('click', () => {
  const result = getNum1() + getNum2();
  showResult(result);
});

buttonSub.addEventListener('click', () => {
  const result = getNum1() - getNum2();
  showResult(result);
});

buttonMul.addEventListener('click', () => {
  const result = getNum1() * getNum2();
  showResult(result);
});

buttonDiv.addEventListener('click', () => {
  const result = getNum1() / getNum2();
  showResult(result);
});