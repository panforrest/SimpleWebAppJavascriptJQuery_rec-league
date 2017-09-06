// your custom app logic goes here:
(function(){

  console.log('HELLO REC LEAGUE!')

  $('#btn-add-user').click(function(event){
  	event.preventDefault()
    var user = {
      name: $('#user-name').val(),
      email: $('#user-email').val()
    }

  	console.log('ADD USER: '+JSON.stringify(user))
  })

})()