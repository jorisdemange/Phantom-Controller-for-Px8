///// SLIDE 1
var tl = gsap.timeline({ defaults: { duration: 1.2 }, delay: 1.7 });

tl.from(".anim-nav1", { opacity: 0, scale: 0.9 });
tl.from(".anim-prodname", { opacity: 0, y: 30 }, 0);
tl.from(
  ".anim-prodname",
  { textFillColor: "#000000", duration: 1.5, delay: 0.3 },
  0
);
tl.from(".anim-nav2", { opacity: 0 }, "-=.5");

///// SLIDE 2

// Switch .active class on click
var slides = ".slider .slide";
var amountOfSlides = $(slides).length;

function openSlide(el) {
  if (typeof tlprogress !== "undefined") {
    tlprogress.kill();
  }
  $(slides).removeClass("active");
  $(el).addClass("active");
  tlprogress = gsap.timeline({
    defaults: { duration: 5 },
    delay: 0.2,
    onComplete: gotoNext,
  });
  tlprogress.fromTo(
    $(el).find(".progress-value"),
    { height: "0%" },
    { height: "100%", ease: "none" }
  );
}

function gotoNext() {
  let activeSlide = ".slider .active";
  var indexActiveSlide = $(slides).index($(activeSlide));
  if (indexActiveSlide + 1 < amountOfSlides) {
    // Go to next
    openSlide($(activeSlide).next());
  } else {
    // go to first
    openSlide($(activeSlide).siblings().first());
  }
}

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

ScrollTrigger.create({
  markers: true,
  scroller: "main",
  trigger: ".slider",
  onEnter: openSlide($(".slider .slide:first-of-type")),
  //  onEnter: () => "#video2".play(),
});
