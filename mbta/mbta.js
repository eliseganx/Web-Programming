function init() {
  map_center = {lat: 42.352271, lng: -71.05524200000001};
  var map_options = {
    zoom: 11,
    center: map_center,
    mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById("final_map"), map_options);
  setRedLine();
}

function setRedLine() {
  var red_image = {
    url: "RedT.png",
    scaledSize: new google.maps.Size(23,34)
  };

  var SouthStation = new google.maps.Marker({
    position: map_center,
    title: "South Station",
    icon: red_image
  });
  SouthStation.setMap(map);
  

  var Andrew = new google.maps.Marker ( {
    position: {lat: 42.330154, lng: -71.057655},
    title: "Andrew",
    icon: red_image
  });
  Andrew.setMap(map);  

  var Porter = new google.maps.Marker ( {
    position: {lat: 42.3884, lng: -71.11914899999999},
    title: "Porter Square",
    icon: red_image
  });
  Porter.setMap(map);

  var Harvard = new google.maps.Marker ( {
    position: {lat: 42.373362, lng: -71.118956},
    title: "Harvard Square",
    icon: red_image
  });
  Harvard.setMap(map);

  var JFK = new google.maps.Marker ( {
    position: {lat: 42.320685, lng: -71.052391},
    title: "JFK/UMass",
    icon: red_image
  });
  JFK.setMap(map);

  var SavinHill = new google.maps.Marker ( {
    position: {lat: 42.31129, lng: -71.053331},
    title: "Savin Hill",
    icon: red_image
  });
  SavinHill.setMap(map);

  var Park = new google.maps.Marker ( {
    position: {lat: 42.35639457, lng: -71.0624242},
    title: "Park Street",
    icon: red_image
  });
  Park.setMap(map);

  var Broadway = new google.maps.Marker ( {
    position: {lat: 42.342622, lng: -71.056967},
    title: "Broadway",
    icon: red_image
  });
  Broadway.setMap(map);

  var NorthQuincy = new google.maps.Marker ( {
    position: {lat: 42.275275, lng: -71.029583},
    title: "NorthQuincy",
    icon: red_image
  });
  NorthQuincy.setMap(map);

  var Shawmut = new google.maps.Marker ( {
    position: {lat: 42.29312583, lng: -71.06573796000001},
    title: "Shawmut",
    icon: red_image
  });
  Shawmut.setMap(map);

  var Davis = new google.maps.Marker ( {
    position: {lat: 42.39674, lng: -71.121815},
    title: "Davis",
    icon: red_image
  });
  Davis.setMap(map);

  var Alewife = new google.maps.Marker ( {
    position: {lat: 42.395428, lng: -71.142483},
    title: "Alewife",
    icon: red_image
  });
  Alewife.setMap(map);

  var Kendall = new google.maps.Marker ( {
    position: {lat: 42.36249079, lng: -71.08617653},
    title: "Kendall/MIT",
    icon: red_image
  });
  Kendall.setMap(map);

  var Charles = new google.maps.Marker ( {
    position: {lat: 42.361166, lng: -71.070628},
    title: "Charles",
    icon: red_image
  });
  Charles.setMap(map);

  var DowntownCrossing = new google.maps.Marker ( {
    position: {lat: 42.355518, lng: -71.060225},
    title: "Downtown Crossing",
    icon: red_image
  });
  DowntownCrossing.setMap(map);

  var QuincyCenter = new google.maps.Marker ( {
    position: {lat: 42.251809, lng: -71.005409},
    title: "Quincy Center",
    icon: red_image
  });
  QuincyCenter.setMap(map);

  var QuincyAdams = new google.maps.Marker ( {
    position: {lat: 42.233391, lng: -71.007153},
    title: "Quincy Adams",
    icon: red_image
  });
  QuincyAdams.setMap(map);

  var Ashmont = new google.maps.Marker ( {
    position: {lat: 42.284652, lng: -71.06448899999999},
    title: "Ashmont",
    icon: red_image
  });
  Ashmont.setMap(map);

  var Wollaston = new google.maps.Marker ( {
    position: {lat: 42.2665139, lng: -71.0203369},
    title: "Wollaston",
    icon: red_image
  });
  Wollaston.setMap(map);

  var FieldsCorner = new google.maps.Marker ( {
    position: {lat: 42.300093, lng: -71.061667},
    title: "Fields Corner",
    icon: red_image
  });
  FieldsCorner.setMap(map);

  var Central = new google.maps.Marker ( {
    position: {lat: 42.365486, lng: -71.103802},
    title: "Central Square",
    icon: red_image
  });
  Central.setMap(map);

  var Braintree = new google.maps.Marker ( {
    position: {lat: 42.2078543, lng: -71.0011385},
    title: "Braintree",
    icon: red_image
  });
  Braintree.setMap(map);

  var before_branch_coordinates = [
    Alewife.position,
    Davis.position,
    Porter.position,
    Harvard.position,
    Central.position,
    Kendall.position,
    Charles.position,
    Park.position,
    DowntownCrossing.position,
    SouthStation.position,
    Broadway.position,
    Andrew.position,
    JFK.position
  ]
  
  var before_branch = new google.maps.Polyline ({
    path: before_branch_coordinates,
    geodesic: true,
    strokeColor: "#FF0000"
  });
  before_branch.setMap(map);

  var quincy_start_coordinates = [
    JFK.position,
    NorthQuincy.position,
    Wollaston.position,
    QuincyCenter.position,
    QuincyAdams.position,
    Braintree.position
  ]

  var quincy_start = new google.maps.Polyline ({
    path: quincy_start_coordinates,
    geodesic: true,
    strokeColor: "#FF0000"
  });
  quincy_start.setMap(map);

  var savin_start_coordinates = [
    JFK.position,
    SavinHill.position,
    FieldsCorner.position,
    Shawmut.position,
    Ashmont.position
  ]

  var savin_start = new google.maps.Polyline ({
    path: savin_start_coordinates,
    geodesic: true,
    strokeColor: "#FF0000"
  });
  savin_start.setMap(map);
}
