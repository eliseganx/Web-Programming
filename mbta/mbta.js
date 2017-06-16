function init() {
  map_center = {lat: 42.352271, lng: -71.05524200000001};
  infowindow = new google.maps.InfoWindow();
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
  SouthStation.addListener("mouseover", function() {infowindow.setContent(SouthStation.title); infowindow.open(map, SouthStation);});
  SouthStation.addListener("mouseout", function() {infowindow.close();});
  

  var Andrew = new google.maps.Marker ( {position: {lat: 42.330154, lng: -71.057655}, title: "Andrew", icon: red_image});
  Andrew.setMap(map);
  Andrew.addListener("mouseover", function() {infowindow.setContent(Andrew.title); infowindow.open(map, Andrew);});
  Andrew.addListener("mouseout", function() {infowindow.close();});   

  var Porter = new google.maps.Marker ( {position: {lat: 42.3884, lng: -71.11914899999999}, title: "Porter Square", icon: red_image});
  Porter.setMap(map);
  Porter.addListener("mouseover", function() {infowindow.setContent(Porter.title); infowindow.open(map, Porter);});
  Porter.addListener("mouseout", function() {infowindow.close();});

  var Harvard = new google.maps.Marker ( {position: {lat: 42.373362, lng: -71.118956}, title: "Harvard Square", icon: red_image});
  Harvard.setMap(map);
  Harvard.addListener("mouseover", function() {infowindow.setContent(Harvard.title); infowindow.open(map, Harvard);});
  Harvard.addListener("mouseout", function() {infowindow.close();});

  var JFK = new google.maps.Marker ( {position: {lat: 42.320685, lng: -71.052391}, title: "JFK/UMass", icon: red_image});
  JFK.setMap(map);
  JFK.addListener("mouseover", function() {infowindow.setContent(JFK.title); infowindow.open(map, JFK);});
  JFK.addListener("mouseout", function() {infowindow.close();});

  var SavinHill = new google.maps.Marker ( {position: {lat: 42.31129, lng: -71.053331}, title: "Savin Hill", icon: red_image});
  SavinHill.setMap(map);
  SavinHill.addListener("mouseover", function() {infowindow.setContent(SavinHill.title); infowindow.open(map, SavinHill);});
  SavinHill.addListener("mouseout", function() {infowindow.close();}); 

  var Park = new google.maps.Marker ( {position: {lat: 42.35639457, lng: -71.0624242}, title: "Park Street", icon: red_image});
  Park.setMap(map);
  Park.addListener("mouseover", function() {infowindow.setContent(Park.title); infowindow.open(map, Park);});
  Park.addListener("mouseout", function() {infowindow.close();});

  var Broadway = new google.maps.Marker ( {position: {lat: 42.342622, lng: -71.056967}, title: "Broadway", icon: red_image});
  Broadway.setMap(map);
  Broadway.addListener("mouseover", function() {infowindow.setContent(Broadway.title); infowindow.open(map, Broadway);});
  Broadway.addListener("mouseout", function() {infowindow.close();});

  var NorthQuincy = new google.maps.Marker ( {position: {lat: 42.275275, lng: -71.029583}, title: "North Quincy", icon: red_image});
  NorthQuincy.setMap(map);
  NorthQuincy.addListener("mouseover", function() {infowindow.setContent(NorthQuincy.title); infowindow.open(map, NorthQuincy);});
  NorthQuincy.addListener("mouseout", function() {infowindow.close();});

  var Shawmut = new google.maps.Marker ( {position: {lat: 42.29312583, lng: -71.06573796000001}, title: "Shawmut", icon: red_image});
  Shawmut.setMap(map);
  Shawmut.addListener("mouseover", function() {infowindow.setContent(Shawmut.title); infowindow.open(map, Shawmut);});
  Shawmut.addListener("mouseout", function() {infowindow.close();});

  var Davis = new google.maps.Marker ( {position: {lat: 42.39674, lng: -71.121815}, title: "Davis", icon: red_image});
  Davis.setMap(map);
  Davis.addListener("mouseover", function() {infowindow.setContent(Davis.title); infowindow.open(map, Davis);});
  Davis.addListener("mouseout", function() {infowindow.close();});

  var Alewife = new google.maps.Marker ( {position: {lat: 42.395428, lng: -71.142483}, title: "Alewife", icon: red_image});
  Alewife.setMap(map);
  Alewife.addListener("mouseover", function() {infowindow.setContent(Alewife.title); infowindow.open(map, Alewife);});
  Alewife.addListener("mouseout", function() {infowindow.close();});

  var Kendall = new google.maps.Marker ( {position: {lat: 42.36249079, lng: -71.08617653}, title: "Kendall/MIT", icon: red_image});
  Kendall.setMap(map);
  Kendall.addListener("mouseover", function() {infowindow.setContent(Kendall.title); infowindow.open(map, Kendall);});
  Kendall.addListener("mouseout", function() {infowindow.close();});

  var Charles = new google.maps.Marker ( {position: {lat: 42.361166, lng: -71.070628}, title: "Charles/MGH", icon: red_image});
  Charles.setMap(map);
  Charles.addListener("mouseover", function() {infowindow.setContent(Charles.title); infowindow.open(map, Charles);});
  Charles.addListener("mouseout", function() {infowindow.close();});

  DowntownCrossing = new google.maps.Marker ( {position: {lat: 42.355518, lng: -71.060225}, title: "Downtown Crossing", icon: red_orange_image});
  DowntownCrossing.setMap(map);
  DowntownCrossing.addListener("mouseover", function() {infowindow.setContent(DowntownCrossing.title); infowindow.open(map, DowntownCrossing);});
  DowntownCrossing.addListener("mouseout", function() {infowindow.close();});

  var QuincyCenter = new google.maps.Marker ( {position: {lat: 42.251809, lng: -71.005409}, title: "Quincy Center", icon: red_image});
  QuincyCenter.setMap(map);
  QuincyCenter.addListener("mouseover", function() {infowindow.setContent(QuincyCenter.title); infowindow.open(map, QuincyCenter);});
  QuincyCenter.addListener("mouseout", function() {infowindow.close();});

  var QuincyAdams = new google.maps.Marker ( {position: {lat: 42.233391, lng: -71.007153}, title: "Quincy Adams", icon: red_image});
  QuincyAdams.setMap(map);
  QuincyAdams.addListener("mouseover", function() {infowindow.setContent(QuincyAdams.title); infowindow.open(map, QuincyAdams);});
  QuincyAdams.addListener("mouseout", function() {infowindow.close();});

  var Ashmont = new google.maps.Marker ( {position: {lat: 42.284652, lng: -71.06448899999999}, title: "Ashmont", icon: red_image});
  Ashmont.setMap(map);
  Ashmont.addListener("mouseover", function() {infowindow.setContent(Ashmont.title); infowindow.open(map, Ashmont);});
  Ashmont.addListener("mouseout", function() {infowindow.close();});

  var Wollaston = new google.maps.Marker ( {position: {lat: 42.2665139, lng: -71.0203369}, title: "Wollaston", icon: red_image});
  Wollaston.setMap(map);
  Wollaston.addListener("mouseover", function() {infowindow.setContent(Wollaston.title); infowindow.open(map, Wollaston);});
  Wollaston.addListener("mouseout", function() {infowindow.close();});

  var FieldsCorner = new google.maps.Marker ( {position: {lat: 42.300093, lng: -71.061667}, title: "Fields Corner", icon: red_image});
  FieldsCorner.setMap(map);
  FieldsCorner.addListener("mouseover", function() {infowindow.setContent(FieldsCorner.title); infowindow.open(map, FieldsCorner);});
  FieldsCorner.addListener("mouseout", function() {infowindow.close();});

  var Central = new google.maps.Marker ( {position: {lat: 42.365486, lng: -71.103802}, title: "Central Square", icon: red_image});
  Central.setMap(map);
  Central.addListener("mouseover", function() {infowindow.setContent(Central.title); infowindow.open(Central, Central);});
  Central.addListener("mouseout", function() {infowindow.close();});

  var Braintree = new google.maps.Marker ( {position: {lat: 42.2078543, lng: -71.0011385}, title: "Braintree", icon: red_image});
  Braintree.setMap(map);
  Braintree.addListener("mouseover", function() {infowindow.setContent(Braintree.title); infowindow.open(map, Braintree);});
  Braintree.addListener("mouseout", function() {infowindow.close();});
  
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
  OakGrove.addListener("mouseover", function() {infowindow.setContent(OakGrove.title); infowindow.open(map, OakGrove);});
  OakGrove.addListener("mouseout", function() {infowindow.close();});

  var MaldenCenter = new google.maps.Marker({position: {lat: 42.426715, lng: -71.074349}, title: "Malden Center", icon: orange_image});
  MaldenCenter.setMap(map);
  MaldenCenter.addListener("mouseover", function() {infowindow.setContent(MaldenCenter.title); infowindow.open(map, MaldenCenter);});
  MaldenCenter.addListener("mouseout", function() {infowindow.close();});

  var Wellington = new google.maps.Marker({position: {lat: 42.401907, lng: -71.077096}, title: "Wellington", icon: orange_image});
  Wellington.setMap(map);
  Wellington.addListener("mouseover", function() {infowindow.setContent(Wellington.title); infowindow.open(map, Wellington);});
  Wellington.addListener("mouseout", function() {infowindow.close();});

  var Assembly = new google.maps.Marker({position: {lat: 42.392356, lng: -71.077333}, title: "Assembly", icon: orange_image});
  Assembly.setMap(map);
  Assembly.addListener("mouseover", function() {infowindow.setContent(Assembly.title); infowindow.open(map, Assembly);});
  Assembly.addListener("mouseout", function() {infowindow.close();});

  var Sullivan = new google.maps.Marker({position: {lat: 42.384031, lng: -71.07697}, title: "Sullivan Square", icon: orange_image});
  Sullivan.setMap(map);
  Sullivan.addListener("mouseover", function() {infowindow.setContent(Sullivan.title); infowindow.open(map, Sullivan);});
  Sullivan.addListener("mouseout", function() {infowindow.close();});

  var CommunityCollege = new google.maps.Marker({position: {lat: 42.3737, lng: -71.0702}, title: "Community College", icon: orange_image});
  CommunityCollege.setMap(map);
  CommunityCollege.addListener("mouseover", function() {infowindow.setContent(CommunityCollege.title); infowindow.open(map, CommunityCollege);});
  CommunityCollege.addListener("mouseout", function() {infowindow.close();});

  var North = new google.maps.Marker({position: {lat: 42.3657, lng: -71.061}, title: "North Station", icon: orange_image});
  North.setMap(map);
  North.addListener("mouseover", function() {infowindow.setContent(North.title); infowindow.open(map, North);});
  North.addListener("mouseout", function() {infowindow.close();});

  var Haymarket = new google.maps.Marker({position: {lat: 42.3633, lng: -71.0582}, title: "Haymarket", icon: orange_image});
  Haymarket.setMap(map);
  Haymarket.addListener("mouseover", function() {infowindow.setContent(Haymarket.title); infowindow.open(map, Haymarket);});
  Haymarket.addListener("mouseout", function() {infowindow.close();});

  var State = new google.maps.Marker({position: {lat: 42.3587, lng: -71.0578}, title: "State", icon: orange_image});
  State.setMap(map);
  State.addListener("mouseover", function() {infowindow.setContent(State.title); infowindow.open(map, State);});
  State.addListener("mouseout", function() {infowindow.close();});

  var Chinatown = new google.maps.Marker({position: {lat: 42.3522, lng: -71.0627}, title: "Chinatown", icon: orange_image});
  Chinatown.setMap(map);
  Chinatown.addListener("mouseover", function() {infowindow.setContent(Chinatown.title); infowindow.open(map, Chinatown);});
  Chinatown.addListener("mouseout", function() {infowindow.close();});

  var TuftsMed = new google.maps.Marker({position: {lat: 42.3486, lng: -71.0645}, title: "Tufts Medical Center", icon: orange_image});
  TuftsMed.setMap(map);
  TuftsMed.addListener("mouseover", function() {infowindow.setContent(TuftsMed.title); infowindow.open(map, TuftsMed);});
  TuftsMed.addListener("mouseout", function() {infowindow.close();});

  var BackBay = new google.maps.Marker({position: {lat: 42.3473, lng: -71.0755}, title: "Back Bay", icon: orange_image});
  BackBay.setMap(map);
  BackBay.addListener("mouseover", function() {infowindow.setContent(BackBay.title); infowindow.open(map, BackBay);});
  BackBay.addListener("mouseout", function() {infowindow.close();});

  var MassAve = new google.maps.Marker({position: {lat: 42.3416, lng: -71.0833}, title: "Massachusetts Avenue", icon: orange_image});
  MassAve.setMap(map);
  MassAve.addListener("mouseover", function() {infowindow.setContent(MassAve.title); infowindow.open(map, MassAve);});
  MassAve.addListener("mouseout", function() {infowindow.close();});

  var Ruggles = new google.maps.Marker({position: {lat: 42.3362, lng: -71.0895}, title: "Ruggles", icon: orange_image});
  Ruggles.setMap(map);
  Ruggles.addListener("mouseover", function() {infowindow.setContent(Ruggles.title); infowindow.open(map, Ruggles);});
  Ruggles.addListener("mouseout", function() {infowindow.close();});

  var RoxburyCrossing = new google.maps.Marker({position: {lat: 42.3313, lng: -71.0956}, title: "Roxbury Crossing", icon: orange_image});
  RoxburyCrossing.setMap(map);
  RoxburyCrossing.addListener("mouseover", function() {infowindow.setContent(RoxburyCrossing.title); infowindow.open(map, RoxburyCrossing);});
  RoxburyCrossing.addListener("mouseout", function() {infowindow.close();});

  var Jackson = new google.maps.Marker({position: {lat: 42.3229, lng: -71.1}, title: "Jackson Square", icon: orange_image});
  Jackson.setMap(map);
  Jackson.addListener("mouseover", function() {infowindow.setContent(Jackson.title); infowindow.open(map, Jackson);});
  Jackson.addListener("mouseout", function() {infowindow.close();});

  var StonyBrook = new google.maps.Marker({position: {lat: 42.3172, lng: -71.1043}, title: "Stony Brook", icon: orange_image});
  StonyBrook.setMap(map);
  StonyBrook.addListener("mouseover", function() {infowindow.setContent(StonyBrook.title); infowindow.open(map, StonyBrook);});
  StonyBrook.addListener("mouseout", function() {infowindow.close();});

  var GreenStreet = new google.maps.Marker({position: {lat: 42.3102, lng: -71.1078}, title: "Green Street", icon: orange_image});
  GreenStreet.setMap(map);
  GreenStreet.addListener("mouseover", function() {infowindow.setContent(GreenStreet.title); infowindow.open(map, GreenStreet);});
  GreenStreet.addListener("mouseout", function() {infowindow.close();});

  var ForestHills = new google.maps.Marker({position: {lat: 42.300735, lng: -71.114065}, title: "Forest Hills", icon: orange_image});
  ForestHills.setMap(map);
  ForestHills.addListener("mouseover", function() {infowindow.setContent(ForestHills.title); infowindow.open(map, ForestHills);});
  ForestHills.addListener("mouseout", function() {infowindow.close();});
  
  var orange_coordinates = [OakGrove.position, MaldenCenter.position, Wellington.position, Assembly.position, Sullivan.position, CommunityCollege.position, North.position, Haymarket.position, State.position, DowntownCrossing.position, Chinatown.position, TuftsMed.position, BackBay.position, MassAve.position, Ruggles.position, RoxburyCrossing.position, Jackson.position, StonyBrook.position, GreenStreet.position, ForestHills.position]
  
  var orange_line = new google.maps.Polyline ({path: orange_coordinates, geodesic: true, strokeColor: "#FFA500"});
  orange_line.setMap(map);
}
