$(document).ready(function(){
	
    function impirmirPokemon(){
    	var param = 0;
           for (var i = 1; i <= 5; i++) {
                param = i;
                var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
            
                $.getJSON(pokeURL, function(data){
                    var pokeID = data.national_id;
                    var pokeName = data.name;
                    var weight = data.weight;
                    var height = data.height;

                    console.log("Number: ", pokeID);
                    console.log("Name: ", pokeName);
                    console.log("weight: ", weight);
                    console.log("Height: ", height);

                });

            }
    }	


})


