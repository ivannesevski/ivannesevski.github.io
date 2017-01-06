'use strict';

function showHideContent(event) {
  var selector = event.data.selector;
  var content = selector + 'content';
  var btn = selector + 'btn';
  var lArrow = selector + 'lArrow';
  var rArrow = selector + 'rArrow';
    
  $(content).slideToggle(300);
  $(lArrow).toggleClass("rotate-left");
  $(rArrow).toggleClass("rotate-right");
  
  if (!$(lArrow).hasClass("rotate-left")) {
    $(btn).hover(
      function() {
        $(btn).css("background", "rgba(208,208,208,0.5)");
        $(lArrow).css("opacity", "1");
        $(rArrow).css("opacity", "1");
      }, 
      function() {
        $(btn).css("background", "rgba(90,50,50,0.2)");
        $(lArrow).css("opacity", "0");
        $(rArrow).css("opacity", "0");
      }
    );
  }
  else {
    $(btn).hover(
      function() {
        $(btn).css("background", "rgba(208,208,208,0.5)");
        $(lArrow).css("opacity", "1");
        $(rArrow).css("opacity", "1");
      }, 
      function() {
        $(btn).css("background", "rgba(90,50,50,0.2)");
        $(lArrow).css("opacity", "1");
        $(rArrow).css("opacity", "1");
      }
    );
  }
  
}

$(document).ready(function() {
  $('.about-content').hide();
  $('.contact-content').hide();

  $('.about-btn').hover(
    function() {
      $('.about-btn').css("background", "rgba(208,208,208,0.5)");
      $('.about-lArrow').css("opacity", "1");
      $('.about-rArrow').css("opacity", "1");
    }, 
    function() {
      $('.about-btn').css("background", "rgba(90,50,50,0.2)");
      $('.about-lArrow').css("opacity", "0");
      $('.about-rArrow').css("opacity", "0");
    }
  );
  
  $('.contact-btn').hover(
    function() {
      $('.contact-btn').css("background", "rgba(208,208,208,0.5)");
      $('.contact-lArrow').css("opacity", "1");
      $('.contact-rArrow').css("opacity", "1");
    }, 
    function() {
      $('.contact-btn').css("background", "rgba(90,50,50,0.2)");
      $('.contact-lArrow').css("opacity", "0");
      $('.contact-rArrow').css("opacity", "0");
    }
  );
    
  $('.about-btn').click({selector: '.about-'}, showHideContent);
  $('.contact-btn').click({selector: '.contact-'}, showHideContent);
});
