document.getElementById("btn").onclick = function () {
  num1 = document.getElementById("son1").value;
  sel = document.getElementById("sel").value;
  num2 = document.getElementById("son2").value;

  document.getElementById("text").innerHTML = eval(num1 + sel + num2);
}