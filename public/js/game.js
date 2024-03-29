const socket = io();

$(document).ready( () => {
  console.log("page ready - game.js");
  $("#opponent").prop("disabled", true);
  $("#opponent").val("");
  $("#userbox").val("");
  var text;
  chooseText()
    .then( template => {
      console.log(template);
      text = template;
      $("#sampleText").html(template);
    })
    .catch( err => {
      console.log("error: " + err);
    });

  // Listen for user input
  $("#userbox").keyup( () => {
    var userInput = $("#userbox").val();
    var status = userInputIsAccurate(text, userInput);
    if (userInputIsAccurate(text, userInput)) {
      $("#userbox").css({"border-color": "green"});
    } else {
      $("#userbox").css({"border-color": "red"});
    }
    if (userInput.length == text.length && status) {
      console.log("done");
      endUserInput();
    }
    socket.emit("gameInput", {text: userInput});
  });
});

socket.on("addText", payload => {
  $("#opponent").val(payload.text);
});
socket.on("opponentFinish", () => {
  $("#opponent-status").html("Opponent is done!");
});
socket.on("newPlayer", data => {
  alert("new player joined");
})

// ** game logic goes here
// todo: eventually we will have semirandom blocks of text (API for this?)
async function chooseText() {
  var ISBN = "ISBN:0007322607";
  var template = await getBookInfo(ISBN);
  console.log("template info from inside async function" +template);
  return template;
}

function getBookInfo(isbn) {
  return new Promise( resolve => {
    $.ajax("https://openlibrary.org/api/books?bibkeys="
      + isbn + "&jscmd=data&format=json")
      .done( data => {
        console.log(data);
        var sampleText = data[isbn].excerpts[0].text;
        console.log(sampleText);
        resolve(sampleText);
      });
  });
}

function userInputIsAccurate(text, userText) {
  var progress = userText.length;
  var slicedTemplate = text.slice(0, progress);
  return userText == slicedTemplate ? true : false;
}

function endUserInput() {
  $("#userbox").prop("disabled", true);
  socket.emit("userFinish");
}