// Banner Text Animation JS Start

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('ΚρατήσειςΕλλάδα')

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
