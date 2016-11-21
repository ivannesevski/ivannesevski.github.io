'use strict';

function showHideContent(event) {
  var selector = event.data.selector;
  var contentSel = selector + 'content';
  var btnSel = selector + 'btn';
  var upSel = selector + 'up';
  var downSel = selector + 'down';
  
  $(contentSel).slideToggle("fast");
  $(upSel).toggle();
  $(downSel).toggle();
  $(downSel).css("opacity", "1");
  
  if ($(upSel).is(':hidden')) {
    $(btnSel).hover(
      function() {
        $(btnSel).css("background", "rgba(208,208,208,0.5)");
        $(downSel).css("opacity", "1");
      }, 
      function() {
        $(btnSel).css("background", "rgba(90,50,50,0.2)");
        $(downSel).css("opacity", "0");
      }
    );
  }
  else {
    $(btnSel).hover(
      function() {
        $(btnSel).css("background", "rgba(208,208,208,0.5)");
        $(downSel).css("opacity", "0");
      }, 
      function() {
        $(btnSel).css("background", "rgba(90,50,50,0.2)");
        $(downSel).css("opacity", "0");
      }
    );
  }
  
}

$(document).ready(function() {
  $('.about-content').hide();
  $('.contact-content').hide();
  $('.about-up').hide();
  $('.contact-up').hide();
  $('.about-down').show();
  $('.contact-down').show();

  $('.about-btn').hover(
    function() {
      $('.about-btn').css("background", "rgba(208,208,208,0.5)");
      $('.about-down').css("opacity", "1");
    }, 
    function() {
      $('.about-btn').css("background", "rgba(90,50,50,0.2)");
      $('.about-down').css("opacity", "0");
    }
  );
  
  $('.contact-btn').hover(
    function() {
      $('.contact-btn').css("background", "rgba(208,208,208,0.5)");
      $('.contact-down').css("opacity", "1");
    }, 
    function() {
      $('.contact-btn').css("background", "rgba(90,50,50,0.2)");
      $('.contact-down').css("opacity", "0");
    }
  );
    
  $('.about-btn').click({selector: '.about-'}, showHideContent);
  $('.contact-btn').click({selector: '.contact-'}, showHideContent);
});
