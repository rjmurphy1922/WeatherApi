
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
    // //   console.log(response.coord)s
    // //   var coordinates = response
    // //   console.log(coordinates)
    // // //   console.log(response)
    // console.log(response)

    // })}
    
    function getForecast(citySearch){


     var queryURLTwo="http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch +"&appid=290e571c47f47bfd05f9721ae0497c23"

    // var queryURLTwo="http://api.openweathermap.org/data/2.5/weather?q=" + citySearch  + "&appid=290e571c47f47bfd05f9721ae0497c23"
    

    console.log(citySearch)
    

 $.ajax({
        url: queryURLTwo,
        method: "GET"
    })
    .then(function(response) {
        //   console.log(response.coord)

        const temptofar = (((response.list[0].main.temp-273.15)*1.8)+32).toFixed();
        var date = new Date();

        const weatherArray = [response.list[0],response.list[1],response.list[2],response.list[3],response.list[4]]
        var w = weatherArray[0]
        dateArray = [1,2,3,4,5]
        
        // date.setDate(date.getDate() +dateArray[0]);
        // console.log(date)
        // var loop = weatherArray[i]
        console.log(weatherArray[0])
        // const weatherArray = [response.list[0],response.list[1],response.list[2],response.list[3],response.list[4]]
        // console.log(weatherArray)

        // const temptofar =(((response.list[0].main.humidity-273.15)*1.8)+32).toFixed();
        // console.log(((temptofar-273.15)*1.8)+32);

        const cityName = $("<h1>").addClass("card-title").text(response.city.name)
        const weatherDiv = $("<div>").addClass("card")  
        const tomdate = $("<p>").text("Date: " + date )
        const windData = $("<p>").text("Wind Speed: " + weatherArray[0].wind.speed + "mph")
        // console.log(loop.wind.speed)
        const humidity = $("<p>").text("Humidity: " + weatherArray[0].main.humidity)
        // const temp = $("<p>").text("Current Temperature: " + response.main.temp)
        const temp = $("<p>").text("Current Temperature: " + temptofar)
        console.log(temp)
        const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + response.list[0].weather[0].icon  + ".png")

        const container = $("<div>").addClass("card-body")

        cityName.append(weatherImage)
        container.append(cityName,windData,humidity,temp,tomdate)
        weatherDiv.append(container)

        // $("#weatherBox").append(weatherDiv)

    
      console.log(response)

      for (i = 0; i < 100; i++) {
        // $("#weatherBox").append(weatherDiv);
        // $("#weatherBox2").append(weatherDiv);
        console.log(weatherArray[i])
        }

      
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