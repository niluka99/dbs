import $ from 'jquery';


$(document).ready(function () {
    const canvasElement = document.querySelector("canvas");
    const elemLeft = canvasElement.offsetLeft;
    const elemTop = canvasElement.offsetTop;
    var activeButton = "NONE";
    var tri = canvasElement.getContext("2d");


    $('#b1').click(function () {
        clearTwoRecHalf();
        drawFulRec();
        activeButton = "REC";

    });

    $('#b2').click(function () {
        drawFulCircle();
        activeButton = "CIR";

    });

    $('#b3').click(function () {
        drawFulTri();
        activeButton = "TRI";
    });

    $('#b4').click(function () {
        activeButton = "SCISSOR";
    });

    $('#b5').click(function () {
        activeButton = "GLUE";
    });

    $('#b6').click(function () {
        activeButton = "REMOVE";
    });
    function drawFulTri() {
        // the triangle
        tri.beginPath();
        tri.moveTo(50, 10);
        tri.lineTo(10, 110);
        tri.lineTo(90, 110);
        tri.closePath();
        tri.lineWidth = 1;
        tri.strokeStyle = '#ffffff';
        tri.stroke();// the fill color
        tri.fillStyle = "green";
        tri.fill();
    }

    function drawFulTriDraft() {
        // the triangle
        tri.beginPath();
        tri.moveTo(50, 10);
        tri.lineTo(10, 110);
        tri.lineTo(90, 110);
        tri.closePath();
        tri.lineWidth = 1;
        tri.strokeStyle = '#ffffff';

    }

    function drawFulRec() {
        var rect = canvasElement.getContext("2d");
        rect.beginPath();
        rect.rect(700, 50, 100, 50);
        rect.closePath();
        rect.lineWidth = 1;
        rect.strokeStyle = '#ffffff';
        rect.stroke();// the fill color
        rect.fillStyle = "blue";
        rect.fill();
    }

    function drawFulCircle() {
        var cir = canvasElement.getContext("2d");
        cir.beginPath();
        cir.arc(400, 60, 50, 0, 2 * Math.PI);
        cir.closePath();
        cir.lineWidth = 1;
        cir.strokeStyle = '#ffffff';
        cir.stroke();// the fill color
        cir.fillStyle = "red";
        cir.fill();
    }


    function clearTwoRecHalf() {
        var remrec = canvasElement.getContext("2d");
        remrec.clearRect(801, 50, 50, 50);
        remrec.clearRect(860, 50, 50, 50);

    }

    function clearFulRec() {
        var remrec = canvasElement.getContext("2d");
        remrec.clearRect(700, 50, 100, 50);
    }


    canvasElement.addEventListener('click', function (event) {
        var x = event.pageX - elemLeft;
        var y = event.pageY - elemTop;

        // alert("Ouch " + activeButton);
        if (activeButton === "SCISSOR") {

            //Click inside rectangle
            if (y > 50 && y < 100 && x > 700 && x < 800) {
                clearFulRec();
                var rect1 = canvasElement.getContext("2d");
                rect1.beginPath();
                rect1.rect(801, 50, 50, 50);
                rect1.closePath();
                rect1.lineWidth = 1;
                rect1.strokeStyle = '#ffffff';
                rect1.stroke();// the fill color
                rect1.fillStyle = "blue";
                rect1.fill();

                var rect2 = canvasElement.getContext("2d");
                rect2.beginPath();
                rect2.rect(860, 50, 50, 50);
                rect2.closePath();
                rect1.lineWidth = 1;
                rect1.strokeStyle = '#ffffff';
                rect2.stroke();// the fill color
                rect2.fillStyle = "blue";
                rect2.fill();

            }

            else if (Math.sqrt(((x - 400) * (x - 400)) + ((y - 60) * (y - 60))) < 50) {

                var rect = canvasElement.getContext("2d");
                rect.beginPath();
                rect.rect(395, 1, 10, 200);
                rect.closePath();
                rect.lineWidth = 1;
                rect.strokeStyle = '#ffffff';
                rect.stroke();// the fill color
                rect.fillStyle = '#ffffff';
                rect.fill();
            }
            else {
                drawFulTriDraft();            //click inside triangle
                if (tri.isPointInPath(x, y)) {
                    var rect = canvasElement.getContext("2d");
                    rect.beginPath();
                    rect.rect(45, 1, 10, 200);
                    rect.closePath();
                    rect.lineWidth = 1;
                    rect.strokeStyle = '#ffffff';
                    rect.stroke();// the fill color
                    rect.fillStyle = '#ffffff';
                    rect.fill();
                }

            }

        }
        else if (activeButton === "GLUE") {

            if ((y > 50 && y < 100 && x > 801 && x < 851) || (y > 50 && y < 100 && x > 860 && x < 910)) {
                clearTwoRecHalf();
                drawFulRec();
            }
            else if (Math.sqrt(((x - 400) * (x - 400)) + ((y - 60) * (y - 60))) < 50) {
                //var remrec = canvasElement.getContext("2d");
                //remrec.clearRect(395, 1, 10, 200);
                drawFulCircle();
            }
            else {
                drawFulTriDraft();            //click inside triangle
                if (tri.isPointInPath(x, y)) {
                    var remrec = canvasElement.getContext("2d");
                    remrec.clearRect(45, 1, 10, 200);
                    drawFulTri();
                }
            }

        }
        else if (activeButton === "REMOVE") {
            if (y > 50 && y < 100 && x > 700 && x < 800) {
                clearFulRec();
            }
            else if ((y > 50 && y < 100 && x > 801 && x < 851) || (y > 50 && y < 100 && x > 860 && x < 910)) {
                clearTwoRecHalf();
            }
            else if (Math.sqrt(((x - 400) * (x - 400)) + ((y - 60) * (y - 60))) < 50) {
                for (var i = 0; i < Math.round(Math.PI * 52); i++) {
                    var angle = (i / Math.round(Math.PI * 52)) * 360;
                    canvasElement.getContext("2d").clearRect(400, 60, Math.sin(angle * (Math.PI / 180)) * 52, Math.cos(angle * (Math.PI / 180)) * 52);
                }
            }
            else {
                drawFulTriDraft();            //click inside triangle
                if (tri.isPointInPath(x, y)) {
                    var remrec = canvasElement.getContext("2d");
                    remrec.clearRect(10, 10, 80, 100);
                }
            }

        }

    }, false);
});





// var cir1 = canvasElement.getContext("2d");
// cir1.beginPath();
// cir1.arc(600, 100, 90, 0.5*Math.PI,1.5*Math.PI);
// cir1.closePath();
// cir1.lineWidth = 5;
// cir1.strokeStyle = '#000000';
// cir1.stroke();// the fill color
// cir1.fillStyle = "red";
// cir1.fill();
