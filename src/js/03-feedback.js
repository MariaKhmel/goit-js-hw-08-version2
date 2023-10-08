import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),

}
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(formInput, 500));
refs.form.addEventListener('submit', formSubmit);

const emailInput = refs.form.email;
const messageInput = refs.form.message;


function formInput(e) {
    const element = e.target;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
 localStorage.setItem('STORAGE_KEY', JSON.stringify({ emailValue, messageValue }));
  
}

populateInputText();

function populateInputText() {
    const savedMessage = localStorage.getItem('STORAGE_KEY');
    if (savedMessage) {
        const formData = JSON.parse(savedMessage);   
        emailInput.value = formData.emailValue;
        messageInput.value = formData.messageValue;
    }
    
}




function formSubmit(e) {
    e.preventDefault();
    if (emailInput.value.length !== 0 && messageInput.value.length !== 0) {
        console.log(JSON.parse(localStorage.getItem('STORAGE_KEY')));
        localStorage.removeItem('STORAGE_KEY'); 
        e.currentTarget.reset();
      
    }
    
}
