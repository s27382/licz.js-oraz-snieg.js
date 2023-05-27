function obliczDzielenie() {
  var a = parseFloat(prompt("Wprowadź liczbę a:"));
  var b = parseFloat(prompt("Wprowadź liczbę b:"));

  if (isNaN(a) || isNaN(b)) {
    alert("Wprowadź poprawne liczby!");
    return;
  }

  if (b === 0) {
    alert("Nie można dzielić przez zero!");
    return;
  }

  var wynik = a / b;
  document.getElementById("dzielenie").textContent = "Wynik dzielenia: " + wynik;
}
