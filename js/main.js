
// inizio swup

const swup = new Swup({

plugins: [new SwupFadeTheme()]

});


// parallax background image 

$('.bg-parallax').paroller();


// custom cursor

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// gsap stagger intro elements

gsap.from(".intro-effect", { duration: .8, translateY: 140, opacity: 0, stagger: 0.1, ease: "cubic-bezier(0.76, 0, 0.24, 1)" });


// navbar hide on scroll


const showAnim = gsap.from('#nav', {
    yPercent: -150,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});


// animation text with gsap

// let addAnimation = function () {
//  $(".skew-up").each(function (index) {
//    const text = new SplitType($(this), {
//      types: "lines, words",
//      lineClass: "word-line"
//    }); 

//    let textInstance = $(this);
//    let line = textInstance.find(".word-line");
//    let word = line.find(".word");

//    let tl = gsap.timeline({
//      scrollTrigger: {
//        trigger: textInstance,
//        start: "top 85%",
//        end: "top 85%",
//        onComplete: function () {
//          $(textInstance).removeClass("skew-up");
//        }
//      }
//    });   

//     tl.set(textInstance, { opacity: 1 }).from(word, {
//      y: "100%",
//      skewX: "-6",
//      duration: 2,
//      stagger: 0.03,
//      ease: "expo.out"
//    });
//  });
// };

//  addAnimation();
//  window.addEventListener("resize", function (event) {
//  addAnimation();
// });




// animation text with gsap

const quotes = document.querySelectorAll(".text-effect");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();


const lines = document.querySelectorAll(".lines-up");

function setupLines() {
  lines.forEach(line => {
    // Reset if needed
    if(line.anim) {
      line.anim.progress(1).kill();
      line.split.revert();
    }

    line.split = new SplitText(line, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    line.anim = gsap.from(line.split.lines, {
      scrollTrigger: {
        trigger: line,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.2,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupLines);
setupLines();






// smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// parallax image 

const images = document.querySelectorAll(".immagine_parallax");
// You can do the loop in any way you like.
images.forEach(image => {
  new Ukiyo(image, {
    speed: 2,
    scale: 1.25
  });
});


// start swup reload page scripts and effects

document.addEventListener('swup:contentReplaced', (event) => {
  // do something when content is replaced
  


  // parallax background image 
  $('.bg-parallax').paroller();
  


  // custom cursor
  var cursor = document.querySelector('.cursor');
  var cursorinner = document.querySelector('.cursor2');
  var a = document.querySelectorAll('a');

  document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

 document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
 });

 document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
 });

 document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
 });

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
  

  // text animation with gsap

const quotes = document.querySelectorAll(".text-effect");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();


const lines = document.querySelectorAll(".lines-up");

function setupLines() {
  lines.forEach(line => {
    // Reset if needed
    if(line.anim) {
      line.anim.progress(1).kill();
      line.split.revert();
    }

    line.split = new SplitText(line, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    line.anim = gsap.from(line.split.lines, {
      scrollTrigger: {
        trigger: line,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.2,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupLines);
setupLines();



//   let addAnimation = function () {
//    $(".skew-up").each(function (index) {
//    const text = new SplitType($(this), {
//      types: "lines, words",
//      lineClass: "word-line"
//    });    let textInstance = $(this);
//    let line = textInstance.find(".word-line");
//    let word = line.find(".word");
//    let tl = gsap.timeline({
//      scrollTrigger: {
//        trigger: textInstance,
//        start: "top 85%",
//        end: "top 85%",
//        onComplete: function () {
//          $(textInstance).removeClass("skew-up");
//        }
//      }
//    });

//     tl.set(textInstance, { opacity: 1 }).from(word, {
//      y: "100%",
//      skewX: "-6",
//      duration: 2,
//      stagger: 0.03,
//      ease: "expo.out"
//    });
//  });
// };
// addAnimation();window.addEventListener("resize", function (event) {
//  addAnimation();
// });
  
    // Reinitialize webflow modules
      Webflow.destroy();
      Webflow.ready();
      Webflow.require('ix2').init();
  

   // navbar hide on scroll
  const showAnim = gsap.from('#nav', {
    yPercent: -150,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});



 // parallax image
  window.scrollTo(0, 0);
  const images = document.querySelectorAll(".immagine_parallax");
// You can do the loop in any way you like.
images.forEach(image => {
  new Ukiyo(image, {
    speed: 2,
    scale: 1.25
  });
});
});
