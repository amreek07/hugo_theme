const form = document.querySelector('#pop_up_form');

const btn = document.querySelector('#talk_to_me');

btn.addEventListener('click', ()=>{

    console.log('Talk to me button is clicked')
    form.classList.add('add_active');

});