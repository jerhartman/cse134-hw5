// functions for index.html

// array of all hidden-section elements
var sections = Array.from(document.querySelectorAll('.hidden-section'));

// init page when DOM is loaded
function pageInit() {
    window.addEventListener('scroll', scrollEvent);
    typewriterEffect();
    document.querySelector('form').addEventListener('submit', (event) => {
        document.getElementById('form-box').classList.add('hidden')
        document.getElementById('submit-conf').classList.remove('hidden')
        contactSubmit(event);
    });
    document.querySelector('#send-another').addEventListener('click', () => {
        document.getElementById('form-box').classList.remove('hidden')
        document.getElementById('submit-conf').classList.add('hidden')
    });
}

// when page is scrolled, we check if each section is on screen
// and fade in accordingly
function scrollEvent() {
    console.log('scrolled');
    sections.forEach(function(section) {
        let sectionPos = section.getBoundingClientRect();
        if(sectionPos.bottom <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
}

// renders characters of my h1 tag one at a time to create
// a typewriter effect
function typewriterEffect() {
    let h1 = document.querySelector('#typewriter-h1');
    let h1Text = 'Hi There, I\'m Jeremy';
    let ind = 0;

    let intID = setInterval(()=> {
        if(ind === h1Text.length) {
            clearInterval(intID);
            return;
        }
        if (h1Text[ind] === ' ') {
            h1.innerHTML += '&nbsp;';
        } else {
            h1.innerHTML += h1Text[ind];
        }
        ind++;
    }, 200);
}

// sends me an email using EmailJS when a user submits form
function contactSubmit(e) {
    e.preventDefault();
    let form = document.querySelector('form');
    var formData = new FormData(form);
    var templateParams = {
        from_name: DOMPurify.sanitize(formData.get('name')),
        from_email: DOMPurify.sanitize(formData.get('email')),
        message: DOMPurify.sanitize(formData.get('message'))
    };
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    emailjs.send('service_q4lkyyd', 'template_z9u08dn', templateParams)
        .then(function(response) {
        // Handle successful email sending
        console.log('Email sent!', response.status, response.text);
        document.getElementById('form-box').classList.add('hidden')
        document.getElementById('submit-conf').classList.remove('hidden')
        }, function(error) {
        // Handle error
        console.log('Error sending email', error);
        });
}

export { pageInit }