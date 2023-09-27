// * Aufgabe 2_2 ******************************************

// Aufgabe:

// In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.
// Hinweis:
// Du wirst mit einem Array arbeiten müssen. // --> man kann mit einem arbeiten oder nicht
// Nutze einen Loop und eine Array-Methode, um an einer bestimmten Stelle das neue Element hinzuzufügen.
// Wandle das Array am Ende in einen String um.

function loopMe() {
  let number = Number(document.getElementById("numberInput").value);
  const letter = "o";
  //
  if (number > 0 && number <= 1000) {
    let repetition = letter.repeat(number);
    text.innerHTML = `L${repetition}p`;
  } else {
    text.innerHTML = "";
  }
}
