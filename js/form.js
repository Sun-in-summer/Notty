const form = document.querySelector('.customer-form-form');
console.log('pristine');

const pristine = new Pristine(form, {
  classTo: 'customer-form-element',
  errorTextParent: 'customer-form-element',
  errorTextTag: 'span',
  errorTextClass: 'customer-form__error',
  errorClass: 'customer-form-element--invalid',
  successClass: 'customer-form-element--valid',
});

const submitButton = form.querySelector('.customer-form-submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляем...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Задать вопрос';
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        unblockSubmitButton();
        createSuccessMessage();
        form.reset();
        closePopup();
      },
      () => {
        createErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target)
    );
    resetForm();
  }
});
