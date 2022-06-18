"use strict";
var L10_Polymorphie;
(function (L10_Polymorphie) {
    class Cloud extends L10_Polymorphie.Moveable {
        position;
        velocity;
        size;
        particlePositions = [];
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Polymorphie.Vector(50, 100);
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
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L10_Polymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Polymorphie.crc2.save();
            L10_Polymorphie.crc2.translate(this.position.x, this.position.y);
            L10_Polymorphie.crc2.fillStyle = gradient;
            for (let drawn of this.particlePositions) {
                L10_Polymorphie.crc2.save();
                L10_Polymorphie.crc2.translate(drawn.x, drawn.y);
                L10_Polymorphie.crc2.fill(particle);
                L10_Polymorphie.crc2.restore();
            }
            L10_Polymorphie.crc2.restore();
        }
    }
    L10_Polymorphie.Cloud = Cloud;
})(L10_Polymorphie || (L10_Polymorphie = {}));
//# sourceMappingURL=Cloud.js.map