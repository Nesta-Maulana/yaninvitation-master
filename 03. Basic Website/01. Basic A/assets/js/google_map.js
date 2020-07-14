
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var latK = -6.605564;
    var lngK = 106.808295;

    var myLatlng = new google.maps.LatLng(latK, lngK);

    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all"
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#f49935"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#fad959"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#a1cdfc"
                    },
                    {
                        "saturation": 30
                    },
                    {
                        "lightness": 49
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var description = '<div id="iw-container">' +
        '<div class="iw-title">Amalia Hotel, Bandar Lampung</div>' +
        '<div class="iw-content">' +
        '<br/>' + 
        '<p class="iw-desc iw-address">Jalan RADEN INTAN No.55, Enggal, Engal, Enggal, Engal, Kota Bandar Lampung, Lampung.</p>' +
        '<p class="iw-direct"><a href="https://maps.google.com?daddr=Amalia+Hotel+Bandar+Lampung&z=18" target="_blank" class="iw-link">Get Direction</a>'+
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: description,
        maxWidth: 250
    });
    
    // var addresses = ['Brooklyn'];

    // for (var x = 0; x < addresses.length; x++) {
        // $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
        //     var p = data.results[0].geometry.location
    var latlng = new google.maps.LatLng(latK, lngK);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: 'public/images/marker-love.png'
    });
    infowindow.open(map, marker);

        // });
    // }
     google.maps.event.addListener(infowindow, 'domready', function() {
            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = $('.gm-style-iw');
              
            /* Since this div is in a position prior to .gm-div style-iw.
             * We use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
            */
            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});

            // Moves the infowindow 115px to the right.
            // iwOuter.parent().parent().css({left: '115px'});

            // Moves the shadow of the arrow 76px to the left margin.
            iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 80px !important;'});

            // Moves the arrow 76px to the left margin.
            iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 80px !important;'});

            // Changes the desired tail shadow color.
            iwBackground.children(':nth-child(3)').find('div').children().css({'background':'#F9F9F9', 'z-index' : '1'});

            // Reference to the div that groups the close button elements.
            var iwCloseBtn = iwOuter.next();


            // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            if($('.iw-content').height() < 140){
              $('.iw-bottom-gradient').css({display: 'none'});
            }

            // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function(){
              $(this).css({opacity: '1'});
            });
        });    
}
google.maps.event.addDomListener(window, 'load', init);


