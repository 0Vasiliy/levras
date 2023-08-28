const cards = document.querySelectorAll(".card");
const navBtn = document.querySelector(".navbar");
const cardBlock = document.querySelector(".card-wraper");

let viewId = 1;

function render() {
    cards.forEach(function(card, idx) {

    if(idx == viewId+1 || idx == viewId-1){
        if (card.classList.contains('active-card')) card.classList.remove('active-card');
        //     card.classList.add('next-card')
    }

        // if (idx == viewId+1 || idx == viewId-1) {
        //     if (card.classList.contains('active-card')) card.classList.remove('active-card');
        //     card.classList.add('next-card')
        // }
        // else if (idx == viewId) {
        //     if (card.classList.contains('next-card')) card.classList.remove('next-card');
        //     card.classList.add('active-card')
        // } else {
        //     if (card.classList.contains('next-card')) card.classList.remove('next-card');
        // }
        
        cardBlock.style.left = viewId*(-200) +'px'
    });
}

navBtn.addEventListener('click', function(e){

    if (e.target.parentElement.classList.contains('next')) {
        if (viewId < cards.length) {
         viewId++
        }
        if (viewId == cards.length) viewId = 0;
        render();
    }
    if (e.target.parentElement.classList.contains('back')) {
        if (viewId < cards.length) {
         viewId--
        }
        if (viewId == cards.length) viewId = -1;
        render();
    }
});

console.log('Window width', document.documentElement.clientWidth)
console.log('Cards wrapper width', cardBlock.offsetWidth)
console.log('Card width', cards[0].offsetWidth)
cardBlock.style.left = (document.documentElement.clientWidth-cards[1].offsetWidth)/2+'px'