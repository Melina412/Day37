// * Aufgabe 3_3 ******************************************

// Aufgabe:

// Du verfeinerst deine "Loooooop"-Aufgabe:
// Jetzt soll eine Fehlermeldung ausgegeben werden, wenn der/die User:in 0 eingibt.
// Zusätzlich soll überprüft werden, ob eine gerade (!) Zahl eingegeben wurde. Wenn das der Fall ist, wird das Wort "Loop" ganz normal mit der eingegeben Anzahl an "o"-Buchstaben ausgegeben. Bsp: // input: 4 output: Loooop
// Wenn die Zahl ungerade (!) ist, sollen sich die Buchstaben "o" und die Zahl "0" in der Ausgabe abwechseln. Bsp: // input: 5 output: Lo0o0op

function loopMeAgain() {
  let number = Number(document.getElementById("numberInput").value);
  const letter = "o";
  const letter_uneven = "0" + letter;
  //   - für zahlen größer 1 und 1000 (um ressourcen zu sparen)
  if (number > 1 && number <= 1000) {
    //
    // * für gerade zahlen
    if (number % 2 === 0) {
      let repetition = letter.repeat(number);
      text.innerHTML = `L${repetition}p`;
      invalid.innerHTML = "";
      //
      // * für ungerade zahlen
    } else if (number % 2 !== 0) {
      let repetition = letter_uneven.repeat(number / 2);
      text.innerHTML = `Lo${repetition}p`;
      invalid.innerHTML = "";
    }
    // - sonderfall: zahl ist 1
  } else if (number === 1) {
    text.innerHTML = `L0p`;
    invalid.innerHTML = "";
    //
    // - sonderfall: zahl ist 0
  } else if (number === 0) {
    invalid.innerHTML =
      "Invalid input. Please enter a number between 1 and 1000.";
    text.innerHTML = "";
  }
}
