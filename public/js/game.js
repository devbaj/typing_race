const socket = io();

$(document).ready( () => {
  console.log("page ready - game.js");
  $("#opponent").prop("disabled", true);
  $("#opponent").val("");
  $("#userbox").val("");
  var template = chooseText();
  $("#sampleText").html(template);

  // Listen for user input
  $("#userbox").keyup( () => {
    var userInput = $("#userbox").val();
    var status = userInputIsAccurate(template, userInput);
    if (userInput.length == template.length && status) {
      console.log("done");
      endUserInput();
    }
    socket.emit("gameInput", {text: userInput});

  })
});

socket.on("addText", payload => {
  $("#opponent").val(payload.text);
});
socket.on("opponentFinish", () => {
  $("#opponent-status").html("Opponent is done!");
})


// ** game logic goes here
// todo: eventually we will have semirandom blocks of text (API for this?)
// todo: evaluate accuracy SO FAR
function chooseText() {
  // ! placeholder for now
  var sampleText = "Lorem ipsum and all the rest etc etc";
  return sampleText;
}

function userInputIsAccurate(text, userText) {
  var progress = userText.length;
  var slicedTemplate = text.slice(0, progress);
  if (userText == slicedTemplate) {
    $("#status").html("good");
    return true;
  } else {
    $("#status").html("bad");
    return false;
  }
}

function endUserInput() {
  $("#userbox").prop("disabled", true);
  socket.emit("userFinish");
}