document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById('registrationForm');
  var elements = form.elements;

  function validateForm() {
      var isValid = true;
      for (var i = 0; i < elements.length; i++) {
          if (elements[i].hasAttribute('required')) {
              if (!elements[i].value.trim()) {
                  elements[i].classList.add('is-invalid');
                  isValid = false;
              } else {
                  elements[i].classList.remove('is-invalid');
              }
          }
      }
      return isValid;
  }

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
          alert('Form submitted successfully!');
          form.reset();
      }
  });

  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('input', function() {
          if (this.classList.contains('is-invalid')) {
              this.classList.remove('is-invalid');
          }
      });
  }
});
