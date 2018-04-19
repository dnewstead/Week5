// API KEY: 4982afc24aee077c63bd164999e69856
// String: http://api.openweathermap.org/data/2.5/weather?zip=372166appid=ffbaed99f10375462add667213061774

var url = "http://api.openweathermap.org/data/2.5/weather?zip=372166appid=ffbaed99f10375462add667213061774"
$("#getWeatherBtn").click(function)){
	if( $("#zipInput").val().lenght == 5 ){
		$.getJSON(url + $("zipInput").val(),function(result){
			$('cityName').html(result.name);
			$('conditions').html(result.weather[0].desription);
			if (result.main.temp < 65) {
				$('#temp').html(result.main.temp + "");
				$('#temp').css('color','blue');
			}else {
				$('#temp').html(result.main.temp + "");
				$('#temp').html('color','red');
			}
			var d = new Date(result.dt + 1000);
			$('#time').html(d.toDateString() + "<br /" + d.toLocaleTimeString())
			$('weatherIcon').attr("src","http://openweathermap.org/img/w/" +  )
			$('weatherInfo').fadeIn(1000);
			//$('weatherInfo').css('animation-name',"fadeIn");
			$('weatherInfo').addClass("tada")
		});
	}else {
		alert("PLEASE ENTER THE CORRECT NUMBER OF CHARACTERS");
	}

});
