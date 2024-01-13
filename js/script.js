/* ========== typing animation========*/
var typed = new Typed(".typing",{
    strings:["Web Desinger","Technical Trainer","Programer"],
    typeSpeed:50,
    backSpeed:20,
    loop:true
})

$(document).ready(function() {
    $('.nav li a').click(function() {
        $('.nav li a').removeClass('active');
        $(this).addClass('active');
    });
});


