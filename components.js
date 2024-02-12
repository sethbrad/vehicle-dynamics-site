class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <div class="navbar-item">
          <p class="title">Vehicle Dynamics</p>
        </div>

        <a id="burger" class="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="menu" class="navbar-menu">
        <!-- wip -->
        <a class="navbar-item" href="index.html"> About </a>
        <a class="navbar-item" href="shows.html"> Shows </a>
        <a class="navbar-item"> Merch </a>
        <a class="navbar-item"> Contact </a>
      </div>
    </nav>
          `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <footer class="footer pb-6 is-light bottom-footer">
      <div class="content has-text-centered">
        <p><strong>Vehicle Dynamics</strong> All rights reserved.</p>
      </div>
    </footer>
          `;
    }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);