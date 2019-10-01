var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    let image = document.createElement("img");

    /*if(getal === 1) {
         image.src = "../img/dice_1-512.png"
    }
    
    else if(getal === 2) {
         image.src = "../img/2-dice-2.png"
    }
    
    else if(getal === 3) {
         image.src = "../img/Dice-3-b.svg.png"
    }
    
    else if(getal === 4) {
         image.src = "../img/Dice-4-b.svg.png"
    }
    
    else if(getal === 5) {
         image.src = "../img/Dice-5-b.svg.png"
    }
    
    else if(getal === 6) {
         image.src = "../img/dice_6-512.png"
    }*/
    switch(getal){
        case 1:
            image.src ="../img/dice_1-512.png"
            break;
        case 2:
            image.src ="../img/2-dice-2.png"
            break;
        case 3:
            image.src ="../img/Dice-3-b.svg.png"
            break;
        case 4:
            image.src ="../img/Dice-4-b.svg.png"
            break;
        case 5:
            image.src ="../img/Dice-5-b.svg.png"
            break;
        case 6:
            image.src ="../img/dice_6-512.png"
            break;
    }
    uitvoerDobbelsteen.innerHTML = "";
    uitvoerDobbelsteen.append(image);
});

//function om een willekeurig getal te verkrijgen tu

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min ) + min);
}