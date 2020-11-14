function getCovidDataFetch() {
  fetch("https://api.covidtracking.com/v1/us/current.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("FetchDisplay").innerHTML =
        "<BR><textarea rows='20' cols='20'>" +
        JSON.stringify(data) +
        "</textarea>";
    })
    .catch((error) => {
      alert("Error: " + error);
    });
}
