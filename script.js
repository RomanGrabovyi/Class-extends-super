'use strict'
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColorRactangle extends Rectangle {//наслідується від Rectangle
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor; //викликає параметри родинного класу,завжди прописувати напочатку
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет ${this.bgColor}`)
    }
}

const div = new ColorRactangle(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());
const square = new Rectangle(10, 10);
console.log(square.calcArea());