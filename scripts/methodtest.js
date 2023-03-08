// scripts for the method test page

import { postRequest, getRequest, putRequest, deleteRequest } from '/scripts/httprequests.js';

// init function run when page loads
function pageInit() {
    submitEvent();
    document.getElementById('clear-button').addEventListener('click', () => {
        clearResponse();
    });
}

// bind event to for submit
// we check which button was pressed and extract relevant data
function submitEvent() {
    let form = document.getElementById('methods-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // get current date and time to add to hidden form input
        document.getElementById('date').value = new Date().toLocaleString();
        // check which button was clicked
        let method = event.submitter.value;
        console.log(`${method} method chosen`);
        // extract inputs from form and put in FormData
        let formInput = new FormData();
        let articleID = document.getElementById('id').value;
        let articleName = document.getElementById('article_name').value;
        let articleBody = document.getElementById('article_body').value;
        let dateStr = document.getElementById('date').value;
        // we can now clear the input fields and previous response
        clearResponse();
        // based on button clicked, call chosen method function
        switch(method) {
            case 'post':
                formInput.append('id', `${articleID}`);
                formInput.append('article_name', `${articleName}`);
                formInput.append('article_body', `${articleBody}`);
                formInput.append('date', `${dateStr}`);
                postRequest(formInput);
                break;
            case 'get':
                getRequest(articleID, articleName, dateStr);
                break;
            case 'put':
                formInput.append('article_name', `${articleName}`);
                formInput.append('article_body', `${articleBody}`);
                formInput.append('date', `${dateStr}`);
                putRequest(formInput, articleID);
                break;
            case 'delete':
                deleteRequest(articleID, dateStr);
                break;
            default:
                console.log('invalid method chosen');
        }
    });
}

// displays response from the server on page
// in a hidden section
function displayResponse(json) {
    // find empty ul and populate with json
    let topList = document.getElementById('display-list');
    addRecursiveList(json, topList);
    // make section visible
    document.getElementById('output-section').classList.remove('invisible');
}

// recursive function to iterate over json and
// display data in an unordered list
function addRecursiveList(json, list) {
    if(json == null) {
        let empty = document.createElement('li');
        empty.innerText = 'null';
        list.appendChild(empty);
        return;
    }
    let keys = Object.keys(json);
    keys.forEach((key) => {
        let listItem = document.createElement('li');
        listItem.innerText = key + ': ';
        if(typeof json[key] !== 'object') {
            if(json[key] === '') {
                listItem.innerText += '\" \"';
            }
            else {
                listItem.innerText += json[key];
            }
        }
        else if(JSON.stringify(json[key]) === '{}') {
            listItem.innerText += '{}';
        }
        else {
            let nestedList = document.createElement('ul');
            listItem.appendChild(nestedList);
            addRecursiveList(json[key], nestedList);
        }
        list.appendChild(listItem);
    });
}  

// when a method or clear button is pressed, 
// remove response from page and delete lists from html
// we also clear the input fields 
function clearResponse() {
    // hide output and delete json lists
    document.getElementById('output-section').classList.add('invisible');
    document.getElementById('display-list').remove();
    // add a new ul that is empty
    let cleanList = document.createElement('ul');
    cleanList.id = 'display-list';
    document.getElementById('response').appendChild(cleanList);
    // clear input fields
    document.getElementById('id').value = '';
    document.getElementById('article_name').value = '';
    document.getElementById('article_body').value = '';
    document.getElementById('date').value = '';
}

export { pageInit, displayResponse, addRecursiveList };