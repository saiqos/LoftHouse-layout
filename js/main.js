// Phone Mask
mask('[data-tel-input]')

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', ()=>{
        if(input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () =>{
        if(input.value == '+') input.value = '';
    })
});


document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('open');
})