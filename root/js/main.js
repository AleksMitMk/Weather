
// Weather Data

const weatherData = {
    "tempUnit": "C",
    "windSpeedUnit": "m/s",
    "days": [
        { "day": "Mon", "temp": "22", "windDirection": "north-east", "windSpeed": "10", "type": "sunny" },
        { "day": "Tue", "temp": "14", "windDirection": "north-west", "windSpeed": "14", "type": "rainy" },
        { "day": "Wed", "temp": "17", "windDirection": "south-east", "windSpeed": "20", "type": "cloudy" },
        { "day": "Thu", "temp": "32", "windDirection": "south-west", "windSpeed": "20", "type": "windy" },
        { "day": "Fri", "temp": "23", "windDirection": "south", "windSpeed": "20", "type": "stormy" },
        { "day": "Sat", "temp": "11", "windDirection": "east", "windSpeed": "20", "type": "snowy" },
        { "day": "Sun", "temp": "5", "windDirection": "west", "windSpeed": "20", "type": "sunny" },
    ]
};


// Function to fill the HTML with cards

let container = document.querySelector('.weather-container');

const allCards = () =>{
    
    weatherData.days.map(el => {
            console.log(el.type)
        container.innerHTML += `<div class="weather-card london">
                                    <div class="weather-icon ">
                                        <img src='./root/img/${el.type}.png' />
                                    </div>
                                    <h1>${el.temp}º</h1>
                                    <p>${el.day}</p>
                                </div>`
    })


}
allCards();