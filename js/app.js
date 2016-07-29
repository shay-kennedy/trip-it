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
			showDestination(data);
		})

	};

	$('#location-form').submit(function(e){
		e.preventDefault();
		var userInput = $('#location-form input').val();
		var sectionType = 'restuarant';
		getRequest(userInput, sectionType);
	})

	var showDestination = function(data) {

	// clone our result template code
	//var result = $('.result .destination').clone();

	$.each(data, function(index, data){
		//$('.destination-name').text(data.response.groups[0].items[index].venue.name);
		console.log(data.response.groups[0].items[index].venue.name);
	});

	// Set the question properties in result

	//return result;
};

})