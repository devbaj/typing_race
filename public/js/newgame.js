// ! scripts specific to newgame.ejs

$(document).ready( () => {
  console.log('doc ready');

  // hide and disable key input field by default
  $("#key-label").hide();
  $("#key").hide();
  $("#key").prop('disabled',true);

  // check to perform when user clicks on a privacy input button
  $("input[name='privacy']").click( () => {
    console.log('option selected');
    console.log($("input[name='privacy']:checked").val());

   if ($("input[name='privacy']:checked").val() == "private") {
    // if private game selected, show 'key' input field and make it required
    $("#key-label").show(250);
    $("#key").show(250);
    $("#key").prop('required',true);
    $("#key").prop('disabled',false);
   } else {
    // if 'public' selected, re-hide key field, unrequire it, and disable it
    $("#key-label").hide(250);
    $("#key").hide(250);
    $("#key").prop('required',false);
    $("#key").prop('disabled',true);
   }
  });
  // TODO: take over submission process to create new socket room
  // ? replace with non-submit button and check for click?
  $("form#new-game").submit( () => {
  });
});