class ButtonCount extends HTMLElement {
    constructor() {
        super();
        // keep track of count
        let count = 0;
        // root of shadow dom
        let shadow = this.attachShadow({ mode: 'open' });
        // button that is displayed
        let button = document.createElement('button');
        button.innerText = `Times Clicked: ${count}`
        // bind click event to button
        button.addEventListener('click', () => {
            count++;
            button.innerText = `Times Clicked: ${count}`
        });
        // style for button-count
        let style = document.createElement('style');
        style.innerText =
            `button {
                margin: 1rem 1rem;
                padding: 0.6rem 1rem;
                font-size: 0.8rem;
                background-color: var(--gray-white);
                border: 0.1rem solid var(--one-in-mil-gray);
                border-radius: 1.5rem;
                cursor: pointer;
                transition: all var(--link-trans-time) ease-in-out;
            }
            button:hover {
                transform: translateY(-2px);
                background-color: var(--one-in-mil-gray);
            }`;
        // append elements to shadow root
        shadow.appendChild(style);
        shadow.appendChild(button);
    }

}

customElements.define('button-count', ButtonCount);