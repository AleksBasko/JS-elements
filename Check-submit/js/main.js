
(function(){
    let form = document.getElementById('form');
    let check = form.querySelector('.custom-checkbox');
    let btn = form.querySelector('.form__btn');

    check.addEventListener('click', function() {
        if(this.checked) {
            btn.removeAttribute('disabled');
        }
        else {
            btn.setAttribute('disabled', 'disabled');
        }
    });

    btn.addEventListener('click', function(){
        alert('Your form has been submitted');
    });
}());