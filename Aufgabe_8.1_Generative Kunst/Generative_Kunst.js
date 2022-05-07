/*Zusammenarbeit mit Evelin Sinner*/
var L08;
(function (L08) {
    let crc2;
    let colorHue;
    let saturation;
    let lightness;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let gradient = crc2.createLinearGradient(50, 100, 150, 400);
        colorHue = Math.round(Math.random() * 400);
        gradient.addColorStop(0, "hsl(" + colorHue + "," + "80%, " + "90%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 2000, 1000);
        for (let index = 0; index < 20; index++) {
            let xRandomNumber = Math.floor(Math.random() * 800);
            let yRandomNumber = Math.floor(Math.random() * 600);
            drawTriangle(xRandomNumber, yRandomNumber);
            drawingCircle(xRandomNumber, yRandomNumber);
            drawingBubble(xRandomNumber, yRandomNumber);
            drawingLine(xRandomNumber, yRandomNumber);
        }
    }
    function drawTriangle(_xRandomNumber, _yRandomNumber) {
        colorHue = Math.round(Math.random() * 300);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 70);
        crc2.beginPath();
        crc2.moveTo(_xRandomNumber, _yRandomNumber);
        crc2.lineTo(_xRandomNumber, _yRandomNumber + 200);
        crc2.lineTo(_xRandomNumber + 100, _yRandomNumber + 20);
        crc2.closePath();
        crc2.lineWidth = 4;
        crc2.stroke();
    }
    function drawingCircle(_xRandomNumber, _yRandomNumber) {
        colorHue = Math.round(Math.random() * 50);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.round(Math.random() * 60);
        _xRandomNumber = Math.random() * 800;
        _xRandomNumber = Math.random() * 600;
        crc2.beginPath();
        crc2.arc(_xRandomNumber, _yRandomNumber, radius, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + colorHue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.fill();
        crc2.closePath();
    }
    function drawingBubble(_xRandomNumber, _yRandomNumber) {
        colorHue = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 140);
        lightness = Math.round(Math.random() * 120);
        crc2.beginPath();
        crc2.lineTo(_xRandomNumber + 400, _yRandomNumber + 30);
        crc2.lineTo(_xRandomNumber, _yRandomNumber + 400);
        crc2.strokeStyle = "hsl(" + colorHue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.stroke();
    }
    function drawingLine(_xRandomNumber, _yRandomNumber) {
        colorHue = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 140);
        lightness = Math.round(Math.random() * 120);
        crc2.beginPath();
        crc2.lineTo(_xRandomNumber + 400, _yRandomNumber + 30);
        crc2.lineTo(_xRandomNumber, _yRandomNumber + 400);
        crc2.strokeStyle = "hsl(" + colorHue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.stroke();
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=Generative_Kunst.js.map