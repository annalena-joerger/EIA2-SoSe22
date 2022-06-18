namespace L10_Polymorphie {
    export class People extends Moveable {
        position: Vector;

        constructor(_position?: Vector) {
            super(_position);

            let horizon: number = crc2.canvas.height * golden;
            let randomX: number = Math.floor(Math.random() * crc2.canvas.width);
            let randomY: number = horizon + Math.floor(Math.random() * 250);
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(randomX, randomY);

        }

        draw(): void {
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
    }

}