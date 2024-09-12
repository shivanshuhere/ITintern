const output = document.querySelector(".output");
const operation = document.querySelectorAll(".operator");

let a, b, res;
let add, sub, mul, div;
add = sub = mul = div = false;
function selectBtn(e) {
  //   console.log(e);
  let num = e?.target.innerText || e.key;
  switch (num) {
    case "1":
      output.value += "1";
      break;
    case "2":
      output.value += "2";
      break;
    case "3":
      output.value += "3";
      break;
    case "4":
      output.value += "4";
      break;
    case "5":
      output.value += "5";
      break;
    case "6":
      output.value += "6";
      break;
    case "7":
      output.value += "7";
      break;
    case "8":
      output.value += "8";
      break;
    case "9":
      output.value += "9";
      break;
    case "0":
      output.value += "0";
      break;
    case "+":
      a = output.value;
      add = true;
      output.value = "";
      console.log("a :", a, " sum", add);

      break;
    case "-":
      a = output.value;
      sub = true;
      output.value = "";
      console.log("a :", a, " sub", sub);
      break;
    case "*":
      a = output.value;
      mul = true;
      output.value = "";
      console.log("a :", a, " mul", mul);
      break;
    case "/":
      a = output.value;
      div = true;
      output.value = "";
      console.log("a :", a, " div", div);
      break;
    case "AC":
      output.value = "";
      break;
    case "=":
      console.log("b :", output.value);
      b = output.value;
      if (add) {
        res = Number(a) + Number(b);
        a = b = 0;
        output.value = res;
        add = false;
      }
      if (sub) {
        res = Number(a) - Number(b);
        a = b = 0;
        output.value = res;
        sub = false;
      }
      if (mul) {
        res = Number(a) * Number(b);
        a = b = 0;
        output.value = res;
        mul = false;
      }
      if (div) {
        res = Number(a) / Number(b);
        a = b = 0;
        output.value = res;
        div = false;
      }
      break;
    case "Del":
      let str = output.value;
      let newStr = str.slice(0, str.length - 1);
      output.value = newStr;
      break;
    default:
      break;
  }
}

addEventListener("click", selectBtn);

addEventListener("keydown", selectBtn);
