"use strict";
var L10_Polymorphie;
(function (L10_Polymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Polymorphie.Vector(0, 0);
            this.velocity = new L10_Polymorphie.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Polymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Polymorphie.crc2.canvas.height;
            if (this.position.x > L10_Polymorphie.crc2.canvas.width)
                this.position.x -= L10_Polymorphie.crc2.canvas.width;
            if (this.position.y > L10_Polymorphie.crc2.canvas.height)
                this.position.y -= L10_Polymorphie.crc2.canvas.height;
        }
        draw() {
            console.log();
        }
    }
    L10_Polymorphie.Moveable = Moveable;
})(L10_Polymorphie || (L10_Polymorphie = {}));
//# sourceMappingURL=Moveable.js.map