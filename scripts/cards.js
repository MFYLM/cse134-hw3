class publicationCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'no title provided';
        const href = this.getAttribute('href') || '#';
        const authors = this.getAttribute('authors') || 'no authors provided';
        const conference = this.getAttribute('conference') || '';
        const year = this.getAttribute('year') || '';

        const style = document.createElement('style');
        style.textContent = `
            .card {
                font-family: -apple-system, system-ui, sans-serif;
                border: 1px solid #eee;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 16px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                background-color: #fff;
            }
            .card h3 {
                margin-top: 0;
                margin-bottom: 8px;
                font-size: 1.1rem;
            }
            .card h3 a {
                text-decoration: none;
                color: #0056b3;
                font-weight: 600;
            }
            .card h3 a:hover {
                text-decoration: underline;
            }
            .authors {
                font-style: italic;
                color: #555;
                margin: 0 0 8px 0;
                font-size: 0.95rem;
            }
            .venue {
                font-size: 0.9rem;
                color: #333;
                margin: 0;
            }
        `;

        const wrapper = document.createElement('div');
        wrapper.className = 'card';
        wrapper.innerHTML = ` 
            <h3><a href="${href}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
            <p class="authors">${authors}</p>
            <p class="venue">
                <span class="conference">${conference}</span>, <span class="year">${year}</span>
            </p>
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}


class experienceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // (1)
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'no title provided';

        const style = document.createElement('style');
        style.textContent = `
            .card {
                font-family: -apple-system, system-ui, sans-serif;
                border: 1px solid #eee;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 16px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                background-color: #fff;
            }
            .card h3 {
                margin-top: 0;
                margin-bottom: 8px;
                font-size: 1.1rem;
                color: #333;
            }
            .content {
                color: #555;
                font-size: 0.95rem;
                line-height: 1.5;
            }
            ::slotted(ul) {
                padding-left: 20px;
                margin-top: 8px;
                margin-bottom: 0;
            }
            ::slotted(p) {
                margin: 0;
            }
        `;

        const wrapper = document.createElement('div');
        wrapper.className = 'card';
        wrapper.innerHTML = `
            <h3>${title}</h3>
            <div class="content">
                <slot></slot>
            </div>
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}

class helloWorldTag extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // this.shadowRoot.innerHTML = `Hello World`;
        console.log('Hello World!');
    }
}


class blogPostCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        const title = this.getAttribute('title') || 'no title provided';
        const summary = this.getAttribute('summary') || 'no summary provided';
        const href = this.getAttribute('href') || '#';
        const date = this.getAttribute('date') || 'no date provided';

        const style = document.createElement('style');
        style.textContent = `
            .card-link {
                display: block;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 1.5rem;
                margin-bottom: 1.5rem;
                text-decoration: none;
                color: inherit;
                background-color: white;
                transition: box-shadow 0.3s ease, transform 0.3s ease;
            }
            .card-link:hover {
                box-shadow: 0 6px 16px rgba(0,0,0,0.12);
                transform: translateY(-4px);
            }
            h3 {
                margin-top: 0;
                margin-bottom: 0.5rem;
                font-size: 1.4rem;
                color: #333;
            }
            .date {
                font-size: 0.9rem;
                color: #757575;
                margin-bottom: 1rem;
            }
            p {
                font-size: 1rem;
                line-height: 1.6;
                margin: 0;
            }
        `;

        const wrapper = document.createElement('div');
        wrapper.className = 'card-link';
        wrapper.innerHTML = `
            <h3><a href="${href}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
            <div class="date">${date}</div>
            <p>${summary}</p>
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}


customElements.define('blog-post-card', blogPostCard);
customElements.define('experience-card', experienceCard);
customElements.define('publication-card', publicationCard);