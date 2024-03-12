// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    // Function to toggle password visibility
    var togglePasswordButtons = document.querySelectorAll('#togglePassword');
    togglePasswordButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var passwordField = button.closest('.input-group').querySelector('input[type="password"]');
            var passwordFieldType = passwordField.getAttribute('type');
            if (passwordFieldType === 'password') {
                passwordField.setAttribute('type', 'text');
                button.textContent = 'Hide';
            } else {
                passwordField.setAttribute('type', 'password');
                button.textContent = 'Show';
            }
        });
    });
})();