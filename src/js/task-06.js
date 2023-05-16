 const validationInput = document.getElementById('validation-input');

  validationInput.addEventListener('blur', function() {
    const expectedLength = parseInt(validationInput.getAttribute('data-length'));
    const enteredValue = validationInput.value.trim();
    const isValid = enteredValue.length === expectedLength;

    validationInput.classList.remove('valid', 'invalid');

    if (isValid) {
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.add('invalid');
    }
  });