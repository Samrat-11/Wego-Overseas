(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 5,
    //     time: 2000
    // });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);

/*===== Contact form =====*/
let contactMeForm = document.getElementById("contactMeForm");

contactMeForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Get form values
  const name = contactMeForm.elements['name'].value;
  const email = contactMeForm.elements['email'].value;
  const phone = contactMeForm.elements['phone'].value;
  const project = contactMeForm.elements['project'].value;
  const subject = contactMeForm.elements['subject'].value;
  const message = contactMeForm.elements['message'].value;

  // Format the message
  let messageText = `Hi, I'm ${name} and my email address is ${email}.`;
  if (phone) {
    messageText += ` My phone number is ${phone}.`;
  }
  if (project) {
    messageText += ` I would like to discuss with you regarding a visa and its details are as follows:\n ${project}.`;
  }
  if (subject) {
    messageText += `\n Subject: ${subject}.`;
  }
  if (message) {
    messageText += `\n Also, please find my comments as follows:\n ${message}`;
  }

  // Encode the message for the URL
  const encodedText = encodeURIComponent(messageText);

  // Replace with your WhatsApp number (with country code)
  const whatsappNumber = "+918247634398"; // Example WhatsApp number

  // Create the WhatsApp URL
  const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Open the URL in a new tab
  window.open(url, '_blank');
});
