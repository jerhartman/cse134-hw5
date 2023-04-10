
let form = new FormData();
let input = document.getElementById('input').value;
form.append('input', input);

let xhr = new XMLHttpRequest(); // XMLHttp
// set headers here, like MIME type
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.open('POST', 'https://httpbin.org/post', true);
xhr.send(form);         // xhr.send() empty body for GET
xhr.onload = () => {    // args in GET go in URL
    if (xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
    } 
    else { console.log(xhr.status); }
};
xhr.onerror = () => {
    console.log('error');
};
xhr.timeout = 5000; // Set a 5-second timeout
xhr.ontimeout = () => { console.log('timed out');};



fetch('https://httpbin.org/post', { // fetch
        method: 'POST',
        body: formInput // empty body for GET
    })
    .then(response => response.json())
    .then((json) => {
        displayResponse(json);
    })
    .catch((error) => {
        console.error(error);
        console.log('error in fetch request for post');
    });
