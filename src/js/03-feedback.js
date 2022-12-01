// import throttle from 'lodash.throttle';

// const contactEl = document.querySelector('form');
// const userData = {};

// const fillContactFormFields = () => {
//     let contactFormDataFromLS;
//     try {
//         contactFormDataFromLS = JSON.parse(localStorage.getItem('userData'));
//         if (contactFormDataFromLS === null) {
//             return;
//         }
//     } catch(err) {
//         console.log(err);
//     }

//     for (const prop in contactFormDataFromLS) {
//         if (contactFormDataFromLS.hasOwnProperty(prop)) {
//             // console.log(prop);
//             // console.log(contactFormDataFromLS[prop]);

//             contactEl.elements[prop].value = contactFormDataFromLS[prop];
//         }
//     }

//     // contactEl.elements['email'].value = 'Hello';
//     // contactEl.elements['message'].value = 'Hi';
// };

// fillContactFormFields();

// const onFormFieldChange = ev => {
//     const { target } = ev;
    
//     const fieldName = target.name;
//     const fielValue = target.value;
    
//     userData[fieldName] = fielValue;

//     localStorage.setItem('userData', JSON.stringify(userData));
// };

// const onContactFormSubmit = ev => {
//     ev.preventDefault();

//     localStorage.removeItem('userData');
//     contactEl.reset();
// }

// contactEl.addEventListener('change', onFormFieldChange);
// contactEl.addEventListener('submit', onContactFormSubmit);

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector('form');
// console.log(formEl);
const emailEl = document.querySelector('input');
// console.log(emailEl);
const textareaEl = document.querySelector('textarea');
// console.log(textareaEl);
const buttonEl = document.querySelector('button');
// console.log(buttonEl);

formEl.addEventListener('input', throttle(onformEl, 500));
formEl.addEventListener('submit', onFormSubmit);

fillForm();

function onFormSubmit(e) {
    e.preventDefault();
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;
    console.log(formData);

    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onformEl(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function fillForm() {
    const saveForm = localStorage.getItem(STORAGE_KEY);
    if (saveForm) {
        const parceSaveForm = JSON.parse(saveForm);

        for (const prop in parceSaveForm) {
            if (parceSaveForm.hasOwnProperty(prop)) {
                formEl.elements[prop].value = parceSaveForm[prop];
            }
        }
    }
}