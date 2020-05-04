function loop(){
    $('.title-level').html('LEVEL 1');
    
    $(document).on('keyup', action);
    
    $(document).on('keydown', move);
}