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
    
    var turbo = Turbo({site_id: '59afc034bca7290011590d56'})
    turbo.createUser(user, function(err, data){
      if(err){
      	alert('Error: '+err.message)
      	return
      }

      console.log('USER CREATED: '+JSON.stringify(data))
    })

  })

})()