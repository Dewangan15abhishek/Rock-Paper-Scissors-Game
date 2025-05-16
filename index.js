for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var result = play(this.id, computerPlay());
        document.getElementById("win").textContent = result;
    })
}

function computerPlay(){
    const choices = ["Rock" , "Paper" , "Scissors"];
    var randomChoice = Math.floor(3 * Math.random());
    return choices[randomChoice];
}
var pscore=0;
var cscore=0;

function play(player , computer){
    if(player === computer){
        return "it's a tie";
    }
    else if(
        (player === "Rock" && computer === "Scissors")||
        (player === "Paper" && computer === "Rock")||
        (player === "Scissors" && computer === "Paper")){
            pscore++;
            document.getElementById("userscore").textContent = pscore;
            return "You win! "+player+" beats "+computer;
        }
    else{
        cscore++;
        document.getElementById("computerscore").textContent = cscore;
        return "You lose "+computer+" beats "+player;
    }
}

