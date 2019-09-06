var playing = false;
var gamewon = false;
var timeout = false;

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}
hide('won');
hide('timeout');

/*FUNCTIONS FOR BUTTONS ON WINNING OR TIMEOUT*/
function cancel() {
    document.getElementById('cancel').onclick = function () {
        hide('timeout');
        window.location.reload();
    }
}
function cancelForTimeout() {
    document.getElementById('cancelForTimeout').onclick = function () {
        hide('timeout');
        window.location.reload();
    }
}

function playAgain() {
    document.getElementById('playagain').onclick = function () {
        hide('won');
        window.location.reload();
    }
}
function tryAgain() {
    document.getElementById('tryagain').onclick = function () {
        hide('won');
        window.location.reload();
    }
}
/*/FUNCTIONS FOR BUTTONS ON WINNING OR TIMEOUT*/

/*INITIALISING THE GAME*/
document.onclick = function () {
    if (playing === false) {
        var x = document.getElementsByClassName("block");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "rgba(42,50,75,1)";
        }
        document.getElementById('header').style.background = "rgba(42,50,75,1)";
        document.getElementById('tap').style.display = "none";
        startCountdown();
        playing = true;
    }
}
/*/INITIALISING THE GAME*/
if (countOfMatch === 8) {
    show('won');
}
/*TIMER*/
var myCounter;

var time = 60;

function startCountdown() {
    var counter = document.getElementById("timer");

    myCounter = setInterval(function () {
        time--;
        if (time <= 0) {
            show('timeout');
            stopCountdown();
            document.getElementById('movesAfterTimeout').innerHTML = moves;
            document.getElementById('scoreAfterTimeout').innerHTML = score;
            moves = 0;
            score = 0;
            document.getElementById('moves').innerHTML = 0;
            document.getElementById('score').innerHTML = 0;
            document.getElementById('timer').innerHTML = 60;

            cancelForTimeout();
            tryAgain();

            var x = document.getElementsByClassName("block");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].onclick = false;
            }
        }
        counter.innerHTML = time;
    }, 1000)
};

function stopCountdown() {
    clearInterval(myCounter);
}
/*/TIMER*/

/*GETTING THE IMAGES*/
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/bluerose1.jpg';
imgArray[0].width = "100";
imgArray[0].height = "120";

imgArray[1] = new Image();
imgArray[1].src = 'images/dandelion1.jpg';
imgArray[1].width = '100';
imgArray[1].height = '120';

imgArray[2] = new Image();
imgArray[2].src = 'images/flower11.jpg';
imgArray[2].width = '100';
imgArray[2].height = '120';

imgArray[3] = new Image();
imgArray[3].src = 'images/lotus1.jpg';
imgArray[3].width = '100';
imgArray[3].height = '120';

imgArray[4] = new Image();
imgArray[4].src = 'images/marguerite1.jpg';
imgArray[4].width = '100';
imgArray[4].height = '120';

imgArray[5] = new Image();
imgArray[5].src = 'images/rose1.jpg';
imgArray[5].width = '100';
imgArray[5].height = '120';

imgArray[6] = new Image();
imgArray[6].src = 'images/sunflower1.jpg';
imgArray[6].width = '100';
imgArray[6].height = '120';

imgArray[7] = new Image();
imgArray[7].src = 'images/flower2.jpg';
imgArray[7].width = '100';
imgArray[7].height = '120';

imgArray[8] = new Image();
imgArray[8].src = 'images/bluerose1.jpg';
imgArray[8].width = "100";
imgArray[8].height = "120";

imgArray[9] = new Image();
imgArray[9].src = 'images/dandelion1.jpg';
imgArray[9].width = '100';
imgArray[9].height = '120';

imgArray[10] = new Image();
imgArray[10].src = 'images/flower11.jpg';
imgArray[10].width = '100';
imgArray[10].height = '120';

imgArray[11] = new Image();
imgArray[11].src = 'images/lotus1.jpg';
imgArray[11].width = '100';
imgArray[11].height = '120';

imgArray[12] = new Image();
imgArray[12].src = 'images/marguerite1.jpg';
imgArray[12].width = '100';
imgArray[12].height = '120';

imgArray[13] = new Image();
imgArray[13].src = 'images/rose1.jpg';
imgArray[13].width = '100';
imgArray[13].height = '120';

imgArray[14] = new Image();
imgArray[14].src = 'images/sunflower1.jpg';
imgArray[14].width = '100';
imgArray[14].height = '120';

imgArray[15] = new Image();
imgArray[15].src = 'images/flower2.jpg';
imgArray[15].width = '100';
imgArray[15].height = '120';
/*/GETTING THE IMAGES*/


/*SHUFFLING THE IMAGES FOR EVERY GAME*/
function shuffle(imgArray) {
    var ctr = imgArray.length,
        temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = imgArray[ctr];
        imgArray[ctr] = imgArray[index];
        imgArray[index] = temp;
    }
    return imgArray;
}
shuffle(imgArray);
/*/SHUFFLING THE IMAGES FOR EVERY GAME*/

var count = 0;
var matchArray = [];
var idArray = [];
var moves = 0;
var score = 200;

/*CALLING FUNCTION FOR EVERY CLICK*/
function randomGen(id, num) {

    count++;
    if (count <= 2) {
        var ind = num - 1;
        document.getElementById(id).appendChild(imgArray[ind]);
        
        idArray.push(id);
        matchArray.push(imgArray[ind]);
        if (count === 2) {

            checkIfMatch();
            matchArray = [];
            idArray = [];
        }
    }
}
/*/CALLING FUNCTION FOR EVERY CLICK*/
var countOfMatch = 0;

/*CHECKING FOR MATCHING IMAGES*/
function checkIfMatch() {
    var img1 = (matchArray[0]),
        img2 = matchArray[1];
    var id1= idArray[0], id2= idArray[1];
    //    console.log(img1);
    //    console.log(img2);
    if (img1.src === img2.src && id1!==id2) {
        countOfMatch++;
        count = 0;
        score = score + 100;
        moves++;
        document.getElementById(id1).onclick=false;
        document.getElementById(id2).onclick=false;
        if (countOfMatch === 8) {
            show('won');
            stopCountdown();
            document.getElementById('movesAfterWinning').innerHTML = moves;
            document.getElementById('scoreAfterWinning').innerHTML = score;
            document.getElementById('timeRemaining').innerHTML = time;
            moves = 0;
            score = 0;
            time = 0;
            document.getElementById('moves').innerHTML = 0;
            document.getElementById('score').innerHTML = 0;
            document.getElementById('timer').innerHTML = 60;
            cancel();
            playAgain();
            var x = document.getElementsByClassName("block");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].onclick = false;
            }

        }
    } else {
        score = score - 10;
        flip();
        moves++;
    }
    document.getElementById('moves').innerHTML = moves;
    document.getElementById('score').innerHTML = score;
}
/*/CHECKING FOR MATCHING IMAGES*/

/*FLIPPING IF MATCH NOT FOUND*/
function flip() {
    var id1 = idArray[0],
        id2 = idArray[1];
    var img1 = (matchArray[0]),
        img2 = matchArray[1];
    setTimeout(function () {
        document.getElementById(id1).removeChild(img1);
    }, 500);
    setTimeout(function () {
        document.getElementById(id2).removeChild(img2);
    }, 500);
    //    
    //    document.getElementById(id2).removeChild(img2);
    count = 0;
}
/*/FLIPPING IF MATCH NOT FOUND*/

/*EVENT HANDLING ON ALL DIVS*/
document.getElementById("block1").onclick = function () {
    randomGen("block1", 1);
}
document.getElementById("block2").onclick = function () {
    randomGen("block2", 2);
}
document.getElementById("block3").onclick = function () {
    randomGen("block3", 3);
}
document.getElementById("block4").onclick = function () {
    randomGen("block4", 4);
}
document.getElementById("block5").onclick = function () {
    randomGen("block5", 5);
}
document.getElementById("block6").onclick = function () {
    randomGen("block6", 6);
}
document.getElementById("block7").onclick = function () {
    randomGen("block7", 7);
}
document.getElementById("block8").onclick = function () {
    randomGen("block8", 8);
}
document.getElementById("block9").onclick = function () {
    randomGen("block9", 9);
}
document.getElementById("block10").onclick = function () {
    randomGen("block10", 10);
}
document.getElementById("block11").onclick = function () {
    randomGen("block11", 11);
}
document.getElementById("block12").onclick = function () {
    randomGen("block12", 12);
}
document.getElementById("block13").onclick = function () {
    randomGen("block13", 13);
}
document.getElementById("block14").onclick = function () {
    randomGen("block14", 14);
}
document.getElementById("block15").onclick = function () {
    randomGen("block15", 15);
}
document.getElementById("block16").onclick = function () {
    randomGen("block16", 16);
}
/*/EVENT HANDLING ON ALL DIVS*/

/*EVENT HANDLING FOR NEW GAME*/
document.getElementById('new').onclick = function () {
    window.location.reload();
}
/*/EVENT HANDLING FOR NEW GAME*/