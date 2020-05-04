$('#start-game').on('click', ()=>{
    mode = 1;
    $('.instructions').css('top', '-1000px');
    $('#start-game').css('top', '-1000px');
    loop();
})

$(document).on('keyup', function(key){
    if (key.keyCode == 13) {     
        mode = 1;
        $('.instructions').css('top', '-1000px');
        $('#start-game').css('top', '-1000px');
        loop();
    }
})