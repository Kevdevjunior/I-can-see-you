let balls = document.getElementsByClassName('ball');
console.log(balls)

let window_height = window.innerHeight
//console.log('window hauteur = ' + window_height + '%')

let window_width = window.innerWidth
//console.log('window largeur = ' + window_width + '%')


// Fonction position du curseur
var position_curseur = (event) => {

    // position en pourçentage
     //console.log(`position curseur: ${event.x}:${event.y}`);

    xx = parseInt(event.x / window_width * 100)
    yy = parseInt(event.y / window_height * 100)
    console.log('position curseur en X '+ xx + '%')
    console.log('position curseur en Y '+ yy + '%')
    for (let i = 0; i<balls.length; i++){
    balls[i].style.top =  yy + '%'
    balls[i].style.left = xx + '%'
    }
    
};

document.addEventListener('mousemove', position_curseur);












/*
for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
}


console.log("x =" + x);
console.log("y =" + y);


}*/




