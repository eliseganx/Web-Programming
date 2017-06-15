function init() {
  map_center = {lat: 42.352271, lng: -71.05524200000001};
  var map_options = {
    zoom: 11,
    center: map_center,
    mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById("final_map"), map_options);
  setRedLine();
  setOrangeLine();
}

function setRedLine() {
  //define images needed
  var red_image = {url: "RedT.png", scaledSize: new google.maps.Size(23,34)};
  var red_orange_image = {url: "RedOrangeT.png",scaledSize: new google.maps.Size(23,34)};

  //start defining and placing red line stations on Map
  var SouthStation = new google.maps.Marker({position: map_center, title: "South Station", icon: red_image});
  SouthStation.setMap(map);
  

  var Andrew = new google.maps.Marker ( {position: {lat: 42.330154, lng: -71.057655}, title: "Andrew", icon: red_image});
  Andrew.setMap(map);  

  var Porter = new google.maps.Marker ( {position: {lat: 42.3884, lng: -71.11914899999999}, title: "Porter Square", icon: red_image});
  Porter.setMap(map);

  var Harvard = new google.maps.Marker ( {position: {lat: 42.373362, lng: -71.118956}, title: "Harvard Square", icon: red_image});
  Harvard.setMap(map);

  var JFK = new google.maps.Marker ( {position: {lat: 42.320685, lng: -71.052391}, title: "JFK/UMass", icon: red_image});
  JFK.setMap(map);

  var SavinHill = new google.maps.Marker ( {position: {lat: 42.31129, lng: -71.053331}, title: "Savin Hill", icon: red_image});
  SavinHill.setMap(map);

  var Park = new google.maps.Marker ( {position: {lat: 42.35639457, lng: -71.0624242}, title: "Park Street", icon: red_image});
  Park.setMap(map);

  var Broadway = new google.maps.Marker ( {position: {lat: 42.342622, lng: -71.056967}, title: "Broadway", icon: red_image});
  Broadway.setMap(map);

  var NorthQuincy = new google.maps.Marker ( {position: {lat: 42.275275, lng: -71.029583}, title: "NorthQuincy", icon: red_image});
  NorthQuincy.setMap(map);

  var Shawmut = new google.maps.Marker ( {position: {lat: 42.29312583, lng: -71.06573796000001}, title: "Shawmut", icon: red_image});
  Shawmut.setMap(map);

  var Davis = new google.maps.Marker ( {position: {lat: 42.39674, lng: -71.121815}, title: "Davis", icon: red_image});
  Davis.setMap(map);

  var Alewife = new google.maps.Marker ( {position: {lat: 42.395428, lng: -71.142483}, title: "Alewife", icon: red_image});
  Alewife.setMap(map);

  var Kendall = new google.maps.Marker ( {position: {lat: 42.36249079, lng: -71.08617653}, title: "Kendall/MIT", icon: red_image});
  Kendall.setMap(map);

  var Charles = new google.maps.Marker ( {position: {lat: 42.361166, lng: -71.070628}, title: "Charles", icon: red_image});
  Charles.setMap(map);

  DowntownCrossing = new google.maps.Marker ( {position: {lat: 42.355518, lng: -71.060225}, title: "Downtown Crossing", icon: red_orange_image});
  DowntownCrossing.setMap(map);

  var QuincyCenter = new google.maps.Marker ( {position: {lat: 42.251809, lng: -71.005409}, title: "Quincy Center", icon: red_image});
  QuincyCenter.setMap(map);

  var QuincyAdams = new google.maps.Marker ( {position: {lat: 42.233391, lng: -71.007153}, title: "Quincy Adams", icon: red_image});
  QuincyAdams.setMap(map);

  var Ashmont = new google.maps.Marker ( {position: {lat: 42.284652, lng: -71.06448899999999}, title: "Ashmont", icon: red_image});
  Ashmont.setMap(map);

  var Wollaston = new google.maps.Marker ( {position: {lat: 42.2665139, lng: -71.0203369}, title: "Wollaston", icon: red_image
  });
  Wollaston.setMap(map);

  var FieldsCorner = new google.maps.Marker ( {position: {lat: 42.300093, lng: -71.061667}, title: "Fields Corner", icon: red_image});
  FieldsCorner.setMap(map);

  var Central = new google.maps.Marker ( {position: {lat: 42.365486, lng: -71.103802}, title: "Central Square", icon: red_image});
  Central.setMap(map);

  var Braintree = new google.maps.Marker ( {position: {lat: 42.2078543, lng: -71.0011385}, title: "Braintree", icon: red_image});
  Braintree.setMap(map);
  
  //creating and placing redline polylines
  var before_branch_coordinates = [Alewife.position, Davis.position, Porter.position, Harvard.position, Central.position, Kendall.position, Charles.position, Park.position, DowntownCrossing.position, SouthStation.position, Broadway.position, Andrew.position, JFK.position]
  
  var before_branch = new google.maps.Polyline ({path: before_branch_coordinates, geodesic: true, strokeColor: "#FF0000"});
  before_branch.setMap(map);

  var quincy_start_coordinates = [JFK.position, NorthQuincy.position, Wollaston.position, QuincyCenter.position, QuincyAdams.position, Braintree.position]

  var quincy_start = new google.maps.Polyline ({path: quincy_start_coordinates, geodesic: true, strokeColor: "#FF0000"});
  quincy_start.setMap(map);

  var savin_start_coordinates = [JFK.position, SavinHill.position, FieldsCorner.position, Shawmut.position, Ashmont.position]

  var savin_start = new google.maps.Polyline ({path: savin_start_coordinates, geodesic: true, strokeColor: "#FF0000"});
  savin_start.setMap(map);
}

function setOrangeLine() {
  var orange_image = {
    url: "OrangeT.png",
    scaledSize: new google.maps.Size(23,34)
  };

  //start defining and placing orange line stations on Map
  var OakGrove = new google.maps.Marker({position: {lat: 42.436942, lng: -71.070889}, title: "Oak Grove", icon: orange_image});
  OakGrove.setMap(map);

  var MaldenCenter = new google.maps.Marker({position: {lat: 42.426715, lng: -71.074349}, title: "Malden Center", icon: orange_image});
  MaldenCenter.setMap(map);

  var Wellington = new google.maps.Marker({position: {lat: 42.401907, lng: -71.077096}, title: "Wellington", icon: orange_image});
  Wellington.setMap(map);

  var Assembly = new google.maps.Marker({position: {lat: 42.392356, lng: -71.077333}, title: "Assembly", icon: orange_image});
  Assembly.setMap(map);

  var SullivanSquare = new google.maps.Marker({position: {lat: 42.384031, lng: -71.07697}, title: "Sullivan Square", icon: orange_image});
  SullivanSquare.setMap(map);

  var CommunityCollege = new google.maps.Marker({position: {lat: 42.3737, lng: -71.0702}, title: "Community College", icon: orange_image});
  CommunityCollege.setMap(map);

  var North = new google.maps.Marker({position: {lat: 42.3657, lng: -71.061}, title: "North", icon: orange_image});
  North.setMap(map);

  var Haymarket = new google.maps.Marker({position: {lat: 42.3633, lng: -71.0582}, title: "Haymarket", icon: orange_image});
  Haymarket.setMap(map);

  var State = new google.maps.Marker({position: {lat: 42.3587, lng: -71.0578}, title: "State", icon: orange_image});
  State.setMap(map);

  var Chinatown = new google.maps.Marker({position: {lat: 42.3522, lng: -71.0627}, title: "Chinatown", icon: orange_image});
  Chinatown.setMap(map);

  var TuftsMed = new google.maps.Marker({position: {lat: 42.3486, lng: -71.0645}, title: "Tufts Medical Center", icon: orange_image});
  TuftsMed.setMap(map);

  var BackBay = new google.maps.Marker({position: {lat: 42.3473, lng: -71.0755}, title: "BackBay", icon: orange_image});
  BackBay.setMap(map);

  var MassAve = new google.maps.Marker({position: {lat: 42.3416, lng: -71.0833}, title: "Massachusetts Avenue", icon: orange_image});
  MassAve.setMap(map);

  var Ruggles = new google.maps.Marker({position: {lat: 42.3362, lng: -71.0895}, title: "Ruggles", icon: orange_image});
  Ruggles.setMap(map);

  var RoxburyCrossing = new google.maps.Marker({position: {lat: 42.3313, lng: -71.0956}, title: "Roxbury Crossing", icon: orange_image});
  RoxburyCrossing.setMap(map);

  var JacksonSquare = new google.maps.Marker({position: {lat: 42.3229, lng: -71.1}, title: "JacksonSquare", icon: orange_image});
  JacksonSquare.setMap(map);

  var StonyBrook = new google.maps.Marker({position: {lat: 42.3172, lng: -71.1043}, title: "Stony Brook", icon: orange_image});
  StonyBrook.setMap(map);

  var GreenStreet = new google.maps.Marker({position: {lat: 42.3102, lng: -71.1078}, title: "Green Street", icon: orange_image});
  GreenStreet.setMap(map);

  var ForestHills = new google.maps.Marker({position: {lat: 42.300735, lng: -71.114065}, title: "Forest Hills", icon: orange_image});
  ForestHills.setMap(map);
  
  var orange_coordinates = [OakGrove.position, MaldenCenter.position, Wellington.position, Assembly.position, SullivanSquare.position, CommunityCollege.position, North.position, Haymarket.position, State.position, DowntownCrossing.position, Chinatown.position, TuftsMed.position, MassAve.position, Ruggles.position, RoxburyCrossing.position, JacksonSquare.position, StonyBrook.position, GreenStreet.position, ForestHills.position]
  
  var orange_line = new google.maps.Polyline ({path: orange_coordinates, geodesic: true, strokeColor: "#FFA500"});
  orange_line.setMap(map);
}
