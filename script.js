const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.Login-link');
const RegistrerLink = document.querySelector('.Registrer-link');


RegistrerLink.addEventListener('click',()=>{wrapper.classList.add('active');});
LoginLink.addEventListener('click',()=>{wrapper.classList.remove('active');});


