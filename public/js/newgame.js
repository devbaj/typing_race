// ! scripts specific to newgame.ejs
const socket = io();
var charString = "abcdefghijklmnopqrstuvwxyz0123456789";
var key = "";
for (let i = 0; i < 8; i++)
{
  let idx= Math.floor(Math.random() * charString.length);
  key += charString[idx];
}

$(document).ready( () => {
  console.log('doc ready');

  // hide and disable key input field by default
  $("input#public").prop("checked", true);
  $("#key-label").hide();
  $("#key").hide();
$("#key").html(key);

  // check to perform when user clicks on a privacy input button
  $("input[name='privacy']").click( () => {
    console.log('option selected');
    console.log($("input[name='privacy']:checked").val());

   if ($("input[name='privacy']:checked").val() == "private") {
    // if private game selected, show 'key' input field and make it required
    $("#key-label").show(250);
    $("#key").show(250);
   } else {
    // if 'public' selected, re-hide key field, unrequire it, and disable it
    $("#key-label").hide(250);
    $("#key").hide(250);
   }
  });
});

// take over form submission
function handleFormSubmission() {
  console.log("submission intercepted");
  var user = window.localStorage.getItem("username");
  var privacyLevel = $("input[name='privacy']:checked").val();
  var isPrivate = privacyLevel == "private" ? true : false;
  console.log("Privacy Level: " + privacyLevel);
  // different socket behavior for public vs private game
  if ( isPrivate ) {
    socket.emit("createPrivateGame", {user, key});
    window.location.href = "/game/await";
  } else {
    socket.emit("createPublicGame", {user});

  }
  return false;
}