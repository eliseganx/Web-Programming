//Part 1
function parse() {
  var xmlhttp = new XMLHttpRequest();
  var jsondata = "data.json";
  // for part 3: var jsondata = "https://messagehub.herokuapp.com/messages.json";

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

// Part 2: The data doesn't load from a local machine. This makes sense because XMLHttpRequest requests a document from the web server, not the local machine. The document in this case is data.json
// Part 3: The data doesn't load because the link given has a different origin that index.html 
