const dateObject = new Date();

const todayDayNumber = dateObject.getDay();

// const weekDay = new Array(7);
// weekDay[0] = "Sunday";
// weekDay[1] = "Monday";
// weekDay[2] = "Tuesday";
// weekDay[3] = "Wednesday";
// weekDay[4] = "Thursday";
// weekDay[5] = "Friday";
// weekDay[6] = "Saturday";

const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/15084?unitGroup=metric&key=X82FS5VJBNVXK9SZXSK4QJW8D&contentType=json";

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-18.1667&lon=49.3833&exclude={part}&appid=fa87a3e2f8852a06dafa05368ef0fa93&units=imperial"

fetch(URL) 
    .then((response) => response.json())
    .then((weatherInfo)  => {
        console.log(weatherInfo);
        console.log(weatherInfo.currentConditions);

        /* update the current temperature */

        let myList = weatherInfo.daily;

        let forecastDayNumber = todayDayNumber;

        /* update the current information for the weather summary */
        document.getElementById("temp").textContent = weatherInfo.currentConditions.temp;
        document.getElementById("windspeed").textContent = weatherInfo.currentConditions.windspeed;
    } )


