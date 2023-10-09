const main =  document.querySelector('.newsletter')
const modal = document.querySelector('.modal')
const form = document.getElementById('newsletter');
const dimissButton = document.querySelector('.modal__button')
const input = document.getElementById('mail')

function handleOnSubmit(e){ // handle a form submission, obtains the data of form
    e.preventDefault();
    const data = Object.fromEntries(new FormData (e.target))
    handleErrors(data.mail)
}

function handleReset(){
    main.style.display = 'flex'
    modal.style.display = 'none'
    input.style.cssText = '';
    errors.innerText = ''; 
}

function handleErrors(data){
    const userMail = document.getElementById('setEmail');
    const errors = document.getElementById('errors')
  if(data === ''){
        input.style.cssText = 'border-color: var(--tomato); background-color: #FFE1DE';
        errors.innerText = 'This field is required'
    }else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data )){
        input.style.cssText = 'border-color: var(--tomato); background-color: #FFE1DE';
        errors.innerText = 'Valid email required'
    }else{
        userMail.innerText = data 
        main.style.display = 'none'
        modal.style.display = 'flex'
        form.reset();
    }
}

window.onload = () =>{ //It ensures that the JavaScript code within it runs after all the page's elements are ready.

    form.addEventListener('submit', (e)=>{ //adds event listener to the form element
        handleOnSubmit(e)
    })
    
    dimissButton.addEventListener('click',() =>{ //adds event listener to the dimmis element
        handleReset()
    })
}
