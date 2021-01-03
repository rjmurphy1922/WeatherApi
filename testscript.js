
$(document).ready(function(){

    // var citySearchEl = $("#citySearch")
    // var myButton = $("#citySubmit")
    // let lat = response.coord.lat
    // console.log(lat)
    // let long = response.coord.lon
    // console.log(long)

    
    myButton.on("click", function(event) {

    
        var citySearch = citySearchEl.val().trim();

            
            
    //         getlatlong(citySearch)
    
    
    // })})



    // function getlatlong(citySearch){

        var queryURLTwo="https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=290e571c47f47bfd05f9721ae0497c23"
       
    
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

        

        }

    )})})