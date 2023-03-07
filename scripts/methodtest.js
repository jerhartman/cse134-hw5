// scripts for the method test page

// init function run when page loads
function pageInit() {
    submitEvent()
}

// bind event to for submit
// we check which button was pressed and extract relevant data
function submitEvent() {
    let form = document.getElementById('methods-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('date').value = new Date().toLocaleString();
        let method = event.submitter.value;
        console.log(`${method} method chosen`);
        // based on button clicked, call chosen method function
        switch(method) {
            case 'post':
                postRequest();
                break;
            case 'get':
                getRequest();
                break;
            case 'put':
                putRequest();
                break;
            case 'delete':
                deleteRequest();
                break;
            default:
                console.log('invalid method chosen');
        }
    });
}

// send a post request to server
function postRequest() {

}

// send a get request to server
function getRequest() {

}

// send a put request to server
function putRequest() {

}

// send a delete request to server
function deleteRequest() {

}

// displays response from the server
function displayResponse() {

}

export { pageInit }