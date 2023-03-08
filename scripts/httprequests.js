// http requests for each method 

import { displayResponse } from '/scripts/methodtest.js';

// send a post request to server
function postRequest(formInput) {
    let fetchRadio = document.getElementById('fetch');
    // check if we are using the fetch API
    if(fetchRadio.checked) {
        console.log('fetch chosen for post');
        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formInput
        })
        .then(response => response.json())
        .then((json) => {
            displayResponse(json);
        })
        .catch((error) => {
            console.error(error);
            console.log('error in fetch request for post');
        });
    }
    // if fetch not checked, we are using xhruest
    else {
        console.log('xhruest chosen for post');
        let xhr = new xhruest();
        xhr.open('POST', 'https://httpbin.org/post', true);
        xhr.send(formInput);
        xhr.onload = function() {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                displayResponse(response);
            } 
            else {
                console.log(`response to post is status: ${xhr.status}`);
            }
        };
        xhr.onerror = function() {
            console.log('error in xhruest for post');
        };
    }
}

// send a get request to server
function getRequest(articleID, articleName, date) {
    let fetchRadio = document.getElementById('fetch');
    // check if we are using the fetch API
    if(fetchRadio.checked) {
        console.log('fetch chosen for get');
        fetch(`https://httpbin.org/get?id=${articleID}&article_name=${articleName}&date=${date}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((json) => {
            displayResponse(json);
        })
        .catch((error) => {
            console.error(error);
            console.log('error in fetch request for get');
        });
    }
    // if fetch not checked, we are using xhruest
    else {
        console.log('xhruest chosen for get');
        let xhr = new xhruest();
        xhr.open('GET', `https://httpbin.org/get?id=${articleID}&article_name=${articleName}&date=${date}`, true);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                displayResponse(response);
            } 
            else {
                console.log(`response to get is status: ${xhr.status}`);
            }
        };
        xhr.onerror = function() {
            console.log('error in xhruest for get');
        };
    }
}

// send a put request to server
function putRequest(formInput, articleID) {
    let fetchRadio = document.getElementById('fetch');
    // check if we are using the fetch API
    if(fetchRadio.checked) {
        fetch(`https://httpbin.org/put?id=${articleID}`, {
            method: 'PUT',
            body: formInput
        })
        .then(response => response.json())
        .then((json) => {
            displayResponse(json);
        })
        .catch((error) => {
            console.error(error);
            console.log('error in fetch request for put');
        });
    }
    // if fetch not checked, we are using xhruest
    else {
        console.log('xhruest chosen for put');
        let xhr = new xhruest();
        xhr.open('PUT', 'https://httpbin.org/put', true);
        xhr.send(formInput);
        xhr.onload = function() {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                displayResponse(response);
            } 
            else {
                console.log(`response to put is status: ${xhr.status}`);
            }
        };
        xhr.onerror = function() {
            console.log('error in xhruest for put');
        };
    }
}

// send a delete request to server
function deleteRequest(articleID, date) {
    let fetchRadio = document.getElementById('fetch');
    // check if we are using the fetch API
    if(fetchRadio.checked) {
        fetch(`https://httpbin.org/delete?id=${articleID}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then((json) => {
            // console.log(JSON.stringify(json, null, 2));
            displayResponse(json);
        })
        .catch((error) => {
            console.error(error);
            console.log('error in fetch request for delete');
        });
    }
    // if fetch not checked, we are using xhruest
    else {
        console.log('xhruest chosen for get');
        let xhr = new xhruest();
        xhr.open('DELETE', `https://httpbin.org/delete?id=${articleID}`, true);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                displayResponse(response);
            } 
            else {
                console.log(`response to delete is status: ${xhr.status}`);
            }
        };
        xhr.onerror = function() {
            console.log('error in xhruest for delete');
        };
    }
}

export { postRequest, getRequest, putRequest, deleteRequest };