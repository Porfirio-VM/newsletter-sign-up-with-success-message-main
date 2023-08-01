window.onload = () =>{
    const btn = document.getElementById('sub');
    const email = document.getElementById('mail');
    inputListener(email, btn);
}

const inputListener = (email, btn) =>{
    const warning = document.querySelector('.warning');
    const form = document.querySelector('.container');
    const modal = document.querySelector('.popup');
    const bMail = document.getElementById('bmail');
    const returnBtn = document.getElementById('return');

    btn.addEventListener('click', function(e){
        e.preventDefault();
        mail = email.value;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        mail === '' ? (warning.innerText = 'This field is empty', email.classList.replace('neutral','bad_input')) : 
        !regex.test(mail) ? (warning.innerText = 'Invalid Email', email.classList.replace('neutral','bad_input')) : (form.style.display = 'none', modal.style.display = 'block', bMail.innerText = mail);    
    });

    email.addEventListener('input', function(){
        mail = email.value;
        mail === ''|mail !=='' ? (email.classList.replace('bad_input', 'neutral'), warning.innerText = ''): null;
    })

    returnBtn.addEventListener('click', function (){
        email.value = '';
        form.style.display = 'flex';
        modal.style.display = 'none';
    });
}