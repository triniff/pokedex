$(document).ready(function(){
	
    function impirmirPokemon(){
    	var param = 0;
           for (var i = 1; i <= 2; i++) {
                param = i;
                var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
            
                $.getJSON(pokeURL, function(data){
                    var pokeID = data.national_id;
                    var pokeName = data.name;
                    var weight = data.weight;
                    var height = data.height;
                    var imgPoke = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png";
                    var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
                    $.getJSON(descriptionURI, function(data2){
                        var description = data2.description;
                        var pokeType1 = data.types[0].name;
                        if (data.types.length == 2) {
                            var pokeType2 = data.types[1].name;
                        }
                        else var pokeType2 = null;

                        console.log(imgPoke);
                        console.log("Number: ", pokeID);
                        console.log("Name: ", pokeName);
                        console.log("weight: ", weight);
                        console.log("Height: ", height);
                        console.log("type: ", pokeType1 , pokeType2);
                        console.log("Description: ", description);
                        $(".all-poke").append("<div class='poke col-md-2 col-lg-2'> <img src=" + imgPoke + " data-toggle='modal' data-target='.bd-example-modal-lg'> <h2>" + pokeName + "</h2>")   

                    });    

                    /*var pokeType1 = data.types[0].name;
                    if (data.types.length == 2) {
                        var pokeType2 = data.types[1].name;
                    }
                    else var pokeType2 = null;

                    console.log(imgPoke);
                    console.log("Number: ", pokeID);
                    console.log("Name: ", pokeName);
                    console.log("weight: ", weight);
                    console.log("Height: ", height);
                    console.log("type: ", pokeType1 , pokeType2);
                    console.log("Description: ", description);
                    $(".all-poke").append("<div class='poke col-md-2 col-lg-2'> <img src=" + imgPoke + " data-toggle='modal' data-target='.bd-example-modal-lg'> <h2>" + pokeName + "</h2>")   
                    */
                });

            }
    }impirmirPokemon()	


})
