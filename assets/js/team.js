(function(){

  var url = window.location.href
  var parts = url.split('#')

  if (parts.length == 1) { //no team specified
  	return
  }

  var teamName = parts[1]
  console.log('HELLO! TEAM Page: '+teamName) //console.log('HELLO! TEAM Page: '+window.location.href)

  var turbo = Turbo({site_id: '59afc034bca7290011590d56'})

  turbo.fetch('team', {name: teamName}, function(err, data){
  	if(err){
  	  alert('Error: '+err.message)
  	  return
  	}

  	if (data.results.length == 0){ //team not found
      alert('Error: Team not found.')
      return
  	}

    console.log('TEAM: '+JSON.stringify(data))

    var team = data.results

  	var list = ''
  	team.forEach(function(team, i){
  	  list += '<li>'+team.name+'</li>'
  	})

  	$('#current-team').html(list)

  })

})()