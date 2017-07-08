$(document).ready(function(){
   var pokeDescp = function(data){
        console.log(data);

        var height = data.height;
        var pokeID = data.id;
        var pokeName = data.name;
        var weight = data.weight;
        var imgPokeUrl = data.sprites.front_default;
        var stats = data.stats;
        var pType = data.types.length;

        var imgPoke = "<img src='" + imgPokeUrl + "'>";

        console.log(imgPoke);
        console.log("Nombre: ", pokeName);
        console.log("id: ", pokeID);
        console.log("Peso: ", weight);
        console.log("Altura: ", height);

        /*if (pType == 2) {
            var type1 = data.types[0].type.name;
            var type2 = data.types[1].type.name;
            console.log("Tipo:", type2);
            console.log("Tipo:", type1);
        }else{
            console.log("Tipo:", type1);
        }*/

        var type1 = data.types[0].type.name;
            var type2 = data.types[1].type.name;
            console.log("Tipo:", type2);
            console.log("Tipo:", type1);
        
        var status = "";
        stats.forEach(function(s){
            status += "<div><h5>" + s.stat.name + ": " + s.base_stat + "</h5><div>";
        })

        


        //CREANDO MODAL
        var modalHeader = "<div class='modal-header text-center'> <h4 class='modal-title donation' id='myModalLabel-poke'>"+  imgPoke + pokeName + "</h4></div>";
        var modalFooter = "<div class='modal-footer row'><div class='col-md-12 col-lg-12'><div class='row'><div class='description'><h3>Weight: " + weight + "</h3></div><div class='description'><h3>Height: " + height + "</h3></div><div class='status col-md-6 col-lg-6'> <h2>Stats</h2>" +  status + "</div> <div class='tipo'><h3>Tipo: </h3><p class='tipo1'>" + type1 + "</p><p class='tipo2'>" + type2 + "</p></div></div></div> <button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span></button> </div>";
        $(".all-poke").append("<div class='poke col-md-2 col-lg-2'> <button type='button' class='btn btn-see-more' data-toggle='modal' data-target='#poke" + pokeID + "'>" + imgPoke + "<p>" + pokeName + "</p></button> <div class='modal fade' id='poke"+ pokeID + "'><div class='modal-dialog' role='document'> <div class='modal-content'>" + modalHeader + modalFooter +"</div></div>")   
        
        //ESTILOS SEGUN TIPO
        /*if (type1 == "poison") {
            $(".tipo1").addClass('veneno');
        }*/
        
   switch (type1) {
            case "normal": $(".tipo1").addClass('normal');
                break;
            case "grass": $(".tipo1").addClass('grass');
                break;
            case "poison": $(".tipo1").addClass('poison');
                break;
            case "pyschic": $(".tipo1").addClass('pyschic');
                break;
            case "ground": $(".tipo1").addClass('ground');
                break;
            case "ice": $(".tipo1").addClass('ice');
                break;
            case "fire": $(".tipo1").addClass('fire');
                break;
            case "rock": $(".tipo1").addClass('rock');
                break;
            case "dragon": $(".tipo1").addClass('dragon');
                break;
            case "water": $(".tipo1").addClass('water');
                break;
            case "bug": $(".tipo1").addClass('bug');
                break;
            case "dark": $(".tipo1").addClass('dark');
                break;
            case "fighting": $(".tipo1").addClass('fighting');
                break;
            case "ghost": $(".tipo1").addClass('ghost');
                break;
            case "steel": $(".tipo1").addClass('steel');
                break;
            case "flying": $(".tipo1").addClass('flying');
                break;
            case "electric": $(".tipo1").addClass('electric');
                break;
            case "fairy": $(".tipo1").addClass('fairy');
                break;

        }
        switch (type2) {
            case "normal": $(".tipo2").addClass('normal');
                break;
            case "grass": $(".tipo2").addClass('grass');
                break;
            case "poison": $(".tipo2").addClass('poison');
                break;
            case "pyschic": $(".tipo2").addClass('pyschic');
                break;
            case "ground": $(".tipo2").addClass('ground');
                break;
            case "ice": $(".tipo2").addClass('ice');
                break;
            case "fire": $(".tipo2").addClass('fire');
                break;
            case "rock": $(".tipo2").addClass('rock');
                break;
            case "dragon": $(".tipo2").addClass('dragon');
                break;
            case "water": $(".tipo2").addClass('water');
                break;
            case "bug": $(".tipo2").addClass('bug');
                break;
            case "dark": $(".tipo2").addClass('dark');
                break;
            case "fighting": $(".tipo2").addClass('fighting');
                break;
            case "ghost": $(".tipo2").addClass('ghost');
                break;
            case "steel": $(".tipo2").addClass('steel');
                break;
            case "flying": $(".tipo2").addClass('flying');
                break;
            case "electric": $(".tipo2").addClass('electric');
                break;
            case "fairy": $(".tipo2").addClass('fairy');
                break;

        }


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
            url: 'http://pokeapi.co/api/v2/pokemon/?limit=6', /*151 primera generacion*/
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
 

