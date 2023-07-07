const ratingProgressArr = document.querySelectorAll('.rating-review__progress');

if (ratingProgressArr) {
    ratingProgressArr.forEach(rating => {
        let progress = rating.dataset.progress; 
        if (progress) rating.style.setProperty('--progress', progress);
    })
}

const headerBurger = document.querySelector('.header__burger');
const body = document.body;

if (headerBurger) {
    headerBurger.addEventListener('click', e => {
        const menuId = headerBurger.dataset.menu;
        const menu = document.querySelector(menuId);

        if (menu) {
            headerBurger.classList.toggle('header__burger--active');
            menu.classList.toggle('header__menu--active');
            body.classList.toggle('_locked');
        }
    });
}

const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks) {
    popupLinks.forEach(popupLink => {
        popupLink.addEventListener('click', e => {

            const popupId = popupLink.getAttribute('href');
            const popup = document.querySelector(popupId);

            if (popup) openPopup(popup);

            e.preventDefault();

        });
    });
}

function openPopup(popup) {
    if (!popup.classList.contains('popup--active')) {
        popup.classList.add('popup--active');
        body.classList.add('_locked');
    }

    popup.addEventListener('click', e => {
        const popupClose = e.target.closest('.popup-close');
        if (popupClose || !e.target.closest('.popup__content')) closePopup(popup);
    });
}

function closePopup(popup) {
    if (popup.classList.contains('popup--active')) {
        popup.classList.remove('popup--active');
        body.classList.remove('_locked');
    }
}