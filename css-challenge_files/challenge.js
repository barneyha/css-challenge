$(document).ready(function() { 
    $('.fa fa-twitter').mouseenter(function() { 
        $('.fa fa-twitter').hide; 
    }); 
    $('.fa fa-twitter').mouseleave(function() { 
        $('.fa fa-twitter').fadeTo('fast',0.5); 
    }); 
}); 
