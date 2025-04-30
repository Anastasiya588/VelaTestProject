document.addEventListener('DOMContentLoaded', function () {
    const catalogItems = document.querySelectorAll('.toggle__catalog .catalog__item-details');
    const toggleCatalog = document.getElementById('toggle__catalog');
    const presentCatalog = document.getElementById('present__catalog');
    const searchToggle = document.getElementById('header__search-toggle');
    const searchToggleMobile = document.getElementById('header__search-toggle-mobile');
    const presentItem = document.getElementById('presents__item');
    const presentItemText = presentItem.querySelector('.menu__text');
    const eventsItem = document.getElementById('event__item');
    const eventsItemText = eventsItem.querySelector('.menu__text');
    const events = document.getElementById('events');
    const close = document.querySelector('.close');
    const open = document.querySelector('.open');
    const menuMobile = document.querySelector('.header__main-mobile .menu');
    const menuMobileCatalog = document.querySelector('.header__main-mobile .main__mobile-catalog');
    const detailsMobile = document.querySelector('.header__main-mobile .details-mobile-items');
    const backArrow = document.querySelector('.back-arrow');
    const backArrowPhone = document.querySelectorAll('.back-arrow-phone');
    const menuCatalogAll = document.getElementById('menuCatalogAll');
    const phones = document.getElementById('phones');

    const headerTop = document.querySelector('.header__top');
    const headerMain = document.querySelector('.header__main');
    const headerMainMobile = document.querySelector('.header__main-mobile');
    const header = document.querySelector('.header');
    let lastScroll = 0;
    const headerHeight = 150;
    const headerTopHeight = 35;
    const threshold = 10;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= threshold) {
            headerTop.style.transform = 'translateY(0)';
            headerMain.style.transform = 'translateY(0)';
            headerMainMobile.style.transform = 'translateY(0)';
            header.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll) {
            headerTop.style.transform = `translateY(-${headerTopHeight}px)`;
            headerMain.style.transform = `translateY(-${headerTopHeight}px)`;
            headerMainMobile.style.transform = `translateY(-${headerTopHeight}px)`;
            header.style.transform = 'translateY(0)';
        } else {
            headerTop.style.transform = 'translateY(0)';
            headerMain.style.transform = 'translateY(0)';
            headerMainMobile.style.transform = 'translateY(0)';
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    toggleCatalog.style.display = 'none';
    presentCatalog.style.display = 'none';
    events.style.display = 'none';
    menuMobile.style.display = "none";
    menuMobileCatalog.style.display = "none";
    detailsMobile.style.display = "none";

    eventsItem.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (events.style.display === 'none') {
            events.style.display = 'flex';
            presentCatalog.style.display = 'none';
            toggleCatalog.style.display = 'none';
            eventsItemText.style.color = "#4888FF";
            presentItemText.style.color = "";
        } else {
            events.style.display = 'none';
            eventsItemText.style.color = "";
        }
    });

    searchToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (toggleCatalog.style.display === 'none') {
            toggleCatalog.style.display = 'flex';
            presentCatalog.style.display = 'none';
            events.style.display = 'none';
        } else {
            toggleCatalog.style.display = 'none';
        }
    });

    searchToggleMobile.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (menuMobile.style.display === "none" || !menuMobile.style.display) {
            searchToggleMobile.querySelector('.open').style.display = "none";
            searchToggleMobile.querySelector('.close').style.display = "block";
            searchToggleMobile.style.backgroundColor = "#E8E8E8";
            menuMobile.style.display = "block";
            menuMobileCatalog.style.display = "none";
            detailsMobile.style.display = "none";
        } else {
            searchToggleMobile.querySelector('.open').style.display = "block";
            searchToggleMobile.querySelector('.close').style.display = "none";
            searchToggleMobile.style.backgroundColor = "";
            menuMobile.style.display = "none";
            menuMobileCatalog.style.display = "none";
            detailsMobile.style.display = "none";
        }
    });

    menuCatalogAll.addEventListener('click', function () {
        menuMobile.style.display = "none";
        menuMobileCatalog.style.display = "block";
    });

    phones.addEventListener('click', function () {
        menuMobile.style.display = "none";
        menuMobileCatalog.style.display = "none";
        detailsMobile.style.display = "block";

    });

    backArrow.addEventListener('click', function () {
        menuMobileCatalog.style.display = "none";
        menuMobile.style.display = "block";
    });
    backArrowPhone.forEach(item => {
        item.addEventListener('click', function () {
            menuMobileCatalog.style.display = "none";
            menuMobile.style.display = "none";
            detailsMobile.style.display = "none";
            menuMobileCatalog.style.display = "block";
        });
    })


    presentItem.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        presentCatalog.style.display = 'flex';
        toggleCatalog.style.display = 'none';
        events.style.display = 'none';
        if (presentCatalog.style.display = 'flex') {
            presentItemText.style.color = "#4888FF";
            eventsItemText.style.color = "";
        } else {
            presentItemText.style.color = "";
        }
    });

    catalogItems.forEach(item => {
        item.addEventListener('click', function () {
            catalogItems.forEach(i => {
                i.classList.remove('catalog__item-active');
            });

            this.classList.add('catalog__item-active');

            const category = this.dataset.category;

            document.querySelectorAll('.catalog__details-mobile').forEach(menu => {
                menu.classList.remove('catalog__details-mobile-active');
            });

            if (category) {
                const targetMenu = document.querySelector(`.catalog__details-mobile-${category}`);
                if (targetMenu) {
                    targetMenu.classList.add('catalog__details-mobile-active');
                }
            }

            if (category === 'smartphones') {
                toggleCatalog.style.width = '892px';
            } else {
                toggleCatalog.style.width = '338px';
            }
        });
    });

    const giftItems = document.querySelectorAll('.present__catalog .catalog__item');
    giftItems.forEach(item => {
        item.addEventListener('click', function () {
            giftItems.forEach(i => {
                i.classList.remove('catalog__item-active');
            });

            this.classList.add('catalog__item-active');

            const category = this.dataset.category;

            document.querySelectorAll('.catalog__details-whom').forEach(menu => {
                menu.classList.remove('catalog__details-whom-active');
            });

            if (category) {
                const targetMenu = document.querySelector(`.catalog__details-present-${category}`);
                if (targetMenu) {
                    targetMenu.classList.add('catalog__details-whom-active');
                }
            }

            if (category === 'whom') {
                presentCatalog.style.width = '757px';
            } else {
                presentCatalog.style.width = '338px';
            }
        });
    });

    const defaultItem = document.querySelector('.catalog__item-details[data-category="smartphones"]');
    if (defaultItem) {
        defaultItem.click();
    }

    const defaultItemGift = document.querySelector('.catalog__item-details[data-category="whom"]');
    if (defaultItemGift && !window.location.hash) {
        defaultItemGift.click();
        presentCatalog.style.display = 'none';
        presentItemText.style.color = "";
    }

    document.addEventListener('click', function (e) {
        if (!toggleCatalog.contains(e.target) && !presentCatalog.contains(e.target) && !events.contains(e.target)) {
            toggleCatalog.style.display = 'none';
            presentCatalog.style.display = 'none';
            events.style.display = 'none';

            if (presentItemText) presentItemText.style.color = "";
            if (eventsItemText) eventsItemText.style.color = "";
        }
    });
});