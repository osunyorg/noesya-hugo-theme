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
            if (event.keyCode === 27 && this.menuOpened || event.key === 'Escape' && this.menuOpened) {
                this.toggleMenu(false);
                this.button.focus();
            } else if (event.key === "Tab" && this.menuOpened) {
                // this.innerFocus(event);
                // event.preventDefault();
            }
        });
    }

    toggleMenu(open = !this.menuOpened) {
        this.menuOpened = open;
        
        this.links.forEach((link, index) => {
            link.setAttribute('tabindex', this.menuOpened ? '0' : '-1');
            if (index === 0) {
                link.focus();
            }
        });
    }

    innerFocus(event) {
        const focusables = 'a, button, input, textarea, select, details, [tabindex], [contenteditable="true"]';
        const elements = this.menu.querySelectorAll(focusables);

        const focusableInDialog = Array.from(elements).filter(element => element.tabIndex >= 0);
        const firstFocusable = focusableInDialog[0];
        const lastFocusable = focusableInDialog.at(-1);

        if (!this.menuOpened) {
            return;
        }
        console.log("step 1")
        if (!this.menu.contains(event.target) && event.shiftKey) {
            lastFocusable.focus();
        }
        else if (!this.menu.contains(event.target)) {
            firstFocusable.focus();
        }
        // firstFocusable.focus();
    }
}

export default new Menu('header#document-header');
