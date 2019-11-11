var platform = new H.service.Platform({
  'apikey': 'COLOCA A SUA CHAVE AQUI'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 14,
    center: { lat: 52.5, lng: 13.4 }
  });

// Get the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

var geocodingParams;

// Define a callback function to process the geocoding response:
var onResult = function (result) {
  var locations = result.Response.View[0].Result,
    position,
    marker;
  // Add a marker for each location found
  for (i = 0; i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    map.setCenter(position)
    marker = new H.map.Marker(position);
    map.addObject(marker);
  }
};

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):



// // Create the parameters for the routing request:
// var routingParameters = {
//   // The routing mode:
//   'mode': 'fastest;car',
//   // The start point of the route:
//   'waypoint0': 'geo!50.1120423728813,8.68340740740811',
//   // The end point of the route:
//   'waypoint1': 'geo!52.5309916298853,13.3846220493377',
//   // To retrieve the shape of the route we choose the route
//   // representation mode 'display'
//   'representation': 'display'
// };

// // Define a callback function to process the routing response:
// var onResult = function (result) {
//   var route,
//     routeShape,
//     startPoint,
//     endPoint,
//     linestring;
//   if (result.response.route) {
//     // Pick the first route from the response:
//     route = result.response.route[0];
//     // Pick the route's shape:
//     routeShape = route.shape;

//     // Create a linestring to use as a point source for the route line
//     linestring = new H.geo.LineString();

//     // Push all the points in the shape into the linestring:
//     routeShape.forEach(function (point) {
//       var parts = point.split(',');
//       linestring.pushLatLngAlt(parts[0], parts[1]);
//     });

//     // Retrieve the mapped positions of the requested waypoints:
//     startPoint = route.waypoint[0].mappedPosition;
//     endPoint = route.waypoint[1].mappedPosition;

//     // Create a polyline to display the route:
//     var routeLine = new H.map.Polyline(linestring, {
//       style: { strokeColor: 'blue', lineWidth: 3 }
//     });

//     // Create a marker for the start point:
//     var startMarker = new H.map.Marker({
//       lat: startPoint.latitude,
//       lng: startPoint.longitude
//     });

//     // Create a marker for the end point:
//     var endMarker = new H.map.Marker({
//       lat: endPoint.latitude,
//       lng: endPoint.longitude
//     });

//     // Add the route polyline and the two markers to the map:
//     map.addObjects([routeLine, startMarker, endMarker]);

//     // Set the map's viewport to make the whole route visible:
//     map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
//   }
// };

// // Get an instance of the routing service:
// var router = platform.getRoutingService();

// // Call calculateRoute() with the routing parameters,
// // the callback and an error callback function (called if a
// // communication error occurs):
// router.calculateRoute(routingParameters, onResult,
//   function (error) {
//     alert(error.message);
//   });
