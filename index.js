var cityArr = ['Delhi', 'Mumbai', 'Kolkata', 'Noida', 'Mathura', 'Lucknow'];
function requestData() {
  $('.weather td').remove();
  for (let i=0; i<cityArr.length; i++) {
    const cUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityArr[i]}&appid=0c8a1ab5717f74d9705a27b1da25fbc5`;
    loadDoc(cUrl, myFunction);
  }
}
function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction(xhttp) {
  try {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let row = '';
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
  }catch(error){
    console.log(error)
  }

}
