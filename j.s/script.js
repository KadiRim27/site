var navMobile = $('.nav-dotapsnu'),
    navMenu = $('.gatuvam-stamaned');

navMobile.on('click', function () {
    var $this = $(this);

    $this.toggleClass('nav-samilopad');
    navMenu.toggleClass('open-kitutgcalam');
});