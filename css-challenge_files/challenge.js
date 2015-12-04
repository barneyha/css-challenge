$(document).ready(function() { 
    $('i').mouseenter(function() { 
        $('i').fadeTo('fast', 1); 
    }); 
    $('i').mouseleave(function() { 
        $('i').fadeTo('fast',0.5); 
    }); 
}); 
