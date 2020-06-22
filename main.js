window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use

  var scrollY = window.scrollY || document.documentElement.scrollTop,
    scrollTargetY = scrollTargetY || 0,
    speed = speed || 2000,
    easing = easing || "easeOutSine",
    currentTime = 0;

  // min time .1, max time .8 seconds
  var time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  );

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  var easingEquations = {
    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2);
    },
  };

  // add animation loop
  function tick() {
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
      requestAnimFrame(tick);

      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
    } else {
      console.log("scroll done");
      window.scrollTo(0, scrollTargetY);
    }
  }

  // call it once to get started
  tick();
}

const scrollDown = () => {
  const divOffset = document.querySelector(".relative-contact").offsetTop;
  scrollToY(divOffset, 1500, "easeInOutQuint");
};
// scroll it!
const scrollDownMore = () => {
  const divOffset = document.querySelector(".tabs").offsetTop;
  scrollToY(divOffset, 1500, "easeInOutQuint");
};
// scroll it!

document
  .querySelectorAll(".signup")
  .forEach((form) => form.addEventListener("click", scrollDown));
document
  .querySelectorAll(".more")
  .forEach((form) => form.addEventListener("click", scrollDownMore));

// const checkScroll = () => {
//   const scrollHeight = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const stickyMenu = document.querySelector(".stickyMenu");
//   if (scrollHeight > 0.33 * windowHeight) {
//     stickyMenu.classList.add("active");
//   } else {
//     stickyMenu.classList.remove("active");
//   }
// };
// window.addEventListener("scroll", checkScroll);

// const checkWidth = () => {
//   if (window.innerWidth < 575.98) {
//     document.querySelector(".signup").innerHTML = "Przetestuj";
//   } else {
//     document.querySelector(".signup").innerHTML =
//       "Zapisz się na wczesny dostęp";
//   }
// };
// checkWidth();
// window.addEventListener("resize", checkWidth);
