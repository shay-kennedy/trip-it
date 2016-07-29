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
   			 	console.log(data.response.groups[0].items[i].venue.name);
   			 	var destination = $('#templates div.destination').clone();
   			 	// destination.removeClass('destination');

   			 	destination.find('.title a').text(data.response.groups[0].items[i].venue.name);
   			 	destination.find('.title a').attr('href', 'https://foursquare.com/v/' + data.response.groups[0].items[i].venue.id);
   			 	destination.find('.category').text(data.response.groups[0].items[i].venue.categories[0].name);
// .attr()

   			 	if (data.response.groups[0].items[i].venue.photos.count == 1){
   			 		destination.find('.card-image img').attr('src', data.response.groups[0].items[i].venue.photos.groups[0].items[0].prefix + '75x75' + data.response.groups[0].items[i].venue.photos.groups[0].items[0].suffix);
   			 	}
   			 	else {
   			 		destination.find('.card-image img').attr('src', data.response.groups[0].items[i].venue.categories[0].icon.prefix + '88' + data.response.groups[0].items[i].venue.categories[0].icon.suffix);
   			 	}
				// $('#results-' + sectionName).append("<p><a href='https://foursquare.com/v/" + data.response.groups[0].items[i].venue.id + "' target='_blank'>" + data.response.groups[0].items[i].venue.name + "</a></p>");
		        if (typeof data.response.groups[0].items[i].venue.rating !== "undefined"){
		        	// $('#results-' + sectionName).append("<p>" + data.response.groups[0].items[i].venue.rating + "</p>");
		        	destination.find('.rating').text(data.response.groups[0].items[i].venue.rating.toFixed(1));
		       		destination.find('.rating').attr('style', 'background-color:#' + data.response.groups[0].items[i].venue.ratingColor);
		        }
		       	// $('#results-' + sectionName).append("<p>" + data.response.groups[0].items[i].venue.categories[0].name + "</p>");
		        if (typeof data.response.groups[0].items[i].venue.price !== "undefined" ) {
		        	// $('#results-' + sectionName).append("<p>Price: " + data.response.groups[0].items[i].venue.price.message + "</p>")
	        		destination.find('.price').html('<b>Price:</b> ' + data.response.groups[0].items[i].venue.price.message);
	        	}		       	
		        if (typeof data.response.groups[0].items[i].tips !== "undefined"){
		        	// $('#results-' + sectionName).append("<p>" + data.response.groups[0].items[i].tips[0].text + "</p>");
		        	destination.find('.tip').html('<b>User Comment:</b> ' + data.response.groups[0].items[i].tips[0].text);
		        }
			  	$('#results-' + sectionName).append(destination);
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