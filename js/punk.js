const punk = document.getElementById('punk');
punkShowingAtLeft = false;
punkShowingAtRight = false;
punkShowingAtBottom = false;

function showPunk(duration, probability, leftScreen, rightScreen, bottomScreen) {
	if (randomChance(probability)) {
		startShowingPunk(duration, leftScreen, rightScreen, bottomScreen);
	}
}

function startShowingPunk(duration, leftScreen, rightScreen, bottomScreen) {
	if (bottomScreen) {
		popUpBottomScreen(duration);
	}
	if (leftScreen) {
		popUpLeftScreen(duration);
	}
	if (rightScreen) {
		popUpRightScreen(duration);
	}
}

function popUpBottomScreen(duration) {

	const interval = duration; //Seconds Calc
    const renew = setInterval(function () {
		
		if (punkShowingAtBottom) {
			translateForBottom(punk.style.top, window.innerHeight, true);
		} else {
			if (randomChance(33) && !punkShowingAtLeft && !punkShowingAtRight) {
				topPosition = window.innerHeight - (punk.height/2);
				punk.style.left = Math.floor(Math.random() * 90) + "vh";
				translateForBottom(window.innerHeight + punk.height, topPosition, false);
				punkShowingAtBottom = true;
			}
		}
    }, interval * 1000);
}

function popUpLeftScreen(duration) {

	const interval = duration; //Seconds Calc
    const renew = setInterval(function () {
		
		if (punkShowingAtLeft) {
			translateForSide(punk.style.left, -punk.width, true);
		} else {
			if (randomChance(33) && !punkShowingAtBottom && !punkShowingAtRight) {
				leftPosition = -((punk.width/2)+8);
				punk.style.top = 50 + Math.floor(Math.random() * 40) + "vh";
				translateForSide(-punk.width, leftPosition, false);
				punkShowingAtLeft = true;
			}
		}
    }, interval * 1000);
}

function popUpRightScreen(duration) {

	const interval = duration; //Seconds Calc
    const renew = setInterval(function () {
		
		if (punkShowingAtRight) {
			translateForSide(window.innerWidth - (punk.width/2), window.innerWidth, true);
		} else {
			if (randomChance(33) && !punkShowingAtBottom && !punkShowingAtLeft) {
				leftPosition = window.innerWidth - (punk.width/2);
				punk.style.top = 50 + Math.floor(Math.random() * 40) + "vh";
				translateForSide(window.innerWidth, leftPosition, false);
				punkShowingAtRight = true;
			}
		}
    }, interval * 1000);
}


function translateForBottom(startY, toY, reset) {
    var top = parseInt(startY),
        dy = parseInt(top - toY),
        i = 1,
        count = 40,
        delay = 40;
	
    function loop() {
        if ( i >= count ) { if (reset) { punkShowingAtBottom = false; } return; }
        i += 1;
		moveTo = ( top - ( dy * i / count ) ) + 'px';
			
        punk.style.top = moveTo;
        setTimeout( loop, delay );
    }
    
    loop();
}

function translateForSide(startX, toX, reset) {
    var left = parseInt(startX),
        dx = parseInt(left - toX),
        i = 1,
        count = 40,
        delay = 40;
	
    function loop() {
        if ( i >= count ) { if (reset) { punkShowingAtLeft = false; punkShowingAtRight = false; } return; }
        i += 1;
		moveTo = ( left - ( dx * i / count ) ) + 'px';
			
        punk.style.left = moveTo;
        setTimeout( loop, delay );
    }
    
    loop();
}

function randomChance(probability) {
	return Math.floor(Math.random() * 100) < probability;
}