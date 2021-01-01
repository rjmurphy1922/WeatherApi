
$(document).ready(function(){

var citySearchEl = $("#citySearch")
var myButton = $("#citySubmit")
// var tenpKelvin = ()


// https://openweathermap.org/img/w/02n.png


// const tempConverstion = ((283.15 − 273.15) × 9/5 + 32 
// )
// var cordinates = response.coord



myButton.on("click", function(event) {
    
    // event.preventDefault();

    var citySearch = citySearchEl.val().trim();
        // console.log(citySearch)
        
        
        getForecast(citySearch)


})



// function cityRequest(citySearch) {
    // var cnt = 7
    // var apikey = "290e571c47f47bfd05f9721ae0497c23"
    // var queryURL="http://api.openweathermap.org/data/2.5/forecast/daily?q=" + citySearch + "&cnt=" + cnt + apikey
    //     console.log(queryURL)
    // //AJAX call
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
       
    // })
    // .then(function(response) {
    // //   console.log(response.coord)
    // //   var coordinates = response
    // //   console.log(coordinates)
    // // //   console.log(response)
    // console.log(response)

    // })}
    
    function getForecast(citySearch){

    var queryURLTwo="http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=290e571c47f47bfd05f9721ae0497c23"

    console.log(citySearch)
    

 $.ajax({
        url: queryURLTwo,
        method: "GET"
    })
    .then(function(response) {
        //   console.log(response.coord)

        const temptofar = (((response.main.temp-273.15)*1.8)+32).toFixed();
        // console.log(((temptofar-273.15)*1.8)+32);

        const cityName = $("<h1>").addClass("card-title").text(response.name)
        const weatherDiv = $("<div>").addClass("card")  
        const windData = $("<p>").text("Wind Speed: " + response.wind.speed + "mph")
        const humidity = $("<p>").text("Humidity: " + response.main.humidity)
        // const temp = $("<p>").text("Current Temperature: " + response.main.temp)
        const temp = $("<p>").text("Current Temperature: " + temptofar)
        console.log(temp)
        const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + response.weather[0].icon  + ".png")

        const container = $("<div>").addClass("card-body")

        cityName.append(weatherImage)
        container.append(cityName,windData,humidity,temp)
        weatherDiv.append(container)

        $("#weatherBox").append(weatherDiv)

    
      console.log(response)
    //   console.log(response)

    })}



    // getForecast()
    
// console.log(buttonClick)



// 




//response.cord


// $("#myButton").on("click",function(e){
//     console.log(e.target)
//     var clickedSubmit = $(e.target).attr("id")
//    const inputText = $("#citySearch").val()
//    console.log(inputText)
//    localStorage.setItem(clickedSubmit, inputText);

//   })


// $("main").addEventListener("click", function (event) {
//     var citySearch = event.target.getAttribute("id")
//     console.log(citySearch)
// })
})