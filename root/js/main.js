
// Weather Data

const weatherData = {
    "tempUnit": "C",
    "windSpeedUnit": "m/s",
    "days": [
        { "day": "Mon", "temp": "22", "windDirection": "north-east", "windSpeed": "10", "type": "sunny" },
        { "day": "Tue", "temp": "14", "windDirection": "north-west", "windSpeed": "14", "type": "rainy" },
        { "day": "Wed", "temp": "17", "windDirection": "south-east", "windSpeed": "20", "type": "cloudy" },
        { "day": "Thu", "temp": "32", "windDirection": "south-west", "windSpeed": "20", "type": "windy" },
        { "day": "Fri", "temp": "23", "windDirection": "south-east", "windSpeed": "20", "type": "stormy" },
        { "day": "Sat", "temp": "11", "windDirection": "south-west", "windSpeed": "20", "type": "snowy" },
        { "day": "Sun", "temp": "5", "windDirection": "north-west", "windSpeed": "20", "type": "sunny" },
    ]
};


// Function to fill the HTML with cards

let container = document.querySelector('.weather-container');
let card = document.querySelector('.weather-card');
let showInfo = false;

const allCards = () =>{
    
    weatherData.days.map(el => {
            console.log(el.windDirection)

        container.innerHTML += `<div class="weather-card"> 
                                    <div class="${el.type}">
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="weather-icon ">
                                        <img src='./root/img/${el.type}.png' />
                                    </div>
                                    <div class="tempAndDayInfo">
                                        <h1>${el.temp}º</h1>
                                        <p>${el.day}</p>
                                    </div>
                                    <div class="${showInfo ? 'hiddenInfo  show': 'hiddenInfo'}">
                                        <div class="direction">
                                            <p>Wind Direction</p>
                                            <h2>${el.windDirection}</h2>
                                            <i class="fas fa-location-arrow fa-2x ${el.windDirection}"></i>
                                        </div>
                                        <div>
                                            <span>Wind Speed:</span>
                                            <h2>${el.windSpeed} ${weatherData.windSpeedUnit}</h2>
                                        </div>
                                    </div>
                                </div>`
    })


}

// On click Toggle data on the card

// console.log(card)
const infoToggle = (e) => {
   let card = e.target.parentNode.parentNode;
   console.log(this)
       if(card.classList.value == "weather-card"){
           if(showInfo){
               showInfo= false
           }else{
               showInfo = true;
           }
        }
    
    console.log(showInfo)
}
document.addEventListener('click', infoToggle, false);
allCards();