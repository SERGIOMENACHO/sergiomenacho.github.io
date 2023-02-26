let temp = 33;
let windspeed = 10;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
document.querySelector(".wind-chill-number").textContent = `Wind Chill: ${chill}\u00B0`;

/*storage local and session*/

localStorage.setItem('name','Julie Anderson - Permanent');
sessionStorage.setItem('class','WDD230 - not Permanent');