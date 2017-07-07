$(document).ready(function(){
   var pokeDescp = function(data){
        console.log(data);
        console.log(data.height);
   }

   var poke = function(data){
         var pokeName = "";
         var pokeID = "";

         data.results.forEach(function(e) {
            
                var name = e.name;
                console.log(name);
                var pokeURL = e.url;
                console.log(pokeURL);

                $.ajax({
                    url: pokeURL,
                    type: 'GET',
                    dataType: 'JSON',
                })
                .done(function(response) {
                    console.log("success V2");
                    pokeDescp(response);
                })
                .fail(function() {
                    console.log("error V2");
                })
                .always(function() {
                    console.log("complete V2");
                });
                

        })
    }
	$.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon/?limit=1',
            type: 'GET',
            datatype: 'JSON',
            
        })
        .done(function(response){
            poke(response);
        })
        .fail(function(){
            console.log("error");
        })
    
    /*function impirmirPokemon(){
    	
                var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
            
                $.getJSON(pokeURL, function(data){
                    var pokeID = data.national_id;
                    var pokeName = data.name;
                    var weight = data.weight;
                    var height = data.height;
                    var spAtk = data.sp_atk;
                    var spDef = data.sp_def;
                    var hp = data.hp;
                    var atk = data.attack;
                    var def = data.defense;
                    var speed = data.speed;
                    var species = data.species;
                    var imgPoke = "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png'>";
                    var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
                    $.getJSON(descriptionURI, function(data2){
                        var description = data2.description;
                        var pokeType1 = data.types[0].name;
                        if (data.types.length == 2) {
                            var pokeType2 = data.types[1].name;
                        }
                        else var pokeType2 = null;

                        console.log("Number: ", pokeID);
                        console.log("Name: ", pokeName);
                        console.log("weight: ", weight);
                        console.log("Height: ", height);
                        console.log("HP: ", hp);
                        console.log("Atack: ", atk);
                        console.log("Defense: ", def);
                        console.log("Speed Atack: ", spAtk);
                        console.log("Speed Defence: ", spDef);
                        console.log("Speed: ", speed);
                        console.log("Species: ", species);
                        console.log("type: ", pokeType1 , pokeType2);
                        console.log("Description: ", description);
                        var modalHeader = "<div class='modal-header text-center'> <h4 class='modal-title donation' id='myModalLabel-poke'>"+ pokeName + "</h4></div>";
                        var modalFooter = "<div class='modal-footer row'>" + "<div class='col-md-6 col-lg-6'>" +  imgPoke + "</div><div class='col-md-6 col-lg-6'><p>" + description + "</p></div> <button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span></button> </div>";
                        $(".all-poke").append("<div class='poke col-md-2 col-lg-2'> <button type='button' class='btn btn-see-more' data-toggle='modal' data-target='#poke" + pokeID + "'>" + imgPoke + "</button> <div class='modal fade' id='poke"+ pokeID + "'><div class='modal-dialog' role='document'> <div class='modal-content'>" + modalHeader + modalFooter +"</div></div>")   

                    });    

                  
                });

            }
    }impirmirPokemon()	
*/

})
 