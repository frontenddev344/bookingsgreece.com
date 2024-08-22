
  // Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed-header", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End


// Banner Text Animation JS Start

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Κρατήσεις Ελλάδα')
    .start();

// Banner Text Animation JS End

  // Read More Functionality JS Start

  $('.subpage-readmore-btn').click(function (e) {
    e.preventDefault();
    // console.log('click');
    $(this).parent().prev().slideToggle('slow');
    // $('.subpage-exp-content').slideToggle('slow');
    $(this).text($(this).text() == 'Διαβάστε Λιγότερα' ? 'Διαβάστε περισσότερα' : 'Διαβάστε Λιγότερα');
  });
  
  // Read More Functionality JS end

// AOS JS Start

AOS.init();

// AOS JS End

//Cookies JS Start
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);

// //Cookies JS Start




