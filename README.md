# cse134-hw5

Jeremy Hartman
A15885709
*netlify link here*

For this assignment, I created a new section of my website accessible by clicking 'HW5' in the main nav bar.

Part 1:
I created 2 javascript files for part 1, methodtest.js and httprequests.js. These modules separate the page-editing functions from the http method functions. When the page loads, an event listener is added to the form, which then calls the http function corrosponding to the button used to submit. Each http method can be called by using fetch or HMLHttpRequest, depending on which radio option the user chooses. Also, only the necessary inputs are sent to the server. For example, the DELETE method only needs the ID of the article to delete, along with the current date. GET requires the ID, article name, and date, whereas PUT and POST use all input fields.