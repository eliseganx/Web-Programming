function init() {
    var map_center = new google.maps.LatLng(42.352271, -71.05524200000001);
    var map_options = {
      zoom: 2,
      center: map_center,
      mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById("final_map"), map_options);
    var southstation = new google.maps.Marker( {
      position: map_center,
      title: "South Station"
    });
    southstation.setMap(map);
}
