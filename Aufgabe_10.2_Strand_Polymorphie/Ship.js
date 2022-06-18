"use strict";
var L10_Polymorphie;
(function (L10_Polymorphie) {
    class Ship extends L10_Polymorphie.Moveable {
        position;
        velocity;
        size;
        particlePositions = [];
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Polymorphie.Vector(-100, 20);
            this.velocity = new L10_Polymorphie.Vector(30, 0);
            if (_size)
                this.size = _size;
            else
                this.size = new L10_Polymorphie.Vector(270, 75);
            for (let drawn = 0; drawn < 50; drawn++) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                let position = new L10_Polymorphie.Vector(x, y);
                this.particlePositions.push(position);
            }
        }
        draw() {
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.fillStyle = "#322e2e";
            L10_Polymorphie.crc2.fillRect(this.position.x + 735, this.position.y + 325, 5, 50);
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.moveTo(this.position.x + 740, this.position.y + 325);
            L10_Polymorphie.crc2.lineTo(this.position.x + 740, this.position.y + 350);
            L10_Polymorphie.crc2.lineTo(this.position.x + 765, this.position.y + 337.5);
            L10_Polymorphie.crc2.fillStyle = "#878080";
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.strokeStyle = "#878080";
            L10_Polymorphie.crc2.moveTo(this.position.x + 750, this.position.y + 400);
            L10_Polymorphie.crc2.lineTo(this.position.x + 695, this.position.y + 400);
            L10_Polymorphie.crc2.lineTo(this.position.x + 670, this.position.y + 375);
            L10_Polymorphie.crc2.lineTo(this.position.x + 775, this.position.y + 375);
            L10_Polymorphie.crc2.fillStyle = "#878080";
            L10_Polymorphie.crc2.fill();
            L10_Polymorphie.crc2.closePath();
            L10_Polymorphie.crc2.stroke();
        }
    }
    L10_Polymorphie.Ship = Ship;
})(L10_Polymorphie || (L10_Polymorphie = {}));
//# sourceMappingURL=Ship.js.map