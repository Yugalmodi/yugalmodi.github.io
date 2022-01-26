"use strict";
$(document).ready(function() {
    var emptyRow = 3;
    var emptyCol = 3;
    const WIDTH = 100;
    const HEIGHT = 100;
    var isGameStarted = false;
	
    function init() {
        $('#puzzlearea').children().each(function(i) {
            var x = getXPos(i);
            var y = getYPos(i);
            $(this).addClass('puzzlepiece').css({
                "left": x + 'px',
                "top": y + 'px',
                "backgroundImage": 'url("background.jpeg")',
                "backgroundPosition": -x + 'px ' + (-y) + 'px'
            });
        });
		emptyRow = 3;
        emptyCol = 3;
    }
    init();

    $('.puzzlepiece').hover(
        function() {
            $(this).addClass("movablepiece");
        },
        function() {
            $(this).removeClass('movablepiece');
        }
    );

    $('.puzzlepiece').click(function() {
        if (!isGameStarted) {
            alert("OOps!! Please click shuffle button");
            return;
        }
        if (isMovable(this)) movePiece(this);
        else alert("Wrong click!! Can\'t move this card");
    });
	
    $("#shufflebutton").click(function() {
        isGameStarted = true;
        init();
        
        let shuffledArray = shuffleArray(Array.from(Array(15).keys()));
        $(".puzzlepiece").each(function(i) {
            let shuffledI = shuffledArray[i];

            $(this).addClass("puzzlepiece").css({
                "left": getXPos(shuffledI) + 'px',
                "top": getYPos(shuffledI) + 'px',
                "backgroundImage": 'url("background.jpeg")',
                "backgroundPosition": -getXPos(i) + 'px ' + (-getYPos(i)) + 'px'
            });
        });
        getEmptyArea(shuffledArray);
    });

    function movePiece(div) {
        var curElemPosition = $(div).position();
        var tempX = curElemPosition.left/ 100;
        var tempY = curElemPosition.top/ 100;
        $(div).css({
            top: emptyCol * HEIGHT,
            left: emptyRow * WIDTH,
        });
        emptyRow = tempX;
        emptyCol = tempY;
    }

    function isMovable(div) {
        var emptyX = emptyRow * WIDTH;
        var emptyY = emptyCol * HEIGHT;

        var curElemPosition = $(div).position();
        var curx = curElemPosition.left;
        var curY = curElemPosition.top;

        var leftPos = curx + 100;
        var rightPos = curx - 100;
        var upPos = curY - 100;
        var downPos = curY + 100;

        var leftPOSCHECK = leftPos == emptyX && curY == emptyY ? true : false;
        var rightPOSCHECK = rightPos == emptyX && curY == emptyY ? true : false;
        var topPOSCHECK = upPos == emptyY && curx == emptyX ? true : false;
        var downPOSCHECK = downPos == emptyY && curx == emptyX ? true : false;
        return (leftPOSCHECK || rightPOSCHECK || topPOSCHECK || downPOSCHECK) ;
    }

    function shuffleArray(arr) {
        let numElements = arr.length;
        let numTimesToShuffle = numElements;
        while (numTimesToShuffle != 0) {
            let randIdx1 = Math.floor(Math.random() * numElements);
            let randIdx2 = Math.floor(Math.random() * numElements);
            let tmp = arr[randIdx1];
            arr[randIdx1] = arr[randIdx2];
            arr[randIdx2] = tmp;
            numTimesToShuffle -= 1;
        }
        return arr;
    }

    function getEmptyArea(arr) {
        let numElements = arr.length;
        let randDivIdx = Math.floor(Math.random() * numElements);
        var randDiv = $(".puzzlepiece")[randDivIdx];
        let randDivX = $(randDiv).position().left;
        let randDivY = $(randDiv).position().top;
        $(randDiv).css({
            top: emptyCol * HEIGHT,
            left: emptyRow * WIDTH,
        });
        emptyRow = randDivX / 100;
        emptyCol = randDivY / 100;
    }
	
	function getXPos(num) {
		return (num % 4) * 100;
	}
	function getYPos(num) {
		return Math.floor(num / 4) * 100;
	}
});