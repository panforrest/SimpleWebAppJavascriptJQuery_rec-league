// your custom app logic goes here:
(function(){

  console.log('HELLO REC LEAGUE!')
  var turbo = Turbo({site_id: '59afc034bca7290011590d56'})

  turbo.fetch('user', null, function(err, data){
  	if (err) {
  	  return
  	}

  	// console.log('CURRENT USERS: '+JSON.stringify(data))
  	var users = data.results

  	var list = ''
  	users.forEach(function(user, i){
  	  list += '<li>'+user.name+'</li>'
  	})

  	$('#current-user-list').html(list)
  })

  $('#btn-add-team').click(function(event){
  	event.preventDefault()
  	var team = {
  	  name: $('#team-name').val(),
  	  city: $('#team-city').val()
  	}

  	console.log('ADD TEAM: '+JSON.stringify(team))

  	turbo.create('team', team, function(err, data){  //turbo.createTeam(team, function(err, data){
  	  if(err){
  	  	alert('Error: '+err.message)
  	  	return
  	  }

  	  console.log('TEAM CREATED: '+JSON.stringify(data))
      window.location.href = '/team#'+data.result.name
  	})
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