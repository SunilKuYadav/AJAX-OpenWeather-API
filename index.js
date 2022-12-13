// city names
const cityArr = ['Delhi', 'Mumbai', 'Kolkata', 'Noida', 'Mathura', 'Lucknow'];

// function for intialting API calls
function requestData() {
  $('.weather td').remove();
  for (let i = 0; i < cityArr.length; i++) {
    const cUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityArr[i]}&appid=0c8a1ab5717f74d9705a27b1da25fbc5`;
    loadDoc(cUrl, myFunction);
  }
}

// function for handling API calls
function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () { cFunction(this); }
  xhttp.open("GET", url);
  xhttp.send();
}

// finction for creating the table data and update it
function myFunction(xhttp) {
  try {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let row = '';
      let rawData = JSON.parse(xhttp.responseText);
      row = `
    <tr>
            <td>${rawData.name}</td>
            <td>${rawData.sys.country}</td>
            <td>${Math.round(rawData.main.temp - 273.15)}</td>
            <td>${rawData.weather[0].main}</td>
          </tr>
    `;
      $('.weather').append(row);
    }
  } catch (error) {
    console.log(error)
  }

}


// function run when docs load for the first time
$(() => {
  let row = "";
  cityArr.forEach(item => {
    row += `
    <tr>
            <td>${item}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
    `;
  })
  $('.weather').append(row)
})