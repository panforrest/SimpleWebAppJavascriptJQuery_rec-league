(function(){

  var url = window.location.href
  var parts = url.split('#')

  if (parts.length == 1) { //no team specified
  	return
  }

  var teamName = parts[1]
  console.log('HELLO! TEAM Page: '+teamName) //console.log('HELLO! TEAM Page: '+window.location.href)

})()