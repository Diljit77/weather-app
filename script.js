var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector("#add")
var city=document.querySelector("#cityinput")
var descrip=document.querySelector("#description")
var temp=document.querySelector("#temp")
var wind=document.querySelector("#wind")

 apik="507160a73b1f50aa7dab1d7517e86703"
function convertion(val){
    return(val-273).toFixed(3)
}
btn.addEventListener("click" , function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik )
.then(res=>res.json())  
.then(data=>
{
    var nameval=data['name']
    var descrip=data['weather']['0']['description']
    var tempature=data['main']['temp']
    var wndspeed =data['wind']['speed']

    city.innerHTML=`weather of <span>${nameval}</span>`
    temp.innerHTML=`Temperature <span>${ convertion(tempature)}C</span>`
    description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML=`Wind speed :<span>${wndspeed} km/h</span>`
})
.catch(err=>alert('you entered wrong city name'))

})