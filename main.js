class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header-container p-3">
            <div class="col-5">
                <h2 class="header-text">Jessica Ding: Portfolio</h2>
            </div>
            
        </div>
        `
    }
} //343

customElements.define('my-header', MyHeader)

class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <nav class="py-5">
                <ul class="">
                    <li class="pb-5"><a href="index.html">Home</a></li>
                    <li class="pb-5"><a href="engineering-projects.html">Projects</a></li>
                    <li class="pb-5"><a href="gallery.html" title="Sorry, there's only one thing here.">Gallery</a></li>
                    <li><a href="#" title="Coming soon">Music</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define('my-navbar', MyNavbar)

class MyNavbarMobile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            
                <ul class="mobile">
                    <li class="mobile"><a href="index.html">Home</a></li>
                    <li class="mobile"><a href="engineering-projects.html">Projects</a></li>
                    <li class="mobile"><a href="gallery.html">Gallery</a></li>
                    <li class="mobile"><a href="#" title="Coming soon">Music</a></li>
                </ul>

        `
    }
}

customElements.define('my-navbar-mobile', MyNavbarMobile)

class MyTitle extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          
        `
    }
}

customElements.define('my-title', MyTitle)

class MyBody extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        `
    }
}

customElements.define('my-body', MyBody)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p class="py-3">
        Last edited March 2026 by Jessica Ding.<br>
        <b>CONTACT: </b>
        <span>&#9993;</span><a href=mailto:"ding.je@northeastern.edu">ding.je@northeastern.edu</a> | <a href="https://www.linkedin.com/in/jlding" target="blank">LinkedIn</a>
        </p>
        `
    }
}

customElements.define('my-footer', MyFooter)