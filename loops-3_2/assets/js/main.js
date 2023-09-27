// * Aufgabe 3_2 ******************************************

// Aufgabe:

// Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// Schreibe das Ergebnis in dein HTML.
// Das Array findest du im Code-Snippet!

let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < numArr.length; i++) {
  //  - einzelne zahlen aus numArr abrufen:
  let num = numArr[i];
  let divisor = [];
  //
  // - alle werte >1 durch die sich num ohne rest teilen lässt finden & in array pushen:
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      divisor.push(j);
    }
  }
  // - prüfen ob werte im array sind:
  if (divisor.length > 0) {
    // console.log(num);

    // - result ausrechnen und werte in einem array speichern:
    const result = divisor.map((x) => num / x);
    // console.log("divisor:", divisor);

    // - output generieren und für alle elemente in den arrays im html ausgeben
    let output = document.getElementById("text");
    for (let i = 0; i < divisor.length; i++) {
      output.innerHTML += `${num} is dividable by ${divisor[i]}. The result it: ${result[i]}</br> `;
    }
    // console.log("result:", result);
  }
}
