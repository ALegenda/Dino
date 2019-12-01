const card = document.querySelector('.card');
const back = document.querySelector('.card__face--back');
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    if(back.hidden){
        back.hidden = false
    }
    else {
        back.hidden = true
    }
    console.log(back.hidden);

});
