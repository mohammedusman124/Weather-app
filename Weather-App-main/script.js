let button = document.querySelector(".button");
let inputvalue = document.querySelector(".search-box");
let temp = document.querySelector(".current .temp");
let description = document.querySelector(".current .weather");
let city = document.querySelector(".location .city");
let date = document.querySelector(".location .date");

button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=03a094de2fbed757402784c8ab602833`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Please Enter Correct City Name"));
});

const displayData = (weather) => {
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
  description.innerText = `${weather.weather[0].description}`;
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  date.innerText = dateBuilder(now);
};

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
function append3(data3){
    let weekforcast=document.getElementById("weekforcast");

    weekforcast.innerHTML=null;
    data3.forEach(function(el){
        let card = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText =el.date;
        let type = document.createElement("h3");
        type.innerText =el.day.condition.text;
        let image = document.createElement("img");
        image.src=el.day.condition.icon;
        let maxt = document.createElement("h3");
        maxt.innerText = el.day.maxtemp_c ;
        let mint = document.createElement("h3");
        mint.innerText = el.day.mintemp_c;

        card.append(h3,type,image,maxt,mint);
        weekforcast.append(card);
    })

}
