// ! scripts specific to index.js
$(document).ready( () => {
  console.log("doc ready - index.js");
  $(".content__linkbox").hide();
  $("#username-x").hide();
  $("#username-check").hide();
  $("button#username-submit").click( () => {
    console.log("button clicked");
  });
});

function handleFormSubmission() {
  console.log("submission intercepted")
  var USERNAME_REGEX = /^[a-zA-Z0-9]\S{2,10}$/
  var user = $("input#username").val();
  if (user.match(USERNAME_REGEX)) {
    // store username in for use when we open the socket later
    window.localStorage.setItem("username", user);
    $("input#username").prop("disabled", true);
    $("button#username-submit").prop("disabled", true);
    $("#username-x").hide(100);
    $("#username-check").show(100);
    $(".content__linkbox").show(100);
  } else {
    $("#username-x").show(100);
  }
  return false;
}