let navigation = document.getElementById('navigation');
let navLinks = navigation.getElementsByClassName('navigation__link');
let naviToggle = document.getElementById('navi-toggle');

for (let item of navLinks) {
    item.addEventListener('click', function () {
        naviToggle.checked = false;
    });
}
