class Menu {
    constructor (selector) {
        this.element = document.querySelector(selector);
        this.button = this.element.querySelector('button');
        this.menu = this.element.querySelector('.menu');
        this.links = this.menu.querySelectorAll('a');
        this.menuOpened = false;

        this.listen();
    }

    listen() {
        this.links.forEach(link => {
            link.setAttribute('tabindex', '-1');
        });

        this.button.addEventListener('click', () => {
            this.toggleMenu();
        });
        window.addEventListener('keydown', (event) => {
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.toggleMenu(false);
            }
        });
    }

    toggleMenu(open = !this.menuOpened) {
        console.log(open)
        this.menuOpened = open;
        
        this.links.forEach(link => {
            link.setAttribute('tabindex', this.menuOpened ? '0' : '-1');
        });
    }
}

export default new Menu('header#document-header');
