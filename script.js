const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.Login-link');
const RegistrerLink = document.querySelector('.Registrer-link');
const registrarbtn = document.querySelector('.btnLogin')


RegistrerLink.addEventListener('click',()=>{wrapper.classList.add('active');});
LoginLink.addEventListener('click',()=>{wrapper.classList.remove('active');});
registrarbtn.addEventListener('click',()=>{wrapper.classList.add('active');});


