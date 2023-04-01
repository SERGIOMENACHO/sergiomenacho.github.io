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
        
fetch(URL) 
    .then((response) => response.json())
    .then((weatherInfo)  => {

        /* update the current temperature */
        let iconpath = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/'+ weatherInfo.currentConditions.icon + '.svg';
        let iconImage = document.getElementById("weatherIcon");
        iconImage.src = iconpath;
        iconImage.alt = weatherInfo.currentConditions.icon;
        
        /* update the current information for the weather summary */
        document.getElementById("temp").textContent = weatherInfo.currentConditions.temp;
        document.getElementById("windspeed").textContent = weatherInfo.currentConditions.windspeed;
        document.getElementById("description").textContent = weatherInfo.description;
    } )

