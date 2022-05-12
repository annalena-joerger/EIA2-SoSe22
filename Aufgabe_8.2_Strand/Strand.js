var L08_2;
(function (L08_2) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky(0, 0, "#88d1CF");
        drawWater(0, 0);
        drawSand(0, 110);
        drawSun(560, 120, "#FFFF00", "#FFDF00");
        drawCloud(50, 160, "#FFFFFF");
        drawCloud(260, 100, "#f0eeea");
        drawCloud(700, 120, "#FFFFFF");
        drawCloud(1100, 60, "#f0eeea");
        drawPerson();
        drawBirds();
        drawShip();
        drawBay(-100, 420, "#5c3c18");
        //Wasser
        function drawWater(_x, _y) {
            var gradient = crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#197580");
            gradient.addColorStop(0.7, "#2f8b96");
            gradient.addColorStop(0.9, "#56c1cd");
            gradient.addColorStop(1.0, "#74e1ee");
            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 400);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        //Sand
        function drawSand(_x, _y) {
            var gradient = crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#d5ba8c");
            gradient.addColorStop(0.7, "#d8b475");
            gradient.addColorStop(0.9, "#ad7b24");
            gradient.addColorStop(1.0, "#94681d");
            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 400);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        //Himmel
        function drawSky(_x, _y, _strokeColor) {
            var gradient = crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#7BCDDF");
            gradient.addColorStop(1, "#1874CD");
            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1280, _y);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x - 1280, _y + 400);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        //Sonne
        function drawSun(_x, _y, _strokeColor, _fillColor) {
            let r1 = 40;
            let r2 = 300;
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
            gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        //Wolke
        function drawCloud(_x, _y, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
            crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
            crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
            crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        //Personen
        function drawPerson() {
            //Person1
            crc2.beginPath();
            crc2.fillStyle = "#40b90a";
            crc2.fillRect(410, 610, 10, 25);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#d4a985";
            crc2.arc(415, 605, 6, 0, 2 * Math.PI);
            crc2.fill();
            //Person2
            crc2.beginPath();
            crc2.fillStyle = "#81F7BE";
            crc2.fillRect(950, 650, 10, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#46301d";
            crc2.arc(955, 645, 6, 0, 2 * Math.PI);
            crc2.fill();
            //Person3
            crc2.beginPath();
            crc2.fillStyle = "#952509";
            crc2.fillRect(390, 600, 10, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#8e6037";
            crc2.arc(395, 595, 6, 0, 2 * Math.PI);
            crc2.fill();
            //Person4 
            crc2.beginPath();
            crc2.fillStyle = "#A9A9F5";
            crc2.fillRect(70, 680, 15, 30);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#dec8b5";
            crc2.arc(77.5, 675, 6, 0, 2 * Math.PI);
            crc2.fill();
            //Person5 im Wasser 
            crc2.beginPath();
            crc2.fillStyle = "#c9d4c4";
            crc2.fillRect(300, 480, 7, 10);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#8c6013";
            crc2.arc(303.5, 476, 4, 0, 2 * Math.PI);
            crc2.fill();
        }
        //Möwen
        function drawBirds() {
            crc2.beginPath();
            crc2.moveTo(100, 100);
            crc2.bezierCurveTo(100, 50, 200, 50, 200, 100);
            crc2.moveTo(200, 100);
            crc2.bezierCurveTo(200, 50, 300, 50, 300, 100);
            crc2.moveTo(369, 264);
            crc2.bezierCurveTo(377, 233, 417, 235, 422, 263);
            crc2.bezierCurveTo(420, 233, 472, 235, 472, 263);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }
        //Schiff
        function drawShip() {
            //Stab
            crc2.beginPath();
            crc2.fillStyle = "#322e2e";
            crc2.fillRect(735, 325, 5, 50);
            crc2.fill();
            //Dreieck
            crc2.moveTo(740, 325);
            crc2.lineTo(740, 350);
            crc2.lineTo(765, 337.5);
            crc2.fillStyle = "#878080";
            crc2.fill();
            //Schiffskörper
            crc2.beginPath();
            crc2.strokeStyle = "#878080";
            crc2.moveTo(750, 400);
            crc2.lineTo(695, 400);
            crc2.lineTo(670, 375);
            crc2.lineTo(775, 375);
            crc2.fillStyle = "#878080";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
    function drawBay(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "#5c3c18";
        crc2.lineWidth = 2;
        var gradient = crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#6e471b");
        gradient.addColorStop(0.7, "#5c3c18");
        gradient.addColorStop(0.9, "#472f13");
        gradient.addColorStop(1.0, "#422a0f");
        crc2.fillStyle = gradient;
        crc2.moveTo(_x - 15000, _y + 100);
        crc2.lineTo(_x + 10, _y - 220);
        crc2.lineTo(_x + 180, _y - 100);
        crc2.lineTo(_x + 300, _y + 90);
        crc2.lineTo(_x + 30, _y + 400);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
})(L08_2 || (L08_2 = {}));
//# sourceMappingURL=Strand.js.map