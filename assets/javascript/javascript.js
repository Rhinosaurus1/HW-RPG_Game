
$(document).ready(function(){

    var characterArray = ["character1","character2","character3","character4"];

    var character1 = {
        HP: 120,
        AttackPower: 10,
        CounterAttackPower: 9,
    }

    var character2 = {
        HP: 100,
        AttackPower: 11,
        CounterAttackPower: 8,
    }

    var character3 = {
        HP: 150,
        AttackPower: 9,
        CounterAttackPower: 10,
    }

    var character4 = {
        HP: 180,
        AttackPower: 8,
        CounterAttackPower: 11,
    }

    function updateHP(){
        $("#character-1-hp").html("HP: " + character1.HP);
        $("#character-2-hp").html("HP: " + character2.HP);
        $("#character-3-hp").html("HP: " + character3.HP);
        $("#character-4-hp").html("HP: " + character4.HP);
    }
   

    var chosenAttacker = "";
    var chosenDefender = "";
    var attackerHP = 0;
    var defenderHP = 0;

    function AttackerChosen(){
        for (var i = 0; i < characterArray.length; i++){
            if( $("#" + characterArray[i]).attr("id") == chosenAttacker){
                var available1 = $("#" + characterArray[i]).clone();
                available1.attr("class","list-group-item char-image chosen");
                available1.appendTo(".chosen-character-block");
            }
            else{
                var available2 = $("#" + characterArray[i]).clone();
                available2.attr("class","list-group-item char-image not-picked");
                available2.appendTo(".enemies-available-block");
            }
        }
    }

    function DefenderChosen(){
        for (var j = 0; j < characterArray.length; j++){
            if( $("#" + characterArray[j]).attr("id") == chosenDefender){
                var available1 = $("#" + characterArray[j]).clone();
                available1.attr("class","list-group-item char-image defender");
                available1.appendTo(".defender-block");
                available1.attr("style","display: unset");
            }
            else if ( $("#" + characterArray[j]).attr("id") == chosenAttacker){
            }
            else{
                var available2 = $("#" + characterArray[j]).clone();
                available2.attr("class","list-group-item char-image not-picked");
                available2.appendTo(".enemies-available-block");
                available2.attr("style","display: unset");
            }
        }
    }


    $(".character-choose").on("click", function(){
        chosenAttacker = $(this).attr("id");
        AttackerChosen();

        $(".character-choose").attr("style","display:none");

        $(".not-picked").on("click", function(){
            $(".not-picked").remove();
            chosenDefender = $(this).attr("id");
            DefenderChosen();

        $("#attack").attr("style","display: unset");

            $("#attack").on("click", function(){
                var chosenHPinitial = $(".chosen").attr("value");
                var defenderHPinitial = $(".defender").attr("value");
                alert("I really think I went about this all wrong...  :/  -J");
            });
        
        });

    });

});

