'use strict'

// Обязательное задание
const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.creatElem = function () {
        let elem
        if (this.selector[0] === '.') {
            elem = document.createElement('div')
            elem.classList.add(this.selector.slice(1))
        } else if (this.selector[0] === '#') {
            elem = document.createElement('p')
            elem.id = this.selector.slice(1)
        };

        elem.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
        `;

        elem.innerHTML = "Новый элемент страницы"
        document.body.append(elem)
    }
}

const div = new DomElement('.block', 200, 200, 'red', 20);
const p = new DomElement('#best', 100, 200, 'green', 15);

div.creatElem();
p.creatElem();


// Усложненное задание
const div2 = new DomElement('.block2', 100, 100, 'grey', 20);

document.addEventListener("DOMContentLoaded", () => {
    div2.creatElem();

    const block = document.querySelector('.block2');
    let left = 0;
    let top = 0;

    block.style.position = 'absolute'

    document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowLeft') {
            left = left - 10;
            block.style.left = left + 'px';
        } else if (event.code == 'ArrowRight') {
            left = left + 10;
            block.style.left = left + 'px';
        } else if (event.code == 'ArrowUp') {
            top = top - 10;
            block.style.top = top + 'px';
        } else if (event.code == 'ArrowDown') {
            top = top + 10;
            block.style.top = top + 'px';
        }
    });
});

