
class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let count = 0;
        let shadow = this.attachShadow({ mode: 'open' });
        let button = document.createElement('button');
        button.innerText = `Times Clicked: ${count}`
        button.addEventListener('click', () => {
            count++;
            button.innerText = `Times Clicked: ${count}`
        });
        let style = document.createElement('style');
        style.innerText =``;
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}
customElements.define('button-count', ButtonCount);

