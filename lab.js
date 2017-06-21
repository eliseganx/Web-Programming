function parse() {
  var xmlhttp = new XMLHttpRequest();
  var jsondata = "data.json";
  //for Part 2: var jsondata = "https://messagehub.herokuapp.com/messages.json";

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var parseddata = JSON.parse(xmlhttp.responseText);
      print(parseddata);
    }
  };
  xmlhttp.open("GET", jsondata, true);
  xmlhttp.send();
}

function print(array) {
  var output = "";
  var i;
  for (i = 0; i < array.length; i++) {
    output += array[i].content + " " + array[i].username + "<br>";
  }
  document.getElementById("messages").innerHTML = output;
} 
