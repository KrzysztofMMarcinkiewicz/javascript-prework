function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

var kamie_C5_84 = "kamień";

var playerMove = "papier";
printMessage(
  "Zagrałem " +
    kamie_C5_84 +
    "! Jeśli Twój ruch to " +
    playerMove +
    ", to wygrywasz!"
);

var randomNumber;
randomNumber = Math.ceil(Math.random() * 3 + 1);
printMessage("Wylosowana liczba to: " + randomNumber);
if (randomNumber == "1") {
  computerMove = "kamień";
} else if (randomNumber == "2") {
  computerMove = "papier";
} else if (randomNumber == "3") {
  computerMove = "nożyce";
} else {
  computerMove = "nieznany ruch";
}
printMessage("Mój ruch: " + computerMove);
