// your custom app logic goes here:
(function(){

  console.log('HELLO REC LEAGUE!')
  var turbo = Turbo({site_id: '59afc034bca7290011590d56'})

  turbo.fetch('user', null, function(err, data){
  	if (err) {
  	  return
  	}

  	console.log('CURRENT USERS: '+JSON.stringify(data))
  	var users = data.results

  	var list = ''
  	users.forEach(function(user, i){
  	  list += '<li>'+user.name+'</li>'
  	})

  	$('#current-user-list').html(list)
  })

  $('#btn-add-user').click(function(event){
  	event.preventDefault()
    var user = {
      name: $('#user-name').val(),
      email: $('#user-email').val()
    }

  	console.log('ADD USER: '+JSON.stringify(user))
    
    
    turbo.createUser(user, function(err, data){
      if(err){
      	alert('Error: '+err.message)
      	return
      }

      console.log('USER CREATED: '+JSON.stringify(data))
    })

  })

})()