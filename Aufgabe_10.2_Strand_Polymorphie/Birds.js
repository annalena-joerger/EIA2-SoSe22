"use strict";
var L10_Polymorphie;
(function (L10_Polymorphie) {
    class Bird extends L10_Polymorphie.Moveable {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Polymorphie.Vector(200, 400);
            this.velocity = new L10_Polymorphie.Vector(-100, -50);
            this.velocity.random(120, 100);
            this.position.random(-200, 400);
        }
        draw() {
            L10_Polymorphie.crc2.beginPath();
            L10_Polymorphie.crc2.moveTo(this.position.x + 369, this.position.y + 264);
            L10_Polymorphie.crc2.bezierCurveTo(this.position.x + 377, this.position.y + 233, this.position.x + 417, this.position.y + 235, this.position.x + 422, this.position.y + 263);
            L10_Polymorphie.crc2.bezierCurveTo(this.position.x + 420, this.position.y + 233, this.position.x + 472, this.position.y + 235, this.position.x + 472, this.position.y + 263);
            L10_Polymorphie.crc2.lineWidth = 5;
            L10_Polymorphie.crc2.strokeStyle = "#000000";
            L10_Polymorphie.crc2.stroke();
        }
    }
    L10_Polymorphie.Bird = Bird;
})(L10_Polymorphie || (L10_Polymorphie = {}));
//# sourceMappingURL=Birds.js.map