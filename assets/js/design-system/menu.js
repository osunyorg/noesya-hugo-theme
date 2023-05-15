class Menu {
    constructor (selector) {
        this.element = document.querySelector(selector);
        this.button = this.element.querySelector('button');
        this.menu = this.element.querySelector('.menu');
        this.links = this.menu.querySelectorAll('a');
        this.menuOpened = false;

        this.listen();
    }

    listen () {
        this.links.forEach(link => {
            link.setAttribute('tabindex', '-1');
        });

        this.button.addEventListener('click', () => {
            this.toggleMenu();
            console.log("juste avant : ", this.menuOpened)
        });
    }
    toggleMenu () {
        this.menuOpened = !this.menuOpened;
        
        console.log(this.menuOpened)
        
        this.links.forEach(link => {
            link.setAttribute('tabindex', this.menuOpened ? '0' : '-1');
        });
        if (this.menuOpened) {
            this.enableEscape();
        }
    }
    enableEscape () {
        window.addEventListener('keydown', (event) => {
            if (event.keyCode === 27 || event.key === 'Escape') {
                console.log("juste avant echap : ", this.menuOpened)
                this.toggleMenu();
            }
        });
    }
}

export default new Menu('header#document-header');
