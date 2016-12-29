$(document).ready(function() {

	URL = 'https://api.foursquare.com/v2/venues/explore';

	function getRequest(userInput, sectionType) {
		var sectionName = sectionType;
		// Params for API request
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
 			console.log(data.response);
 			var results = data.response.groups[0].items;
 			console.log(results);
 			for (var i = 0; i < results.length; i++) {
 			 	// Cloning hidden html setup
 			 	var destination = $('#templates div.destination').clone();

 			 	// Setting location name, link, and category
 			 	destination.find('.title a')
 			 		.text(results[i].venue.name);
 			 	destination.find('.title a')
 			 		.attr('href', 'https://foursquare.com/v/' + results[i].venue.id);
 			 	destination.find('.category')
 			 		.text(results[i].venue.categories[0].name);

 			 	// If location has photo use photo, if not use general category icon
 			 	if (results[i].venue.photos.count == 1){
 			 		destination.find('.card-image img')
 			 			.attr('src', results[i].venue.photos.groups[0].items[0].prefix + '75x75' + results[i].venue.photos.groups[0].items[0].suffix);
 			 	} else {
 			 		destination.find('.card-image img')
 			 			.attr('src', results[i].venue.categories[0].icon.prefix + '88' + results[i].venue.categories[0].icon.suffix);
 			 	}
        
 			 	// If location has rating, diplay it
        if (typeof results[i].venue.rating !== "undefined"){
        	destination.find('.rating')
        		.text(results[i].venue.rating.toFixed(1));
       		destination.find('.rating')
       			.attr('style', 'background-color:#' + results[i].venue.ratingColor);
        }
        
        // If location has price, show price message
        if (typeof results[i].venue.price !== "undefined" ) {
      		destination.find('.price')
      			.html('<b>Price:</b> ' + results[i].venue.price.message);
      	}
        
        // If location has user tip, show tip
        if (typeof results[i].tips !== "undefined"){
        	destination.find('.tip')
        		.html('<b>Visitor Tip:</b> ' + results[i].tips[0].text);
        }
		  	
		  	$('#results-' + sectionName).append(destination);
			}
		})
	};

	$('#location-form').submit(function(e){
		e.preventDefault();
		$('.row div').html('');
		var userInput = $('#location-form input').val();
		getRequest(userInput, 'food');
		getRequest(userInput, 'fun');
		getRequest(userInput, 'hotel');
		$('div.container').toggleClass('hidden', false);
	})

});