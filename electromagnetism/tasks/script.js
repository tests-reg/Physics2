function z1() {
  document.getElementById("z1").style.display = "block";
  document.getElementById("z1Button").style.display = "none";
}

function z1_x() {
  document.getElementById("z1").style.display = "none";
  document.getElementById("z1Button").style.display = "block";
}

function calculationZ1() {
  var mass = parseFloat(document.getElementsByName("mass")[0].value);
  var length = parseFloat(document.getElementsByName("length")[0].value);
  var induction = parseFloat(document.getElementsByName("induction")[0].value);
  var g = 9.8;
  var l = (mass * g) / (induction * length);

  document.getElementById("solution_z1").textContent =
    "Сила струму, яка повинна бути у провіднику, щоб він завис у магнітному полі = " +
    l.toFixed(2) +
    " A";
}

function z2() {
  document.getElementById("z2").style.display = "block";
  document.getElementById("z2Button").style.display = "none";
}

function z2_x() {
  document.getElementById("z2").style.display = "none";
  document.getElementById("z2Button").style.display = "block";
}

function calculationZ2() {
  var R = parseFloat(document.getElementsByName("resistance_z2")[0].value);
  var S = parseFloat(document.getElementsByName("square_z2")[0].value);
  var B = parseFloat(document.getElementsByName("induction_z2")[0].value);
  var q = (2 * B * S) / R;

  document.getElementById("solution_z2").textContent =
    "Заряд q, який протече по рамці, буде рівний: " + q.toFixed(2);
}

function z3() {
  document.getElementById("z3").style.display = "block";
  document.getElementById("z3Button").style.display = "none";
}

function z3_x() {
  document.getElementById("z3").style.display = "none";
  document.getElementById("z3Button").style.display = "block";
}

function calculationZ3() {
  var B = parseFloat(document.getElementsByName("induction_z3")[0].value);
  var I_0 = parseFloat(document.getElementsByName("amperage_0")[0].value);
  var I_1 = parseFloat(document.getElementsByName("amperage_1")[0].value);
  var Q = (B / 2) * (I_0 ** 2 - I_1 ** 2);

  document.getElementById("solution_z3").textContent =
    "Енергія Q яка виділиться за перші 20мс = " + Q.toFixed(2) + " Дж";
}