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
  "Zagrałem " + kamie_C5_84 + "! Jeśli Twój ruch to playerMove, to wygrywasz!"
);
