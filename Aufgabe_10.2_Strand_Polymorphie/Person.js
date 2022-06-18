"use strict";
var L10_Polymorphie;
(function (L10_Polymorphie) {
    class People extends L10_Polymorphie.Moveable {
        position;
        constructor(_position) {
            super(_position);
            let horizon = L10_Polymorphie.crc2.canvas.height * L10_Polymorphie.golden;
            let randomX = Math.floor(Math.random() * L10_Polymorphie.crc2.canvas.width);
            let randomY = horizon + Math.floor(Math.random() * 250);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Polymorphie.Vector(randomX, randomY);
        }
        draw() {
            //Person1
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#40b90a";
            L10_Polymorphie.crc2.fillRect(410, 610, 10, 25);
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#d4a985";
            L10_Polymorphie.crc2.arc(415, 605, 6, 0, 2 * Math.PI);
            L10_Polymorphie.crc2.fill();
            //Person2
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#81F7BE";
            L10_Polymorphie.crc2.fillRect(950, 650, 10, 20);
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#46301d";
            L10_Polymorphie.crc2.arc(955, 645, 6, 0, 2 * Math.PI);
            L10_Polymorphie.crc2.fill();
            //Person3
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#952509";
            L10_Polymorphie.crc2.fillRect(390, 600, 10, 20);
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#8e6037";
            L10_Polymorphie.crc2.arc(395, 595, 6, 0, 2 * Math.PI);
            L10_Polymorphie.crc2.fill();
            //Person4 
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#A9A9F5";
            L10_Polymorphie.crc2.fillRect(70, 680, 15, 30);
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#dec8b5";
            L10_Polymorphie.crc2.arc(77.5, 675, 6, 0, 2 * Math.PI);
            L10_Polymorphie.crc2.fill();
            //Person5 im Wasser 
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#c9d4c4";
            L10_Polymorphie.crc2.fillRect(300, 480, 7, 10);
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#8c6013";
            L10_Polymorphie.crc2.arc(303.5, 476, 4, 0, 2 * Math.PI);
            L10_Polymorphie.crc2.fill();
        }
    }
    L10_Polymorphie.People = People;
})(L10_Polymorphie || (L10_Polymorphie = {}));
//# sourceMappingURL=Person.js.map