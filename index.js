
function requestData() {
  $('.weather td').remove();
    loadDoc("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=0c8a1ab5717f74d9705a27b1da25fbc5", myFunction1);
    loadDoc("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=0c8a1ab5717f74d9705a27b1da25fbc5", myFunction1);
    loadDoc("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=0c8a1ab5717f74d9705a27b1da25fbc5", myFunction1);
    loadDoc("https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=0c8a1ab5717f74d9705a27b1da25fbc5", myFunction1);
}




function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
      let row = '';
    console.log(xhttp.responseText);
    let rawData = JSON.parse(xhttp.responseText);
    raw = `
    <tr>
            <td>${rawData.name}</td>
            <td>${rawData.sys.country}</td>
            <td>${Math.round(rawData.main.temp-273.15)}</td>
            <td>${rawData.weather[0].main}</td>
          </tr>
    `;
    $('.weather').append(raw);
}
}
