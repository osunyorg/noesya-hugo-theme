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
        console.log(this.limit, window.scrollY)
        if (this.bodyHeight < this.bodyLimit || window.scrollY > this.limit) {
            console.log('on montre')
            this.element.classList.add('is-visible');
        } 
        if (window.scrollY <= 0) {
            console.log('on cache')
            this.element.classList.remove('is-visible');
        }
    }
}

export default new Footer('footer#document-footer');
