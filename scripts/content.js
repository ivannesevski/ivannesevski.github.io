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
  
  if ($(upSel).is(':hidden')) {
    $(btnSel).hover(
      function() {
        $(btnSel).css("background", "rgba(208,208,208,0.5)");
        $(downSel).show();
      }, 
      function() {
        $(btnSel).css("background", "rgba(90,50,50,0.2)");
        $(downSel).hide();
      }
    );
  }
  else {
    $(btnSel).hover(
      function() {
        $(btnSel).css("background", "rgba(208,208,208,0.5)");
        $(downSel).hide();
      }, 
      function() {
        $(btnSel).css("background", "rgba(90,50,50,0.2)");
        $(downSel).hide();
      }
    );
  }
  
}

$(document).ready(function() {
  $('.about-content').hide();
  $('.contact-content').hide();
  $('.about-up').hide();
  $('.about-down').hide();
  $('.contact-up').hide();
  $('.contact-down').hide();

  $('.about-btn').hover(
    function() {
      $('.about-btn').css("background", "rgba(208,208,208,0.5)");
      $('.about-down').show();
    }, 
    function() {
      $('.about-btn').css("background", "rgba(90,50,50,0.2)");
      $('.about-down').hide();
    }
  );
  
  $('.contact-btn').hover(
    function() {
      $('.contact-btn').css("background", "rgba(208,208,208,0.5)");
      $('.contact-down').show();
    }, 
    function() {
      $('.contact-btn').css("background", "rgba(90,50,50,0.2)");
      $('.contact-down').hide();
    }
  );
    
  $('.about-btn').click({selector: '.about-'}, showHideContent);
  $('.contact-btn').click({selector: '.contact-'}, showHideContent);
});
