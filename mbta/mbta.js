function init() {
  map_center = {lat: 42.352271, lng: -71.05524200000001}; // for center of USA - {lat: 42.877742, lng: -97.380979};
  infowindow = new google.maps.InfoWindow();
  map_options = {
    zoom: 11,
    center: map_center,
    mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById("final_map"), map_options);
  setRedLine();
  setOrangeLine();
  setBlueLine();

//set up geolocation
  var mypng = {url: "youarehere.png", scaledSize: new google.maps.Size(23,34)};

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var mylat = position.coords.latitude;
      var mylng = position.coords.longitude;
      var coord = new google.maps.LatLng(mylat, mylng);
      var mymarker = new google.maps.Marker({
        position: coord,
        map: map,
        title: "You Are Here",
        icon: mypng
      });
      mymarker.setMap(map);
      ClosestStationToMePolyline(mymarker);
    });
  }
  
  else {
    alert("Geolocation is not supported by your web browser.");
  }
  
}

function setRedLine() {
  var red_image = {url: "RedT.png", scaledSize: new google.maps.Size(23,34)};
  var red_orange_image = {url: "RedOrangeT.png",scaledSize: new google.maps.Size(23,34)};

  //Define and place Red Line stations on Map
  //Also add listener where info window pops up when mousing over icon
  Alewife = new google.maps.Marker ( {position: {lat: 42.395428, lng: -71.142483}, title: "Alewife", icon: red_image});
  Alewife.setMap(map);

  Davis = new google.maps.Marker ( {position: {lat: 42.39674, lng: -71.121815}, title: "Davis", icon: red_image});
  Davis.setMap(map);

  Porter = new google.maps.Marker ( {position: {lat: 42.3884, lng: -71.11914899999999}, title: "Porter Square", icon: red_image});
  Porter.setMap(map);
  
  Harvard = new google.maps.Marker ( {position: {lat: 42.373362, lng: -71.118956}, title: "Harvard Square", icon: red_image});
  Harvard.setMap(map);
  
  Central = new google.maps.Marker ( {position: {lat: 42.365486, lng: -71.103802}, title: "Central Square", icon: red_image});
  Central.setMap(map);
  
  Kendall = new google.maps.Marker ( {position: {lat: 42.36249079, lng: -71.08617653}, title: "Kendall/MIT", icon: red_image});
  Kendall.setMap(map);
 
  Charles = new google.maps.Marker ( {position: {lat: 42.361166, lng: -71.070628}, title: "Charles/MGH", icon: red_image});
  Charles.setMap(map);

  Park = new google.maps.Marker ( {position: {lat: 42.35639457, lng: -71.0624242}, title: "Park Street", icon: red_image});
  Park.setMap(map);

  //Global variable because station is on both Red and Orange Lines.
  DowntownCrossing = new google.maps.Marker ( {position: {lat: 42.355518, lng: -71.060225}, title: "Downtown Crossing", icon: red_orange_image});
  DowntownCrossing.setMap(map);
 
  SouthStation = new google.maps.Marker({position: {lat: 42.352271, lng: -71.05524200000001}, title: "South Station", icon: red_image});
  SouthStation.setMap(map);
  
  Broadway = new google.maps.Marker ( {position: {lat: 42.342622, lng: -71.056967}, title: "Broadway", icon: red_image});
  Broadway.setMap(map);
  
  Andrew = new google.maps.Marker ( {position: {lat: 42.330154, lng: -71.057655}, title: "Andrew", icon: red_image});
  Andrew.setMap(map);
  
  JFK = new google.maps.Marker ( {position: {lat: 42.320685, lng: -71.052391}, title: "JFK/UMass", icon: red_image});
  JFK.setMap(map);
  
  SavinHill = new google.maps.Marker ( {position: {lat: 42.31129, lng: -71.053331}, title: "Savin Hill", icon: red_image});
  SavinHill.setMap(map);
  
  FieldsCorner = new google.maps.Marker ( {position: {lat: 42.300093, lng: -71.061667}, title: "Fields Corner", icon: red_image});
  FieldsCorner.setMap(map);
  
  Shawmut = new google.maps.Marker ( {position: {lat: 42.29312583, lng: -71.06573796000001}, title: "Shawmut", icon: red_image});
  Shawmut.setMap(map);
  
  Ashmont = new google.maps.Marker ( {position: {lat: 42.284652, lng: -71.06448899999999}, title: "Ashmont", icon: red_image});
  Ashmont.setMap(map);
 
  NorthQuincy = new google.maps.Marker ( {position: {lat: 42.275275, lng: -71.029583}, title: "North Quincy", icon: red_image});
  NorthQuincy.setMap(map);
 
  Wollaston = new google.maps.Marker ( {position: {lat: 42.2665139, lng: -71.0203369}, title: "Wollaston", icon: red_image});
  Wollaston.setMap(map);
  
  QuincyCenter = new google.maps.Marker ( {position: {lat: 42.251809, lng: -71.005409}, title: "Quincy Center", icon: red_image});
  QuincyCenter.setMap(map);
 
  QuincyAdams = new google.maps.Marker ( {position: {lat: 42.233391, lng: -71.007153}, title: "Quincy Adams", icon: red_image});
  QuincyAdams.setMap(map);
 
  Braintree = new google.maps.Marker ( {position: {lat: 42.2078543, lng: -71.0011385}, title: "Braintree", icon: red_image});
  Braintree.setMap(map);
  
  AddRedPolylines();
  parseRedLinedata();
}

function AddRedPolylines() {
  //Create and place Red Line polylines
  var BeforeBranchCoordinates = [Alewife.position, Davis.position, Porter.position, Harvard.position, Central.position, Kendall.position, Charles.position, Park.position, DowntownCrossing.position, SouthStation.position, Broadway.position, Andrew.position, JFK.position];
  
  var BeforeBranch = new google.maps.Polyline ({path: BeforeBranchCoordinates, geodesic: true, strokeColor: "#FF0000"});
  BeforeBranch.setMap(map);

  var QuincyStartCoordinates = [JFK.position, NorthQuincy.position, Wollaston.position, QuincyCenter.position, QuincyAdams.position, Braintree.position];

  var QuincyStart = new google.maps.Polyline ({path: QuincyStartCoordinates, geodesic: true, strokeColor: "#FF0000"});
  QuincyStart.setMap(map);

  var SavinStartCoordinates = [JFK.position, SavinHill.position, FieldsCorner.position, Shawmut.position, Ashmont.position];

  var SavinStart = new google.maps.Polyline ({path: SavinStartCoordinates, geodesic: true, strokeColor: "#FF0000"});
  SavinStart.setMap(map);
}

function parseRedLinedata() {
  var jsondata = "https://protected-garden-71486.herokuapp.com/redline.json";

  Alewife.addListener("mouseover", function() {
    infowindow.setContent("<center>" + Alewife.title + "</br> Click for more info" + "</center>"); 
    infowindow.open(map, Alewife);
  });
  Alewife.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Alewife") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Alewife);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Davis.addListener("mouseover", function() {infowindow.setContent("<center>" + Davis.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Davis);});
  Davis.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Davis") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Davis);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Porter.addListener("mouseover", function() {infowindow.setContent("<center>" + Porter.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Porter);});
  Porter.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Porter Square") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Porter);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Harvard.addListener("mouseover", function() {infowindow.setContent("<center>" + Harvard.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Harvard);});
  Harvard.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Harvard Square") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Harvard);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Central.addListener("mouseover", function() {infowindow.setContent("<center>" + Central.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Central);});
  Central.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Central Square") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Central);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Kendall.addListener("mouseover", function() {infowindow.setContent("<center>" + Kendall.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Kendall);});
  Kendall.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Kendall/MIT") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Kendall);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Charles.addListener("mouseover", function() {infowindow.setContent("<center>" + Charles.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Charles);});
  Charles.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Charles/MGH") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Charles);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Park.addListener("mouseover", function() {infowindow.setContent("<center>" + Park.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Park);});
  Park.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Park Street") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Park);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  DowntownCrossing.addListener("mouseover", function() {infowindow.setContent("<center>" + DowntownCrossing.title + "</br> Click for more info" + "</center>"); infowindow.open(map, DowntownCrossing);});
  DowntownCrossing.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Downtown Crossing") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, DowntownCrossing);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  SouthStation.addListener("mouseover", function() {infowindow.setContent("<center>" + SouthStation.title + "</br> Click for more info" + "</center>"); infowindow.open(map, SouthStation);});
  SouthStation.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "South Station") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, SouthStation);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Broadway.addListener("mouseover", function() {infowindow.setContent("<center>" + Broadway.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Broadway);});
  Broadway.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Broadway") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Broadway);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Andrew.addListener("mouseover", function() {infowindow.setContent("<center>" + Andrew.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Andrew);});
  Andrew.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Andrew") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Andrew);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  JFK.addListener("mouseover", function() {infowindow.setContent("<center>" + JFK.title + "</br> Click for more info" + "</center>"); infowindow.open(map, JFK);});
  JFK.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "JFK/UMass") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, JFK);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  SavinHill.addListener("mouseover", function() {infowindow.setContent("<center>" + SavinHill.title + "</br> Click for more info" + "</center>"); infowindow.open(map, SavinHill);});
  SavinHill.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Savin Hill") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, SavinHill);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  }); 

  FieldsCorner.addListener("mouseover", function() {infowindow.setContent("<center>" + FieldsCorner.title + "</br> Click for more info" + "</center>"); infowindow.open(map, FieldsCorner);});
  FieldsCorner.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Fields Corner") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, FieldsCorner);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Shawmut.addListener("mouseover", function() {infowindow.setContent("<center>" + Shawmut.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Shawmut);});
  Shawmut.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Shawmut") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Shawmut);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Ashmont.addListener("mouseover", function() {infowindow.setContent("<center>" + Ashmont.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Ashmont);});
  Ashmont.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Ashmont") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Ashmont);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  NorthQuincy.addListener("mouseover", function() {infowindow.setContent("<center>" + NorthQuincy.title + "</br> Click for more info" + "</center>"); infowindow.open(map, NorthQuincy);});
  NorthQuincy.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "North Quincy") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, NorthQuincy);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Wollaston.addListener("mouseover", function() {infowindow.setContent("<center>" + Wollaston.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Wollaston);});
  Wollaston.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Wollaston") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Wollaston);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  QuincyCenter.addListener("mouseover", function() {infowindow.setContent("<center>" + QuincyCenter.title + "</br> Click for more info" + "</center>"); infowindow.open(map, QuincyCenter);});
  QuincyCenter.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Quincy Center") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, QuincyCenter);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  QuincyAdams.addListener("mouseover", function() {infowindow.setContent("<center>" + QuincyAdams.title + "</br> Click for more info" + "</center>"); infowindow.open(map, QuincyAdams);});
  QuincyAdams.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Quincy Adams") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, QuincyAdams);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });

  Braintree.addListener("mouseover", function() {infowindow.setContent("<center>" + Braintree.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Braintree);});
  Braintree.addListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var tripdata = JSON.parse(request.responseText);
        var traintoAle = new Array();
        var traintoAsh = new Array();
        var traintoBrain = new Array();
        var printAle = "Train Arrivals </br>";
        var printAsh = "";
        var printBrain = "";
        for (var i in tripdata.TripList.Trips) {
          for (var j in tripdata.TripList.Trips[i].Predictions)
            if (tripdata.TripList.Trips[i].Predictions[j].Stop == "Braintree") {
                if (tripdata.TripList.Trips[i].Destination == "Alewife") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAle.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Ashmont") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoAsh.push(addthis);
                }
                else if (tripdata.TripList.Trips[i].Destination == "Braintree") {
                  var addthis = tripdata.TripList.Trips[i].Predictions[j].Seconds
                  traintoBrain.push(addthis);
                }
          }
        traintoAle = traintoAle.sort(function(a, b){return a > b});
        traintoAsh = traintoAsh.sort(function(a, b){return a > b});
        traintoBrain = traintoBrain.sort(function(a, b){return a > b});
        }
        for (var i in traintoAle) {
          var timesec = Math.round(traintoAle[i]/60);
          printAle = printAle + "Destination: Alewife - " + timesec + " min </br>";
        }
        for (var i in traintoAsh) {
          var timesec = Math.round(traintoAsh[i]/60);
          printAsh = printAsh + "Destination: Ashmont - " + timesec + " min </br>";
        }
        for (var i in traintoBrain) {
          var timesec = Math.round(traintoBrain[i]/60);
          printBrain = printBrain + "Destination: Braintree - " + timesec + " min </br>";
        }
        infowindow.setContent("<center>" + printAle + printAsh + printBrain + " </center>");
        infowindow.open(map, Braintree);
      }
    };
    request.open("GET", jsondata, true);
    request.send();
  });
}

function ClosestStationToMePolyline(mymarker)  {
  var allstations = [Alewife, Davis, Porter, Harvard, Central, Kendall, Charles, Park, DowntownCrossing, SouthStation, Broadway, Andrew, JFK, NorthQuincy, Wollaston, QuincyCenter, QuincyAdams, Braintree, SavinHill, FieldsCorner, Shawmut, Ashmont];
  var shortestdist = 1000000000; 
  var closeststation;
  for (var i = 0; i < allstations.length; i++) {
    var teststation = allstations[i].title;
    var teststationpos = allstations[i].position;
    var testdist = google.maps.geometry.spherical.computeDistanceBetween(mymarker.position, teststationpos);
    if (testdist < shortestdist) {
      shortestdist = testdist;
      closeststation = teststation;
      closeststationpos = teststationpos;
    } 
  }
  var coordinates = [mymarker.position, closeststationpos];
  var polyline = new google.maps.Polyline ({path: coordinates, geodesic: true, strokeColor: "#000000"});
  polyline.setMap(map);

  shortestdistmiles = shortestdist * 0.000621371192;
  mymarker.addListener("mouseover", function() {infowindow.setContent("<center>" + mymarker.title + "</br> Click for more info" + "</center>"); infowindow.open(map, mymarker);});
  mymarker.addListener("click", function() {
    infowindow.setContent("<center> Closest MBTA Red Line Station: " + closeststation + "</br> Miles away: " + shortestdistmiles + "</center>"); 
    infowindow.open(map, mymarker);
  });
}

function setOrangeLine() {
  var orange_image = {url: "OrangeT.png", scaledSize: new google.maps.Size(23,34)};
  var orange_blue_image = {url: "OrangeBlueT.png", scaledSize: new google.maps.Size(23,34)};

  //Define and place Orange Line stations on Map
  //Also add listener where info window pops up when mousing over icon
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

  //Global variable because station is on both Blue and Orange Lines.
  State = new google.maps.Marker({position: {lat: 42.3587, lng: -71.0578}, title: "State", icon: orange_blue_image});
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
  
  //Create and place Orange Line polyline
  var OrangeCoordinates = [OakGrove.position, MaldenCenter.position, Wellington.position, Assembly.position, Sullivan.position, CommunityCollege.position, North.position, Haymarket.position, State.position, DowntownCrossing.position, Chinatown.position, TuftsMed.position, BackBay.position, MassAve.position, Ruggles.position, RoxburyCrossing.position, Jackson.position, StonyBrook.position, GreenStreet.position, ForestHills.position]
  var OrangeLine = new google.maps.Polyline ({path: OrangeCoordinates, geodesic: true, strokeColor: "#FFA500"});
  OrangeLine.setMap(map);
}

function setBlueLine() {
  var blue_image = {url: "BlueT.png", scaledSize: new google.maps.Size(23,34)};

  //Define and place Blue Line stations on Map
  //Also add listener where info window pops up when mousing over icon
  var Wonderland = new google.maps.Marker ( {position: {lat: 42.4135, lng: -70.9918}, title: "Wonderland", icon: blue_image});
  Wonderland.setMap(map);
  Wonderland.addListener("mouseover", function() {infowindow.setContent(Wonderland.title); infowindow.open(map, Wonderland);});
  Wonderland.addListener("mouseout", function() {infowindow.close();});

  var RevereBeach = new google.maps.Marker ( {position: {lat: 42.4078, lng: -70.9926}, title: "Revere Beach", icon: blue_image});
  RevereBeach.setMap(map);
  RevereBeach.addListener("mouseover", function() {infowindow.setContent(RevereBeach.title); infowindow.open(map, RevereBeach);});
  RevereBeach.addListener("mouseout", function() {infowindow.close();});

  var Beachmont = new google.maps.Marker ( {position: {lat: 42.3975, lng: -70.9922}, title: "Beachmont", icon: blue_image});
  Beachmont.setMap(map);
  Beachmont.addListener("mouseover", function() {infowindow.setContent(Beachmont.title); infowindow.open(map, Beachmont);});
  Beachmont.addListener("mouseout", function() {infowindow.close();});

  var SuffolkDowns = new google.maps.Marker ( {position: {lat: 42.3904, lng: -70.997}, title: "Suffolk Downs", icon: blue_image});
  SuffolkDowns.setMap(map);
  SuffolkDowns.addListener("mouseover", function() {infowindow.setContent(SuffolkDowns.title); infowindow.open(map, SuffolkDowns);});
  SuffolkDowns.addListener("mouseout", function() {infowindow.close();});

  var OrientHeights = new google.maps.Marker ( {position: {lat: 42.3871, lng: -71.0042}, title: "Orient Heights", icon: blue_image});
  OrientHeights.setMap(map);
  OrientHeights.addListener("mouseover", function() {infowindow.setContent(OrientHeights.title); infowindow.open(map, OrientHeights);});
  OrientHeights.addListener("mouseout", function() {infowindow.close();});

  var WoodIsland = new google.maps.Marker ( {position: {lat: 42.3797, lng: -71.023}, title: "Wood Island", icon: blue_image});
  WoodIsland.setMap(map);
  WoodIsland.addListener("mouseover", function() {infowindow.setContent(WoodIsland.title); infowindow.open(map, WoodIsland);});
  WoodIsland.addListener("mouseout", function() {infowindow.close();});

  var Airport = new google.maps.Marker ( {position: {lat: 42.374374, lng: -71.030243}, title: "Airport", icon: blue_image});
  Airport.setMap(map);
  Airport.addListener("mouseover", function() {infowindow.setContent(Airport.title); infowindow.open(map, Airport);});
  Airport.addListener("mouseout", function() {infowindow.close();});

  var Maverick = new google.maps.Marker ( {position: {lat: 42.3691, lng: -71.0395}, title: "Maverick", icon: blue_image});
  Maverick.setMap(map);
  Maverick.addListener("mouseover", function() {infowindow.setContent(Maverick.title); infowindow.open(map, Maverick);});
  Maverick.addListener("mouseout", function() {infowindow.close();});

  var Aquarium = new google.maps.Marker ( {position: {lat: 42.3593, lng: -71.0531}, title: "Aquarium", icon: blue_image});
  Aquarium.setMap(map);
  Aquarium.addListener("mouseover", function() {infowindow.setContent(Aquarium.title); infowindow.open(map, Aquarium);});
  Aquarium.addListener("mouseout", function() {infowindow.close();});

  var GovernmentCenter = new google.maps.Marker ( {position: {lat: 42.359444, lng: -71.059444}, title: "Government Center", icon: blue_image});
  GovernmentCenter.setMap(map);
  GovernmentCenter.addListener("mouseover", function() {infowindow.setContent(GovernmentCenter.title); infowindow.open(map, GovernmentCenter);});
  GovernmentCenter.addListener("mouseout", function() {infowindow.close();});

  var Bowdoin = new google.maps.Marker ( {position: {lat: 42.3614, lng: -71.0622}, title: "Bowdoin", icon: blue_image});
  Bowdoin.setMap(map);
  Bowdoin.addListener("mouseover", function() {infowindow.setContent(Bowdoin.title); infowindow.open(map, Bowdoin);});
  Bowdoin.addListener("mouseout", function() {infowindow.close();});

  //Create and place Blue Line polyline
  var BlueCoordinates = [Wonderland.position, RevereBeach.position, Beachmont.position, SuffolkDowns.position, OrientHeights.position, WoodIsland.position, Airport.position, Maverick.position, Aquarium.position, State.position, GovernmentCenter.position, Bowdoin.position]; 
  var BlueLine = new google.maps.Polyline ({path: BlueCoordinates, geodesic: true, strokeColor: "#0000FF"});
  BlueLine.setMap(map);
}


  
