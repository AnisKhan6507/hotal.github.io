// for navbar
var bars = document.querySelector('.hamburger');
var cross = document.querySelector('.cancel');
var sidebar = document.querySelector('.sidebar');

// for form verification
var submit_btn = document.querySelector('.button-1');
var naam = document.querySelector('.name').value;
var number = document.querySelector('.number');
var email = document.querySelector('.email');
var message = document.querySelector('.message');

// for excel sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzXwKWFj6xJxIsrBV56ARG60H-ufsxBFC1c_lsb-N8_-sn2mJC-oI2mDmxqav5QqtU/exec'
const form = document.forms['submit-to-google-sheet']

bars.addEventListener('click',()=>{
    sidebar.style.right = '0';
    bars.style.display = 'none';
    cross.style.display = 'block'
})

cross.addEventListener('click',()=>{
    sidebar.style.right = '-100pc';
    bars.style.display = 'block';
    cross.style.display = 'none'
})
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);
        document.querySelector('.success').style.display = 'block'
       setTimeout(() => {
            document.querySelector('.success').style.display = 'none'
            form.reset()
        }, 5000);
    })
    .catch(error => console.error('Error!', error.message))
    })