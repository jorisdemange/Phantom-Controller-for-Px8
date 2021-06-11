///// NAVIGATION

var languages = ".languages li";

$(languages).click(function () {
  $(languages).removeClass("active");
  $(this).addClass("active");
});

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

// Animating the carousel
var slides = ".slider .slide";
var amountOfSlides = $(slides).length;

const openSlide = function (el) {
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
};

const gotoNext = function () {
  let activeSlide = ".slider .active";
  var indexActiveSlide = $(slides).index($(activeSlide));
  if (indexActiveSlide + 1 < amountOfSlides) {
    openSlide($(activeSlide).next());
  } else {
    openSlide($(activeSlide).siblings().first());
  }
};

// Starting the video and carousel when entering the viewport
ScrollTrigger.create({
  scroller: "main",
  trigger: "#description",
  start: "top 20%",
  onToggle: () => {
    openSlide($(".slider .slide:first-of-type"));
    $("#video2").get(0).play();
  },
  once: true,
});
