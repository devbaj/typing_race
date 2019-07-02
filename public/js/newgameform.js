$(document).ready( () => {
  console.log('doc ready');
  $("#key-label").hide();
  $("#key").hide();
  $("input[name='privacy']").click( () => {
    console.log('option selected');
    console.log($("input[name='privacy']:checked").val());
   if ($("input[name='privacy']:checked").val() == "private") {
    $("#key-label").show(250);
    $("#key").show(250);
    $("#key").prop('required',true);
    $("#key").prop('disabled',false);
   } else {
    $("#key-label").hide(250);
    $("#key").hide(250);
    $("#key").prop('required',false);
    $("#key").prop('disabled',true);
   }
  });
  $("form#new-game").submit( () => {
  });
});