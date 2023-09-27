// * Aufgabe 1_1 ******************************************

console.log(
  "%c ~~~~~ Aufgabe 1_1 ~~~~~",
  "background-color: palevioletred; color: white"
);

// Aufgabe:
// Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

let number = 0;
for (let i = 0; i < 10; i++) {
  number = number + 1;
  console.log("Hello World " + number);
}
// wenn alle steps ausgegeben werden sollen, dann log innerhlab des loops

// * Aufgabe 1_2 ******************************************

console.log(
  "%c ~~~~~ Aufgabe 1_2 ~~~~~",
  "background-color: palevioletred; color: white"
);

// Aufgabe:
// Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// Wenn du mit Arrays arbeitest, musst du das Array initialisieren (let numArray = [];)"
// Verwende den Befehl "push()" im Schleifenkörper.
// Gib zum Schluss die Variable numArray in der Konsole aus.

let numArray = [];

for (let i = 1; i < 11; i++) {
  numArray.push(i);
}
console.log(numArray);
// wenn nur der leztzte step ausgegeben werden sollen, dann log außerhalb des loops

// * Aufgabe 1_4 ******************************************

console.log(
  "%c ~~~~~ Aufgabe 1_4 ~~~~~",
  "background-color: palevioletred; color: white"
);

// Aufgabe:
// Deklariere ein Array "names" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"
// Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// * Aufgabe 2_1 ******************************************

console.log(
  "%c ~~~~~ Aufgabe 2_1 ~~~~~",
  "background-color: palevioletred; color: white"
);

// Aufgabe:
// Stell dir vor, du hast 100 Bilder in deinem Ordner. Um die Dateinamen zu standardisieren, erstelle dir ein Array der Bilder.
// Gib in der Konsole image_001.jpg bis image_100.jpg aus.
// Deklariere die Funktion imageArray. Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// Schreibe anschließend eine for-Schleife und nutze push() und Conditional Statements (if, else if, else).
// Lass dir returnArray in der Konsole ausgeben.

// - mit Funktion
//
function imageArray() {
  let returnArray = [];

  for (let i = 1; i < 101; i++) {
    if (i < 10) {
      let img_name = `image_00${i}.jpg`;
      returnArray.push(img_name);
    } else if (i > 9 && i < 100) {
      let img_name = `image_0${i}.jpg`;
      returnArray.push(img_name);
    } else if (i == 100) {
      let img_name = `image_${i}.jpg`;
      returnArray.push(img_name);
    }
  }
  return returnArray;
}

console.log(imageArray());
