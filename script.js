function add() {
  let ett = parseInt(document.querySelector("#ett").value);
  let två = parseInt(document.querySelector("#två").value);
  let output_input = document.querySelector("#output");

  let output = parseInt(output_input.value);
  output_input.value = ett + två;
}
function sub() {
  let ett = parseInt(document.querySelector("#ett").value);
  let två = parseInt(document.querySelector("#två").value);
  let output_input = document.querySelector("#output");

  let output = parseInt(output_input.value);
  output_input.value = ett - två;
}
function mul() {
  let ett = parseInt(document.querySelector("#ett").value);
  let två = parseInt(document.querySelector("#två").value);
  let output_input = document.querySelector("#output");

  let output = parseInt(output_input.value);
  output_input.value = ett * två;
}
function div() {
  let ett = parseInt(document.querySelector("#ett").value);
  let två = parseInt(document.querySelector("#två").value);
  let output_input = document.querySelector("#output");

  let output = parseInt(output_input.value);
  output_input.value = ett / två;
}

let städer = ["tirana", "bucarest"];
let länder = ["albanien", "rumänien"];
let slump = parseInt(Math.random() * 7);
