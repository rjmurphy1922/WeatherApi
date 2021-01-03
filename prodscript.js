
$(document).ready(function(){

    var citySearchEl = $("#citySearch")
    var myButton = $("#citySubmit")
    // let lat = response.coord.lat
    // console.log(lat)
    // let long = response.coord.lon
    // console.log(long)

    
    myButton.on("click", function(event) {

    
        var citySearch = citySearchEl.val().trim();

            
            
            getlatlong(citySearch)
    
    
    })})

       const today = new Date()
       const tomorrow = new Date(today)
       tomorrow.setDate(tomorrow.getDate())
       
    //    dailyweatherArray = [responsetwo.daily[0],responsetwo.daily[1],responsetwo.daily[2],responsetwo.daily[3],responsetwo.daily[4],]
    //    console.log(dailyweatherArray[2])



    function getlatlong(citySearch){

        var queryURLTwo="http://api.openweathermap.org/data/2.5/weather?q="+citySearch+"&appid=290e571c47f47bfd05f9721ae0497c23"
       
    
        console.log(citySearch)
        
    
     $.ajax({
            url: queryURLTwo,
            method: "GET"
        })
        .then(function(response) {

            let lat = response.coord.lat
            console.log(lat)
            let long = response.coord.lon
            console.log(long)
           

            


        
          console.log(response);

          getdaily(lat,long)



               function getdaily(lat,long){

           
            var queryURLTwo="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&exclude=minutely,hourly,&appid=290e571c47f47bfd05f9721ae0497c23"
        
            console.log(citySearch)
            
        
         $.ajax({
                url: queryURLTwo,
                method: "GET"
            })
            .then(function(responsetwo) {

                const one = responsetwo.daily[0]
                const two = responsetwo.daily[1]
                const three = responsetwo.daily[2]
                const four = responsetwo.daily[3]
                const five = responsetwo.daily[4]


                dailyArray = [one,two,three,four,five]
                // // testArray= []
                // // for (i = 0; i < 6; i++) {
                // //     testArray.push(responseTwo.daily[i])
                
                // //   console.log(testArray)
                // //   }


                // const temptofar = (((responsetwo.daily[0].temp.day-273.15)*1.8)+32).toFixed();

                // console.log(responsetwo)

                // const cityName = $("<h1>").addClass("card-title").text(response.name)
                // const weatherDiv = $("<div>").addClass("card")  
                // const weatherDivTwo = $("<div>").addClass("card")  

                // const windData = $("<p>").text("Wind Speed: " + dailyArray[0].wind_speed + "mph")
                // const humidity = $("<p>").text("Humidity: " + dailyArray[0].humidity)
                // const temp = $("<p>").text("Current Temperature: " + temptofar)
                // const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + dailyArray[0].weather[0].icon  + ".png")

                // // const windData = $("<p>").text("Wind Speed: " + dailyArray[0].wind_speed + "mph")
                // // const humidity = $("<p>").text("Humidity: " + dailyArray[0].humidity)
                // // const temp = $("<p>").text("Current Temperature: " + temptofar)
                // // const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + dailyArray[0].weather[0].icon  + ".png")


                // // const tomdate = $("<p>").text("Date: " + today )

                // const container = $("<div>").addClass("card-body")

                // cityName.append(weatherImage)
                // container.append(cityName,windData,humidity,temp) 
                // weatherDiv.append(container)
             


                // cityName.append(weatherImage)
                // container.append(cityName,windData,humidity,temp) 
                // weatherDiv.append(container)
                // weatherDivTwo.append(container)



        
                // $("#weatherBox").append(weatherDiv)

                console.log(dailyArray)

                for (i = 0; i < 5; i++) {

                    const one = responsetwo.daily[0]
                    const two = responsetwo.daily[1]
                    const three = responsetwo.daily[2]
                    const four = responsetwo.daily[3]
                    const five = responsetwo.daily[4]
    
    
                    dailyArray = [one,two,three,four,five]
                    // testArray= []
                    // for (i = 0; i < 6; i++) {
                    //     testArray.push(responseTwo.daily[i])
                    
                    //   console.log(testArray)
                    //   }
    
    
                    const temptofar = (((responsetwo.daily[0].temp.day-273.15)*1.8)+32).toFixed();
    
                    // console.log(responsetwo)
    
                    const cityName = $("<h1>").addClass("card-title").text(response.name)
                    const weatherDiv = $("<div>").addClass("card")  
                    // const weatherDivTwo = $("<div>").addClass("card")  
    
                    const windData = $("<p>").text("Wind Speed: " + dailyArray[i].wind_speed + "mph")
                    const humidity = $("<p>").text("Humidity: " + dailyArray[i].humidity)
                    const temp = $("<p>").text("Current Temperature: " + temptofar)
                    const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + dailyArray[i].weather[0].icon  + ".png")
    
                    // const windData = $("<p>").text("Wind Speed: " + dailyArray[0].wind_speed + "mph")
                    // const humidity = $("<p>").text("Humidity: " + dailyArray[0].humidity)
                    // const temp = $("<p>").text("Current Temperature: " + temptofar)
                    // const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + dailyArray[0].weather[0].icon  + ".png")
    
    
                    // const tomdate = $("<p>").text("Date: " + today )
    
                    const container = $("<div>").addClass("card-body")
    
                    cityName.append(weatherImage)
                    container.append(cityName,windData,humidity,temp) 
                    weatherDiv.append(container)
                 

                     $("#weatherBox").append(weatherDiv)
                  }
                
            }

        
    
         
    
            )}})}

  