// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//********************WEDDING and Recptions Details*********************/

// MARKER 1 FOR WEDDING
		//map-marker #1
		var marker1_Latitude=40.707892 
		var marker1_Longitude=-74.008920
		var marker1_content="<h4>Wedding Ceremony</h4> Masjid Alumni IPB" // marker or  on click content (Info Window) 
		var marker1_pointerUrl = 'public/wedding-2/img/map-marker.png' // set your color pointer here!

// MARKER 2 FOR RECPTIONS
		
		//map-marker #2
		var marker2_Latitude=-6.602320
		var marker2_Longitude=106.806880
		var marker2_content="<h4>Reception</h4> Masjid Alumni IPB" // marker or  on click content (Info Window) 
		var marker2_pointerUrl = 'public/wedding-2/img/map-marker.png' // set your color pointer here!	

//********************WEDDING and Recptions Details END*********************/

//********************* Google MAP  *********************/
		var color = "#425254" // google map background colour
		var saturation = 100 // 
		var mapLatitude=-6.602320
		var mapLongitude=106.806880//(Fist Value Latitude, Second Value ), get YOUR coordenates here!: https://www.latlong.net/
		var mapZoom_value=16 // Map zoom level parameter only numeric  

//********************* Google MAP END *********************/




//****************************************************************************
		  		// Google map 
//****************************************************************************
			//dragable mobile
			var drag;
			if($(window).width()<796){drag=false;}else{drag=true;}
			
		/* googleMaps */
		
				function map_canvas_loaded() {
				var latlng = new google.maps.LatLng(mapLatitude,mapLongitude);
				
				// setting styles here 
				var styles = [
					{
						"featureType": "landscape",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 40},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": -10},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "water",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 15},
							{"gamma": 1}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 25},
							{"gamma": 1}
						]
					}
				];		
				var options = {
				 center : latlng,
				 mapTypeId: google.maps.MapTypeId.ROADMAP,
				 zoom : mapZoom_value,
				 styles: styles
				};
				var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);
				var map_canvas1 = new google.maps.Map(document.getElementById('map_canvas1'), options);
				
			
			
				
//****************************************************************************
// MARKER 1 FOR Wedding
//****************************************************************************
				var pointer1 = new google.maps.LatLng(marker1_Latitude,marker1_Longitude);
				
				var marker1= new google.maps.Marker({
				 position : pointer1,
				 map : map_canvas,
				 icon: marker1_pointerUrl //Custom Pointer URL
				 });
				
				google.maps.event.addListener(marker1,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker1_content });
				 infowindow.open(map_canvas,marker1);
				 });
				// marker 1 END



//****************************************************************************
		  		// MARKER 2 FOR RECPTIONS
//****************************************************************************


				var pointer2 = new google.maps.LatLng(marker2_Latitude,marker2_Longitude);
				
				var marker2= new google.maps.Marker({
				 position : pointer2,
				 map : map_canvas1,
				 icon: marker2_pointerUrl //Custom Pointer URL
				 });
				
				google.maps.event.addListener(marker2,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker2_content });
				 infowindow.open(map_canvas1,marker2);
				 });
				// marker 2 END
				

				
			}

				window.onload = function() {
				 map_canvas_loaded();
				};
			/* End */
			

//Google map end 