class DesktopNavItem extends HTMLElement {
    constructor () {
        super();
        this.toggle = this.querySelector('.desktop-nav__toggle');
        this.dropdown = this.querySelector('.desktop-nav__dropdown');
        this.closeBtn = this.querySelector('.desktop-nav__close-btn');

        // Bind events to toggle
        // Touch events
        this.toggle.addEventListener('click', this.toggleMenu.bind(this));
        this.closeBtn.addEventListener('click', this.closeMenu.bind(this));

        // hover events
        this.addEventListener('mouseleave', this.closeMenu.bind(this));
        this.addEventListener('mouseenter', this.toggleMenu.bind(this));
        // click outside or focus change events - not good for accessibility - toDo - find a better way
        this.addEventListener('focusout', this.closeMenu.bind(this));
    }

    toggleMenu () {
        const navBarItems = document.querySelectorAll('desktop-nav-item');
        const toggleBtn = this.toggle;
        const dropdownContainer = this.dropdown;
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        // Handle accessibility first

        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        dropdownContainer.setAttribute('aria-hidden', isExpanded);
        // Show / hide the dropdown
        toggleBtn.classList.toggle('active');
        dropdownContainer.classList.toggle('hidden');

        if (!isExpanded) {
            document.body.classList.add('nav-active');
        } else {
            document.classList.remove('nav-active');
        }
    }

    closeMenu () {
        const toggleBtn = this.toggle;
        const dropdownContainer = this.dropdown;
        // Handle accessibility first

        toggleBtn.setAttribute('aria-expanded', false);
        dropdownContainer.setAttribute('aria-hidden', true);
        // Hide the dropdown
        toggleBtn.classList.remove('active');
        dropdownContainer.classList.add('hidden');
        document.body.classList.remove('nav-active');
    }
}

customElements.define('desktop-nav-item', DesktopNavItem);
