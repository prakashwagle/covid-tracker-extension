function getCovidData() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://api.covidtracking.com/v1/us/current.json", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  document.getElementById("div").innerHTML =
    xmlhttp.statusText +
    ":" +
    xmlhttp.status +
    "<BR><textarea rows='20' cols='20'>" +
    xmlhttp.responseText +
    "</textarea>";
}

function getCovidDataFetch() {
  fetch("https://api.covidtracking.com/v1/us/current.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Data: " + JSON.stringify(data));
      document.getElementById("div").innerHTML =
        "<BR><textarea rows='20' cols='20'>" + data + "</textarea>";
    })
    .catch((error) => {
      alert("Error: " + error);
    });
}
