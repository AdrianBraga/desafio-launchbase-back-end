const modalOverlay = document.querySelector('.modal-overlay');
const modalMax = document.querySelector('.modal');
const cardsBootcamp = document.querySelectorAll('.card-bootcamp');

for (let cardBootcamp of cardsBootcamp) {
    cardBootcamp.addEventListener("click", () => {

        const bootcampId = cardBootcamp.getAttribute('id');
        window.location.href = `/courses/${bootcampId}`
    })
}

// https://app.rocketseat.com.br/starter