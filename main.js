let x = document.getElementById("input");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var res = document.getElementById("reset");

inc.addEventListener("click", function () {
  x.value = parseInt(x.value) + 1;
});
dec.addEventListener("click", function () {
  x.value = parseInt(x.value) - 1;
});

res.addEventListener("click", function () {
  x.value = 0;
});
