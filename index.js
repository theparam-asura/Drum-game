var noofdrums=document.querySelectorAll(".drum").length;
// for(var i=0;i<noofdrums;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",handleClick);

// }


var noofdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noofdrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        buttonColor(buttonInnerHtml);
    });
}




// document.addEventListener("keydown",function (){
//     alert("Key waas pressed");
// })
document.addEventListener("keydown",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
    buttonColor(event.key);
})







function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2=new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4=new Audio('tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare=new Audio('snare.mp3');
            snare.play();
            break;
        case "k":
            var crash=new Audio('crash.mp3');
            crash.play();
            break;
        case "l":
            var kick=new Audio('kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log("None of the drum clicked");
            break;
    }
}



function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}

function buttonColor(currentKey){
    var activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("huge");
    setTimeout(function (){
        activeButton.classList.remove("huge");
    },100);
}


















// function handleClick(){
//     var audio=new Audio('./sounds/snare.mp3');
//     audio.play();
// }