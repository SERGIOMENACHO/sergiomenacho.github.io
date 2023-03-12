const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lima%2C%20Peru?unitGroup=metric&key=X82FS5VJBNVXK9SZXSK4QJW8D&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#'),textContent =
    round (t * 5/9 + 32 );
  };
getWeather();