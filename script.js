const cards = document.querySelectorAll('.card');

cards.forEach(card =>{
    card.addEventListener('click', ()=> {
        removeActiveCLass();
        card.classList.add('active');

    })
});

function removeActiveCLass() {
    cards.forEach(card => card.classList.remove('active'));
}