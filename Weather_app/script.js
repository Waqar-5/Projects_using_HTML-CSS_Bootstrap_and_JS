const apikey = "add your api here";
const apiUrl = "add api url";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// SweetAlert2 Toast Config
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

// Check weather function
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);

        if(response.status === 404){
            Toast.fire({
                icon: 'error',
                title: 'Invalid City Name!'
            });
            document.querySelector(".weather").style.display = "none";
            return;
        }

        const data = await response.json();
        console.log(data);

        // Update UI
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Weather Icons
        const condition = data.weather[0].main;
       switch(condition){
    case "Clouds": weatherIcon.src = "./assets/clouds.png"; break;
    case "Clear": weatherIcon.src = "./assets/clear.png"; break;
    case "Rain": weatherIcon.src = "./assets/rain.png"; break;
    case "Drizzle": weatherIcon.src = "./assets/drizzle.png"; break;
    case "Mist": weatherIcon.src = "./assets/mist.png"; break;
    case "Snow": weatherIcon.src = "./assets/snow.png"; break;
    default: weatherIcon.src = "./assets/mist.png"; // fallback
}


        
        

        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: 'Something went wrong!'
        });
        document.querySelector(".weather").style.display = "none";
        console.error(error);
    }
}

// Search button click
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if(!city){
        Toast.fire({
            icon: 'warning',
            title: 'Enter a city name!'
        });
        return;
    }
    checkWeather(city);
});

// Enter key press
searchBox.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        const city = searchBox.value.trim();
        if(!city){
            Toast.fire({
                icon: 'warning',
                title: 'Enter a city name!'
            });
            return;
        }
        checkWeather(city);
    }
});



// const apikey = "add you api key here";
// const apiUrl = "and api url here";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// // SweetAlert2 Animated Toast Config
// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 2500,
//     timerProgressBar: true,
//     showClass: {
//         popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//         popup: 'animate__animated animate__fadeOutUp'
//     },
//     didOpen: (toast) => {
//         toast.addEventListener('mouseenter', Swal.stopTimer)
//         toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
// });

// // Check weather function
// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apikey}`);

//         if(response.status === 404){
//             Toast.fire({
//                 icon: 'error',
//                 title: 'Invalid City Name!',
//                 background: '#ffe6e6',  // soft red
//                 color: '#cc0000',       // text color
//                 iconColor: '#cc0000'
//             });
//             document.querySelector(".weather").style.display = "none";
//             return;
//         }

//         const data = await response.json();
//         console.log(data);

//         // Update UI
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

//         // Weather Icons (robust)
//         const condition = data.weather[0].main.toLowerCase();
//         if(condition.includes("cloud")) weatherIcon.src = "./assets/clouds.png";
//         else if(condition.includes("clear")) weatherIcon.src = "./assets/clear.png";
//         else if(condition.includes("rain")) weatherIcon.src = "./assets/rain.png";
//         else if(condition.includes("drizzle")) weatherIcon.src = "./assets/drizzle.png";
//         else if(condition.includes("mist") || condition.includes("fog") || condition.includes("haze")) weatherIcon.src = "./assets/mist.png";
//         else if(condition.includes("snow")) weatherIcon.src = "./assets/snow.png";
//         else if(condition.includes("thunder") || condition.includes("storm")) weatherIcon.src = "./assets/thunder.png";
//         else weatherIcon.src = "./assets/default.png"; // fallback

//         // Success toast
//         Toast.fire({
//             icon: 'success',
//             title: `Weather for ${data.name} Loaded!`,
//             background: '#e6ffe6', // soft green
//             color: '#006600',
//             iconColor: '#006600'
//         });

//         document.querySelector(".weather").style.display = "block";

//     } catch (error) {
//         Toast.fire({
//             icon: 'error',
//             title: 'Something went wrong!',
//             background: '#ffe6e6',
//             color: '#cc0000',
//             iconColor: '#cc0000'
//         });
//         document.querySelector(".weather").style.display = "none";
//         console.error(error);
//     }
// }

// // Search button click
// searchBtn.addEventListener("click", () => {
//     const city = searchBox.value.trim();
//     if(!city){
//         Toast.fire({
//             icon: 'warning',
//             title: 'Enter a city name!',
//             background: '#fffbe6',
//             color: '#cc9900',
//             iconColor: '#cc9900'
//         });
//         return;
//     }
//     checkWeather(city);
// });

// // Enter key press
// searchBox.addEventListener("keypress", (e) => {
//     if(e.key === "Enter"){
//         const city = searchBox.value.trim();
//         if(!city){
//             Toast.fire({
//                 icon: 'warning',
//                 title: 'Enter a city name!',
//                 background: '#fffbe6',
//                 color: '#cc9900',
//                 iconColor: '#cc9900'
//             });
//             return;
//         }
//         checkWeather(city);
//     }
// });
