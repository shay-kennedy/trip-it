$(document).ready(function() {

	URL = 'https://api.foursquare.com/v2/venues/explore';

	function getRequest(userInput, sectionType) {
		var params = {
			near: userInput,
			query: sectionType,
			limit: 5,
			radius: 500,
			v: Date.now(),
			client_id: 'QIWNWWTNLDX5SILZLFP0U4RDMQTSRVVN02YVDLAZC5TH5OVH',
			client_secret: 'FHBPGACKE12LS2PMTJK54JNR3UESGC0PPIDWWSMS1UFAKA1J',
		};


		$.getJSON(URL, params, function(data) {
			// var resultEntry;
			console.log('Hello world!');
			console.log(data.response.groups[0].items[0].venue.name);
			//$('#results-food').append("<p>" + data.response.groups[0].items[0].venue.name + "Hello! </p>");
   			 for (var i = 0; i < data.response.groups[0].items.length; i++) {
		        $('#results-food').append("<p>" + data.response.groups[0].items[i].venue.name + "</p>");
		        $('#results-food').append("<p>" + data.response.groups[0].items[i].venue.rating + "</p>");
		        $('#results-food').append("<p>" + data.response.groups[0].items[i].tips[0].text + "</p>");
		        $('#results-food').append("<p><img src='" + data.response.groups[0].items[i].venue.categories[0].icon.prefix + data.response.groups[0].items[i].venue.categories[0].id + data.response.groups[0].items[i].venue.categories[0].icon.suffix + "'></p>");
		       // $('#results-food').append(resultEntry);
				}
			})
			};

	$('#location-form').submit(function(e){
		e.preventDefault();
		$('#results div').html('');
		var userInput = $('#location-form input').val();
		var sectionType = 'restuarant';
		getRequest(userInput, sectionType);
	})

});