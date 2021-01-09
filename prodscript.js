
$(document).ready(function(){

    var citySearchEl = $("#citySearch")
    var myButton = $("#citySubmit")

    
    myButton.on("click", function(event) {

    
    var citySearch = citySearchEl.val().trim();

            
            
    getlatlong(citySearch)
    
    
    })})

    


    



    function getlatlong(citySearch){

    var queryURLTwo="https://api.openweathermap.org/data/2.5/weather?q="+citySearch+"&appid=290e571c47f47bfd05f9721ae0497c23"







    
     $.ajax({
            url: queryURLTwo,
            method: "GET"
        })
        .then(function(response) {

            let lat = response.coord.lat
            console.log(lat)
            let long = response.coord.lon
            console.log(long)

            const temptofar = (((response.main.temp-273.15)*1.8)+32).toFixed();


            var date = new Date();

            console.log(date)


           


            const cityName = $("<h1>").addClass("card-title").text(response.name)
            const weatherDiv = $("<div>").addClass("card")  
            const weatherRecall = $("<div>").addClass(".list-group-item list-group-item-action")
            // const indexColor= $("<div>").addClass("unique")
         
            
     
            const datetext = $("<p>").text( date )
            const windData = $("<p>").text("Wind Speed: " + response.wind.speed + "mph")
            const humidity = $("<p>").text("Humidity: " + response.main.humidity)

            

    





            const temp = $("<p>").text("Temperature: " + temptofar + " F°")
            const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + response.weather[0].icon  + ".png")



            const container = $("<div>").addClass("card-body")

            var CityName = localStorage.getItem("City")
            const nameAppend = $("<a>").text(CityName)

            cityName.append(weatherImage)
            container.append(cityName,datetext,windData,humidity,temp,weatherRecall) 
            weatherDiv.append(container)


            weatherRecall.append(nameAppend)

            




            $("list-group-item list-group-item-action").append(nameAppend)
            $("list-group-item list-group-item-action").append(nameAppend)

       
            console.log(weatherDiv)
     
            $("#weatherBox").append(weatherDiv)






            


        
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

                var now = moment()
                console.log(now)


                dailyArray = [one,two,three,four,five]
                
                console.log(dailyArray)








                const temptofar = (((response.main.temp-273.15)*1.8)+32).toFixed();


                var date = new Date();

                console.log(date)
               
    



                for (i = 0; i <6; i++) {

                    const one = responsetwo.daily[0]
                    const two = responsetwo.daily[1]
                    const three = responsetwo.daily[2]
                    const four = responsetwo.daily[3]
                    const five = responsetwo.daily[4]

                    var date = new Date();
                    const dateArray = [1,2,3,4,5]
                    
               
                    date.setDate(date.getDate() +dateArray[i])

                    console.log(date)
    
                    const temptofar = (((dailyArray[i].temp.day-273.15)*1.8)+32).toFixed();
    
         
    
                    const cityName = $("<h1>").addClass("card-title").text(response.name)
                    const weatherDiv = $("<div>").addClass("card")  
                    const indexColor= $("<div>").addClass("unique")
             
                    const datetext = $("<p>").text( date )
                    const windData = $("<p>").text("Wind Speed: " + dailyArray[i].wind_speed + "mph")
                    const humidity = $("<p>").text("Humidity: " + dailyArray[i].humidity)
                    const temp = $("<p>").text("Temperature: " + temptofar + " F°")
                    const UV = $("<p>").text("UV " +dailyArray[i].uvi)
                    const weatherImage = $("<img>").attr("src","https://openweathermap.org/img/w/" + dailyArray[i].weather[0].icon  + ".png")


    
                        let uvIndex = dailyArray[i].uvi

                        if (uvIndex <=2){
                            $(".unique").css("background-color","green")
                        }
                        else if(uvIndex > 2 && uvIndex < 6 ){

                            $(".unique").css("background-color","yellow")
                        }

                        else if(uvIndex > 8){

                            $(".unique").css("background-color","red")
                        }

    
                    const container = $("<div>").addClass("card-body")
    
                    cityName.append(weatherImage)
                    container.append(cityName,datetext,windData,humidity,temp,UV,indexColor) 
                    weatherDiv.append(container)
                    // indexColor.append(UV)
                
                 

                     $("#weatherBox").append(weatherDiv)
                  }
                
            })

            function Clean(){
                document.getElementById("weatherBox").innerHTML='';
              }
        
              myButton.addEventListener("click", Clean());
        
    
         
               }})}
         

   