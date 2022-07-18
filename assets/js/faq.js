const faqItems = document.querySelectorAll(".faq-item__button");

faqItems.forEach(item => {
    item.addEventListener('click', event => onClickFaq(event));
});

function onClickFaq(event) {
    const target = event.target;
    const faqContent = target.nextElementSibling;

    if(target.classList.contains("faq-item__button")) {
        faqContent.toggleAttribute('hidden');
        faqContent.classList.toggle('hidden');
        toggleArrow(target);
    }
}

function toggleArrow(target) {
    const arrow = target.querySelector('.faq-item__icon');
    arrow.classList.toggle('faq-item__icon--up')
}