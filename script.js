document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const popupForm = document.getElementById('popupForm');
    const successPopup = document.getElementById('successPopup');
    const closeButtons = document.querySelectorAll('.close-btn');

    subscribeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        popupForm.classList.remove('hide');
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            popupForm.classList.add('hide');
            successPopup.classList.add('hide');
        });
    });

    document.getElementById('popupSubscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target.popupEmail.value;
        const Firstname = event.target.popupFirstName.value;
        const Lastname = event.target.popupLastName.value;

        if (validateEmail(email)) {
            popupForm.classList.add('hide');
            successPopup.classList.remove('hide');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

