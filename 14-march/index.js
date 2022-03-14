const do_somethng = function(response){
    return response.json();
}

// default function

const handle_data = function(res){
    
    let sec = res.city.sunset;
let date = new Date(sec * 1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`;
let sec1 = res.city.sunrise;
let date1 = new Date(sec1 * 1000);
let timeStr1 = `${date1.getHours()}:${date1.getMinutes()}`;
    
    const user_arr = res.list[0].main;
    const temp_x = parseInt(res.list[0].main.temp)
    const user_weather = res.list[0].weather;
    const temp = document.getElementById('temp_container');
    const weather = document.getElementById('weather_container');
    const max = document.getElementById('max_temp');
    const min = document.getElementById('min_temp');
    const location = document.getElementById('location')
    const img = document.getElementById('img');
    const input = document.getElementById('txt_input');
    const feel_like = document.getElementById('temp')
    const location2 = document.getElementById('location2')
    const high = document.getElementById('high')
    const low = document.getElementById('low')
    const wind = document.getElementById('wind')
    const pressure = document.getElementById('pressure')
    const visibility = document.getElementById('visibility')
    visibility.innerText = res.list[0].visibility;
    pressure.innerText = `${user_arr.pressure} mb`
    wind.innerText = `${res.list[0].wind.speed}km/h`;
    low.innerHTML = `${user_arr.temp_min}&deg;` 
    high.innerHTML = ` ${user_arr.temp_max}&deg;`
    feel_like.innerHTML = `${parseInt(user_arr.temp)}&deg;`
    location2.innerText = `${res.city.name} ${res.city.country}`
    input.value = res.city.name;
    if(user_weather[0].main == "Clear"){
        img.src = "./sunny.png";
    }
   else if(user_weather[0].main == "Haze"){
     img.src = "./haza.png";
 }
 else if(user_weather[0].main == "Smoke"){
     img.src = "./smoke.png";
 }
 else if(user_weather[0].main == "Clouds"){
     img.src = "./clouds.png";
 }
 else if(user_weather[0].main == "Mist"){
     img.src = "./mist.png";
 }
     else{
         img.src = "./sunny.png";
     }
    temp.innerHTML = `${temp_x}&deg;`
    weather.innerText = user_weather[0].main
     max.innerHTML = `Sunrise ${timeStr1} am`
    min.innerHTML = `Sunset ${timeStr} pm`
    location.innerText = `${res.city.name} ${res.city.country}   ${new Date().toLocaleString()}`
    

    
    // daily Forcast  

    
      // first day
      const daily_title = document.getElementById('daily_location')
      daily_title.innerHTML = `Daily Forcast For ${res.city.name} ${res.city.country}`
    const x =res.list[0].dt_txt
    let y =x.substring(0,10)
   
    const first = document.getElementById('first')
    const first_temp = document.getElementById('first_temp')
    const first_main = document.getElementById('first_main')
    first_main.innerText = `${res.list[0].weather[0].main}  `
    first_temp.innerHTML = `${parseInt(res.list[0].main.temp)}&deg;`
    first.innerText = y
    const img_container = document.getElementById('img_container');
    if(user_weather[0].main == "Clear"){
        img_container.src = "./sunny.png";
    }
   else if(user_weather[0].main == "Haze"){
    img_container.src = "./haza.png";
 }
 else if(user_weather[0].main == "Smoke"){
    img_container.src = "./smoke.png";
 }
 else if(user_weather[0].main == "Clouds"){
    img_container.src = "./clouds.png";
 }
 else if(user_weather[0].main == "Mist"){
    img_container.src = "./mist.png";
 }
     else{
        img_container.src = "./sunny.png";
     }

    // seecond

    const second = document.getElementById('second')
    const second_temp = document.getElementById('second_temp')
    const second_main = document.getElementById('second_main')
    second_main.innerText = `${res.list[8].weather[0].main}`
    second_temp.innerHTML = `${parseInt(res.list[8].main.temp)}&deg;`
    second.innerText = res.list[8].dt_txt.substring(0,10)
    const img_container2 = document.getElementById('img_container2');
    const second_weather = res.list[8].weather;
    if(second_weather[0].main == "Clear"){
        img_container2.src = "./sunny.png";
    }
   else if(second_weather[0].main == "Haze"){
    img_container2.src = "./haza.png";
 }
 else if(second_weather[0].main == "Smoke"){
    img_container2.src = "./smoke.png";
 }
 else if(second_weather[0].main == "Clouds"){
    img_container2.src = "./clouds.png";
 }
 else if(second_weather[0].main == "Mist"){
    img_container2.src = "./mist.png";
 }
     else{
        img_container2.src = "./sunny.png";
     }

    // third
    
    const third = document.getElementById('third')
    const third_temp = document.getElementById('third_temp')
    const third_main = document.getElementById('third_main')
    third_main.innerText = `${res.list[16].weather[0].main}`
    third_temp.innerHTML = `${parseInt(res.list[16].main.temp)}&deg;`
    third.innerText = res.list[16].dt_txt.substring(0,10)

    const img_container3 = document.getElementById('img_container3');
    const third_weather = res.list[16].weather;
    if(third_weather[0].main == "Clear"){
        img_container3.src = "./sunny.png";
    }
   else if(third_weather[0].main == "Haze"){
    img_container3.src = "./haza.png";
 }
 else if(third_weather[0].main == "Smoke"){
    img_container3.src = "./smoke.png";
 }
 else if(third_weather[0].main == "Clouds"){
    img_container3.src = "./clouds.png";
 }
 else if(third_weather[0].main == "Mist"){
    img_container3.src = "./mist.png";
 }
     else{
        img_container3.src = "./sunny.png";
     }


//    four

const four_temp = document.getElementById('four_temp')
const four = document.getElementById('four')
const four_main = document.getElementById('four_main')
four_main.innerText = `${res.list[24].weather[0].main}`
four_temp.innerHTML = `${parseInt(res.list[24].main.temp)}&deg;`
four.innerText = res.list[24].dt_txt.substring(0,10)

const img_container4 = document.getElementById('img_container4');
const four_weather = res.list[24].weather;
if(four_weather[0].main == "Clear"){
    img_container4.src = "./sunny.png";
}
else if(four_weather[0].main == "Haze"){
img_container4.src = "./haza.png";
}
else if(four_weather[0].main == "Smoke"){
img_container4.src = "./smoke.png";
}
else if(four_weather[0].main == "Clouds"){
img_container4.src = "./clouds.png";
}
else if(four_weather[0].main == "Mist"){
img_container4.src = "./mist.png";
}
 else{
    img_container4.src = "./sunny.png";
 }


//  five

const five_temp = document.getElementById('five_temp')
const five = document.getElementById('five')
const five_main = document.getElementById('five_main')
five_main.innerText = `${res.list[34].weather[0].main}`
five_temp.innerHTML = `${parseInt(res.list[34].main.temp)}&deg;`
five.innerText = res.list[34].dt_txt.substring(0,10)

const img_container5 = document.getElementById('img_container5');
const five_weather = res.list[34].weather;
if(five_weather[0].main == "Clear"){
    img_container5.src = "./sunny.png";
}
else if(five_weather[0].main == "Haze"){
img_container5.src = "./haza.png";
}
else if(five_weather[0].main == "Smoke"){
img_container5.src = "./smoke.png";
}
else if(five_weather[0].main == "Clouds"){
img_container5.src = "./clouds.png";
}
else if(five_weather[0].main == "Mist"){
img_container5.src = "./mist.png";
}
 else{
    img_container5.src = "./sunny.png";
 }

}

// auto detect geolocatin 

const api_key ='2fd451fc1dc8157474eadd147680826c'
if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(successFunction);
}
else 
{
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
}       

function successFunction(position) 
{
 var lat = position.coords.latitude;
 var long = position.coords.longitude;
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`)
.then(do_somethng).then(handle_data);
}

// Handle search function

const handle_search = function(res){
     
    let sec = res.city.sunset;
let date = new Date(sec * 1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`;
let sec1 = res.city.sunrise;
let date1 = new Date(sec1 * 1000);
let timeStr1 = `${date1.getHours()}:${date1.getMinutes()}`;
    
    
    const user_arr = res.list[0].main
    const user_weather = res.list[0].weather;
    console.log(res.city.country)
    const temp = document.getElementById('temp_container');
    const weather = document.getElementById('weather_container');
    const max = document.getElementById('max_temp');
    const min = document.getElementById('min_temp');
    const location = document.getElementById('location')
    const img = document.getElementById('img');
    const feel_like = document.getElementById('temp')
    const location2 = document.getElementById('location2')
    const high = document.getElementById('high')
    const low = document.getElementById('low')
    const wind = document.getElementById('wind')
    const pressure = document.getElementById('pressure')
    const visibility = document.getElementById('visibility')
    visibility.innerText = res.list[0].visibility;
    pressure.innerText = `${user_arr.pressure} mb`
    wind.innerText = `${res.list[0].wind.speed}km/h`;
    low.innerHTML = `${user_arr.temp_min}&deg;` 
    high.innerHTML = ` ${user_arr.temp_max}&deg;`
    feel_like.innerHTML = `${parseInt(user_arr.temp)}&deg;`
    location2.innerText = `${res.city.name} ${res.city.country}`
   if(user_weather[0].main == "Clear"){
       img.src = "./sunny.png";
   }
  else if(user_weather[0].main == "Haze"){
    img.src = "./haza.png";
}
else if(user_weather[0].main == "Smoke"){
    img.src = "./smoke.png";
}
else if(user_weather[0].main == "Clouds"){
    img.src = "./clouds.png";
}
else if(user_weather[0].main == "Mist"){
    img.src = "./mist.png";
}
    else{
        img.src = "./sunny.png";
    }
    
    temp.innerHTML = `${parseInt(user_arr.temp)}&deg;`
    weather.innerText = user_weather[0].main
      max.innerHTML = `Sunrise ${timeStr1} am`
    min.innerHTML = `Sunset ${timeStr} pm`
    location.innerText = `${res.city.name} ${res.city.country}`


     // daily Forcast  

    
      // first day
      const daily_title = document.getElementById('daily_location')
      daily_title.innerHTML = `Daily Forcast For ${res.city.name} ${res.city.country}`

    const x =res.list[0].dt_txt
    let y = x.substring(0,10)
   
    const first = document.getElementById('first')
    const first_temp = document.getElementById('first_temp')
    const first_main = document.getElementById('first_main')
    first_main.innerText = `${res.list[0].weather[0].main}  `
    first_temp.innerHTML = `${parseInt(res.list[0].main.temp)}&deg;`
    first.innerText = y
    const img_container = document.getElementById('img_container');
    if(user_weather[0].main == "Clear"){
        img_container.src = "./sunny.png";
    }
   else if(user_weather[0].main == "Haze"){
    img_container.src = "./haza.png";
 }
 else if(user_weather[0].main == "Smoke"){
    img_container.src = "./smoke.png";
 }
 else if(user_weather[0].main == "Clouds"){
    img_container.src = "./clouds.png";
 }
 else if(user_weather[0].main == "Mist"){
    img_container.src = "./mist.png";
 }
     else{
        img_container.src = "./sunny.png";
     }

    // seecond

    const second = document.getElementById('second')
    const second_temp = document.getElementById('second_temp')
    const second_main = document.getElementById('second_main')
    second_main.innerText = `${res.list[8].weather[0].main}`
    second_temp.innerHTML = `${parseInt(res.list[8].main.temp)}&deg;`
    second.innerText = res.list[8].dt_txt.substring(0,10)
    const img_container2 = document.getElementById('img_container2');
    const second_weather = res.list[8].weather;
    if(second_weather[0].main == "Clear"){
        img_container2.src = "./sunny.png";
    }
   else if(second_weather[0].main == "Haze"){
    img_container2.src = "./haza.png";
 }
 else if(second_weather[0].main == "Smoke"){
    img_container2.src = "./smoke.png";
 }
 else if(second_weather[0].main == "Clouds"){
    img_container2.src = "./clouds.png";
 }
 else if(second_weather[0].main == "Mist"){
    img_container2.src = "./mist.png";
 }
     else{
        img_container2.src = "./sunny.png";
     }


    // third
    
    const third = document.getElementById('third')
    const third_temp = document.getElementById('third_temp')
    const third_main = document.getElementById('third_main')
    third_main.innerText = `${res.list[16].weather[0].main}`
    third_temp.innerHTML = `${parseInt(res.list[16].main.temp)}&deg;`
    third.innerText = res.list[16].dt_txt.substring(0,10)
    const img_container3 = document.getElementById('img_container3');
    const third_weather = res.list[16].weather;
    if(third_weather[0].main == "Clear"){
        img_container3.src = "./sunny.png";
    }
   else if(third_weather[0].main == "Haze"){
    img_container3.src = "./haza.png";
 }
 else if(third_weather[0].main == "Smoke"){
    img_container3.src = "./smoke.png";
 }
 else if(third_weather[0].main == "Clouds"){
    img_container3.src = "./clouds.png";
 }
 else if(third_weather[0].main == "Mist"){
    img_container3.src = "./mist.png";
 }
     else{
        img_container3.src = "./sunny.png";
     }


//    four

const four_temp = document.getElementById('four_temp')
const four = document.getElementById('four')
const four_main = document.getElementById('four_main')
four_main.innerText = `${res.list[24].weather[0].main}`
four_temp.innerHTML = `${parseInt(res.list[24].main.temp)}&deg;`
four.innerText = res.list[24].dt_txt.substring(0,10)
const img_container4 = document.getElementById('img_container4');
const four_weather = res.list[24].weather;
    if(four_weather[0].main == "Clear"){
        img_container4.src = "./sunny.png";
    }
   else if(four_weather[0].main == "Haze"){
    img_container4.src = "./haza.png";
 }
 else if(four_weather[0].main == "Smoke"){
    img_container4.src = "./smoke.png";
 }
 else if(four_weather[0].main == "Clouds"){
    img_container4.src = "./clouds.png";
 }
 else if(four_weather[0].main == "Mist"){
    img_container4.src = "./mist.png";
 }
     else{
        img_container4.src = "./sunny.png";
     }



//  five

const five_temp = document.getElementById('five_temp')
const five = document.getElementById('five')
const five_main = document.getElementById('five_main')
five_main.innerText = `${res.list[34].weather[0].main}`
five_temp.innerHTML = `${parseInt(res.list[34].main.temp)}&deg;`
five.innerText = res.list[34].dt_txt.substring(0,10)

const img_container5 = document.getElementById('img_container5');
const five_weather = res.list[34].weather;
    if(five_weather[0].main == "Clear"){
        img_container5.src = "./sunny.png";
    }
   else if(five_weather[0].main == "Haze"){
    img_container5.src = "./haza.png";
 }
 else if(five_weather[0].main == "Smoke"){
    img_container5.src = "./smoke.png";
 }
 else if(five_weather[0].main == "Clouds"){
    img_container5.src = "./clouds.png";
 }
 else if(five_weather[0].main == "Mist"){
    img_container5.src = "./mist.png";
 }
     else{
        img_container5.src = "./sunny.png";
     }


}

const search_fn = function(){
    const input = document.getElementById('txt_input');
    const city_name = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`)
.then(do_somethng).then(handle_search);

}
const btn = document.getElementById('btn');
btn.addEventListener('click',search_fn)


   
