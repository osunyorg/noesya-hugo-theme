class Footer {
    constructor (selector) {
        this.element = document.querySelector(selector);
        this.limit = window.innerHeight / 4;
        this.bodyLimit = window.innerHeight * 1.25 ;
        this.bodyHeight = document.querySelector("main").clientHeight;
        this.style = window.getComputedStyle(document.body, null);
        this.style.getPropertyValue("height");

        this.listen();
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));

        ['scroll'].forEach(event => {
            window.addEventListener(event, this.onScroll.bind(this));
        });
    }

    resize () {
        this.limit = window.innerHeight / 4;
    }

    onScroll () {
        if (this.bodyHeight < this.bodyLimit || window.scrollY > this.limit) {
            this.element.classList.add('is-visible');
        } 
        if (window.scrollY <= 0) {
            this.element.classList.remove('is-visible');
        }
    }

    reinit () {
        this.resize();
    }
}

window.noesya = window.noesya || {};
window.noesya.footer = new Footer('footer#document-footer');
