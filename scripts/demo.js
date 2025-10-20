class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('Hello World!');
    }
}

customElements.define('hello-world', HelloWorld);
