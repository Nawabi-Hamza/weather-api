const api = {
    key:"283a8b9854431b407423b625b636c3ef",
    url:"https://api.openweathermap.org/data/2.5"
}

function search(){
    var city = document.querySelector(".city").value
    if(city){
        document.getElementById("data").style="display:block;";
        fetch(`${api.url}/weather?q=${city}&appid=${api.key}`)
        .then(res => res.json())
        .then(data => {
            
           var tem= (( data.main.temp - 273.15) * 9/5) + 32;
           var temh= (( data.main.temp_max - 273.15) * 9/5) + 32;
           var temm= (( data.main.temp_min - 273.15) * 9/5) + 32;
            document.querySelector('.cityshow').innerHTML = data.name;  
            document.querySelector('.countryshow').innerHTML = data.sys.country;  
            document.querySelector('.temp').innerHTML = parseInt(tem);  
            document.querySelector('.temp_h').innerHTML = parseInt(temh);  
            document.querySelector('.temp_m').innerHTML = parseInt(temm) ;  
            document.querySelector('.state').innerHTML = data.weather[0].main ;  
            document.getElementById('showimg').style = "display:inline-block;" ;  
            document.getElementById('showimg').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ;  
            console.log(data)
            // console.log(data.name)
        })
    }else{
        alert("Please Enter A City Name");
    }
}