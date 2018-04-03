// Map
if ($("#map").length) {
    var coordinateArrFinish = "50.004774, 36.234217".split(","),
        coordinateArrStart = "50.004774, 36.234217".split(",");

    var coordinateFinish = {
        lat: +coordinateArrFinish[0],
        lng: +coordinateArrFinish[1]
    };

    var style = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"-3"},{"saturation":"-47"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"saturation":"0"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"lightness":"-29"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aaaaaa"},{"visibility":"on"}]}],
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: coordinateFinish,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            draggable: true,
            scrollwheel: true,
            styles: style
        }),
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map,
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#f00"
            }
        }),
        markerFinish = new google.maps.Marker({
            position: coordinateFinish,
            map: map,
            icon: {
                url: "/img/map_marker.png",
                size: new google.maps.Size(231, 190),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(40, 185)
            },
            title: "nerds",
            zIndex: 1000
        });

    directionsDisplay.setMap(map);

    markerFinish.setMap(map);

}

$( document ).ready(function() {
    $( ".cross" ).hide();
    // $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });
    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
});
