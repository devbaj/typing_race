$(document).ready( () => {
  console.log('doc ready - index.js');
  var socket = io();

  $('.content__linkbox').hide();
  $('#username-x').hide();
  $('#username-check').hide();
  $('button#username-submit').click( () => {
    console.log('button clicked');

    var user = $('input#username').val();
    var USERNAME_REGEX = /^[a-zA-Z0-9]\S{2,10}$/

    if (user.match(USERNAME_REGEX)) {
      socket.emit('userJoined', {user});
      $('input#username').prop('disabled', true);
      $('button#username-submit').prop('disabled', true);
      $('#username-x').hide(100);
      $('#username-check').show(100);
      $('.content__linkbox').show(100);
    } else {
      $('#username-x').show(100);
    }
  });
})