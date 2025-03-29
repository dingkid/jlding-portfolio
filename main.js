class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="header-container p-3">
            <div class="col-5">
                <h2 class="header-text">Jessica Ding: Design Portfolio</h2>
            </div>
            <nav class="navbar mr-3">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="engineering-projects.html">Projects</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="#">Music</a></li>
                </ul>
            </nav>
        </div>
        
        `
    }
}

customElements.define('my-header', MyHeader)

class MyTitle extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
          
        `
    }
}

customElements.define('my-title', MyTitle)

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <p class="footer-text py-3">
        Last edited March 2025 by Jessica Ding.<br>
         Email: ding.je@northeastern.edu | Find me: <a href="https://www.linkedin.com/in/jlding" target="blank">LinkedIn</a>
        </p>
        `
    }
}

customElements.define('my-footer', MyFooter)