$(document).ready(function() {

	URL = 'https://api.foursquare.com/v2/venues/explore';

	function getRequest(userInput, sectionType) {
		var sectionName = sectionType;
		var params = {
			near: userInput,
			query: sectionType,
			limit: 5,
			radius: 500,
			client_id: 'QIWNWWTNLDX5SILZLFP0U4RDMQTSRVVN02YVDLAZC5TH5OVH',
			venuePhotos: 1,
			v: Date.now(),
			client_secret: 'FHBPGACKE12LS2PMTJK54JNR3UESGC0PPIDWWSMS1UFAKA1J',
		};


		$.getJSON(URL, params, function(data) {
   			 for (var i = 0; i < data.response.groups[0].items.length; i++) {
   			 	if (data.response.groups[0].items[i].venue.photos.count == 1){
   			 		// $('#results-' + sectionName).append("<p class='card-image'><img src='" + data.response.groups[0].items[i].venue.photos.groups[0].items[0].prefix + '75x75' + data.response.groups[0].items[i].venue.photos.groups[0].items[0].suffix + "'></p>");
   			 	}
   			 	else {
   			 		// $('#results-' + sectionName).append("<p class='card-image'><img src='" + data.response.groups[0].items[i].venue.categories[0].icon.prefix + '88' + data.response.groups[0].items[i].venue.categories[0].icon.suffix + "'></p>");
 
   			 	}
  
				// $('#results-' + sectionName).append("<p><a href='https://foursquare.com/v/" + data.response.groups[0].items[i].venue.id + "' target='_blank'>" + data.response.groups[0].items[i].venue.name + "</a></p>");
		        if (typeof data.response.groups[0].items[i].venue.rating !== "undefined"){
		        	// $('#results-' + sectionName).append("<p>" + data.response.groups[0].items[i].venue.rating + "</p>");
		        }
		       	// $('#results-' + sectionName).append("<p>" + data.response.groups[0].items[i].venue.categories[0].name + "</p>");
		        if (typeof data.response.groups[0].items[i].venue.price !== "undefined" ) {
		        	// $('#results-' + sectionName).append("<p>Price: " + data.response.groups[0].items[i].venue.price.message + "</p>")
		        	;};		       	
		        if (typeof data.response.groups[0].items[i].tips !== "undefined"){
		        	// $('#results-' + sectionName).append("<p>" + data.response.groups[0].items[i].tips[0].text + "</p>");
		        }

				}
			})
			};

	$('#location-form').submit(function(e){
		e.preventDefault();
		//$('div.container').toggleClass('hidden', true);
		$('.row div').html('');
		var userInput = $('#location-form input').val();
		getRequest(userInput, 'food');
		getRequest(userInput, 'fun');
		getRequest(userInput, 'hotel');
		$('div.container').toggleClass('hidden', false);
	})

});