// esercizio menù hamburger
// far comparire il menù hamburger. (mostrare e nascondere).

//Mostrare menù hamburger
$('div.header-right a i').click(function () { 
    $('div.hamburger-menu').fadeIn();
});
$('div.hamburger-menu a i').click(function () { 
    $('div.hamburger-menu').fadeOut();
});