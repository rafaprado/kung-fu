const tabListBtns = document.querySelectorAll('.tablist__button');
const tabListContent = document.querySelector('.tabcontent');
const tabPanels = document.querySelectorAll('.tabpanel');

tabListBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', (event) => {
        const target = event.target;
        const panelToBeActivated = document.querySelector(target.dataset.target);

        switchTab(target);
        switchContent(panelToBeActivated);
    });
});

tabListContent.addEventListener('swiped-right', () => {
    const activatedPanel = document.querySelector('.tabpanel:not(.hidden)');
    const previus = activatedPanel.previousElementSibling;
    
    if(previus) {
        const tabToBeActivated = document.querySelector(`#${previus.id}-tab`);

        switchTab(tabToBeActivated);
        switchContent(previus);
    }
});

tabListContent.addEventListener('swiped-left', () => {
    const activatedPanel = document.querySelector('.tabpanel:not(.hidden)');
    const next = activatedPanel.nextElementSibling;
    
    if(next) {
        const tabToBeActivated = document.querySelector(`#${next.id}-tab`);

        switchTab(tabToBeActivated);
        switchContent(next);
    }
});


function switchTab(tab) {
    tabListBtns.forEach(tab => tab.classList.remove('tablist__button--active'));
    tab.classList.add('tablist__button--active');

    const offsetLeft = tab.offsetLeft;
    document.querySelector('.tablist').scrollLeft = offsetLeft;
    
    // tab.scrollIntoView({behavior: "smooth"});
}

function switchContent(content) {
    tabPanels.forEach(panel => panel.classList.add('hidden'));
    content.classList.remove('hidden');
}