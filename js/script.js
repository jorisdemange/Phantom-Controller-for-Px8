// SLIDE 1
var tl = gsap.timeline({defaults:{duration: 1.2}, delay: 1.7});

tl.from('.anim-nav1', {opacity: 0, scale: 0.9});
tl.from('.anim-prodname', {opacity: 0, y: 30}, 0);
tl.from('.anim-prodname', {textFillColor: '#000000', duration: 1.5, delay: 0.3}, 0)
tl.from('.anim-nav2', {opacity: 0}, '-=.5')

// SLIDE 2

/* Second video plays only when entering the viewport. 
Conflict with jQuery, to debug

$('#video2').each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
        $(this)[0].currentTime = 0;
        $(this)[0].load();
    }
})
*/

// Switch .active class on click
var selector = '.slider .slide';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

