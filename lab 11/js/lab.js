//*
// Author: heidy barrios
// date: March 14, 2021
// Public Domain
//*

$(document).ready(function() { // Choose document
  $('#challenge, #problems, #results').append( // Add buttons to each div w/ ID
    // Button creation
    $(document.createElement('button')).prop({
      type: 'button',
      innerHTML: 'Press here'
    })
  );
  // Toggle hide() show() div of class special
  $('#challenge button').click(function(){
    $('#challenge .special').toggle();
    $('#challenge button').css('background-color', 'white'); // BONUS TASK
    $('#problems button').css('background-color','purple'); // BONUS TASk
  })
  $('#problems button').click(function(){
    $('#problems .special').toggle();
    $('#problems button').css('background-color', 'white'); // BONUS TASK
    $('#challenge button').css('background-color','purple'); // BONUS TASK
  })
  $('#results button').click(function(){
    $('#results .special').toggle();
  })
});
