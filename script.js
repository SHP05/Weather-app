let getcity = document.getElementById('City')
let icon = document.querySelector("#icon");
let temp =document.querySelector("#temp");
let humidity = document.querySelector("#humidity")
let maindiv = document.querySelector(".main_div");
let city = document.querySelector("city")
let load = document.querySelector(".card-body")

const getWether = async() =>{
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${getcity.value}`;
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '2524127870msh16c44ff0fce5414p129c38jsn845f10308937',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
temp.innerHTML = `<div class="custom-loader"></div>`
try{
	maindiv.style.visibility = "visible";
	const response = await fetch(url, options);
	const result = await response.text();
	let weather = JSON.parse(result);
	console.log(weather);
  	temp.innerHTML = "Temprature: "+weather.temp + "°C";
	humidity.innerHTML = "Humidity " + weather.humidity
	getdate();
	city.innerHTML = getcity.value;
}

catch(error){
	console.error(error);
	op.innerHTML = "";
}

}

function getdate(){
	let date = new Date().getHours();
	console.log(date);
	if(date >= 1 && date < 6)
	{
		icon.innerHTML = `<i class="fa-solid fa-moon-stars"></i>`
	}
	else if(date >= 6 && date <19)
	{
		icon.innerHTML =  `<i class="fa-solid fa-sun" style="color: #ffdd00;"></i>`
	}
	else{
		icon.innerHTML =  `<i class="fa-regular fa-moon"></i>`
	}


}
