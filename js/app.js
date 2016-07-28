$(document).ready(function() {

	URL = 'https://api.foursquare.com/v2/venues/explore';

	function getRequest(searchTerm) {
		var params = {
			near: 'Phoenix, AZ',
			section: 'restaurant',
			limit: 5,
			v: Date.now(),
			client_id: 'QIWNWWTNLDX5SILZLFP0U4RDMQTSRVVN02YVDLAZC5TH5OVH',
			client_secret: 'FHBPGACKE12LS2PMTJK54JNR3UESGC0PPIDWWSMS1UFAKA1J',
		};
		
		$.getJSON(URL, params, function(data) {
			console.log(data);
		})

	};

	getRequest();

})