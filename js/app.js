window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (this.scrollY > 20){
  document.querySelector(".navber").classList.add("sticks");
  } else {
      document.querySelector(".navber").classList.remove("sticks");
  }

};

//slide-up script


//typing animation script

    var typed = new Typed(".typing", {
       strings: ["Developer", "Designer", "Freelancer"],
       typeSpeed: 100,
        backSpeed: 60,
         loop: true
        });
        var typed = new Typed(".typing-2", {
           strings: ["Developer", "Designer", "Freelancer"],
           typeSpeed: 100,
            backSpeed: 60,
             loop: true
            });
