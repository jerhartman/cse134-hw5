# cse134-hw5

Jeremy Hartman
A15885709
https://startling-starburst-099718.netlify.app

For this assignment, I created a new section of my website accessible by clicking 'HW5' in the main nav bar.

Part 1:
I created 2 javascript files for part 1, methodtest.js and httprequests.js. These modules separate the page-editing functions from the http method functions. When the page loads, an event listener is added to the form, which then calls the http function corrosponding to the button used to submit. Each http method can be called by using fetch or HMLHttpRequest, depending on which radio option the user chooses. Also, only the necessary inputs are sent to the server. For example, the DELETE method only needs the ID of the article to delete, along with the current date. GET requires the ID, article name, and date, whereas PUT and POST use all input fields.

Part 2:
For the custom count button component, I made a file ButtonCount.js with a class of the same name that extends HTMLElement. Next, the shadow root is createdm, where the button and style is added. The button is then given an event listener to increment the count when clicked. Lastly, we add the button-count element to the custom elements registry.

Part 3:
The extra credit page has 2 buttons, a react component and a vue component respectively. The code for both is in the extracredit.js file. For the react component, the useState hook is added to keep track of the count, along with an event function. Lastly, we create a the element and render it on the page. For the Vue custom element, we create a buttonCount object with an html template inside that is rendered on the page. The count in also initialized to zero. Then all we need to do in mount the component to the button container.