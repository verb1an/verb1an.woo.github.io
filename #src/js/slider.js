let slItems = document.getElementsByClassName('sl__item');
let active = 0; //-1, так как массив начинается с нуля

function move() {
	for(var i = 0; i < slItems.length; i++) {
		if(i == active) {
			slItems[i].style = 'top: 0; z-index: 5;';
		}else if(i > active){
			slItems[i].style = `top: ${35*(i-active)}px; z-index: ${5-(i-active)}; opacity: .${(8-(i-active)*3)}; transform: scale(0.${100 - 5*(i-active)});`;
			if((i-active) > 2) {
				slItems[i].style = `top: ${35*(i-active)}px; z-index: ${5-(i-active)}; opacity: .${0}; transform: scale(0.${100 - 5*(i-active)});`;
			}
		}else if(i < active) {
			slItems[i].style = `top: -300px; opacity: 0; transform: rotateX(60deg);`;
		}
	}

	if(active == 0) {
		document.querySelector('.back').classList.add('unuse');
	}else if(active == slItems.length-1) {
		document.querySelector('.forward').classList.add('unuse');
	}else{
		document.querySelector('.back').classList.remove('unuse');
		document.querySelector('.forward').classList.remove('unuse');
	}
}

move();

document.querySelector('.forward').addEventListener('click', function () {
	if(active != slItems.length-1) {
		active++;
	}
	move();
})

document.querySelector('.back').addEventListener('click', function () {
	if(active != 0) {
		active--;
	}
	move();
})
