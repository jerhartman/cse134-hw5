// extra credit

// react

// ButtonCount component
function ButtonCount() {
    // number of times clicked
    let [count, increment] = React.useState(0);
    function buttonClicked() {
        increment(count + 1);
    }
    // return button element
    return React.createElement(
        'button',
        { className: 'button-count', onClick: buttonClicked },
        `Times Clicked: ${count}`
    );
}

ReactDOM.render(React.createElement(ButtonCount), document.querySelector('#button-count-container'));

// vue

// function to add vue component to html
function addVueButton() {
    let buttonCount = {
        template: '<button class="button-count" @click="count++">Times Clicked: {{ count }}</button>',
        data() {
            return { count: 0 }
        }
    }

    let app = Vue.createApp({});
    app.component('button-count', buttonCount);
    app.mount('#vue-container');
}

addVueButton();