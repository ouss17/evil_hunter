let position = 15;
let mode;
function move(key) {

    if ($('#sword').attr('src') === "") {
        $('#sword').css('display', 'none');
    } else {
        $('#sword').css('display', 'inline');
    }
    switch (key.keyCode) {
        case 39:
            console.log('avance');
            $('#mc').attr('src', 'ressources/images/characters/perso_reverse.png');
            if (position >= 855 && mode !== 0) {
                position = 0;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            } else {
                position += 15;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            }
            break;
        case 37:
            console.log('recule');
            console.log($('#mc').css('left'));
            $('#mc').attr('src', 'ressources/images/characters/perso.png');
            if (position <= 0) {
                position = 0;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            } else {
                position -= 15;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            }
            break;
        case 68:
            console.log('super avance');
            $('#mc').attr('src', 'ressources/images/characters/perso_reverse.png');
            if (position >= 855 && mode !== 0) {
                position = 0;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            } else {
                position += 45;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            }
            break;
        case 81:
            console.log('super recule');
            $('#mc').attr('src', 'ressources/images/characters/perso.png');
            console.log($('#mc').css('left'));
            if (position <= 0) {
                position = 0;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            } else {
                position -= 45;
                $('#mc').css('left', position + 'px');
                $('#skate').css('left', position + 'px');
            }
            break;
        case 38:
            console.log('saute');
            $('#mc').removeClass('animation');
            $('#skate').removeClass('animation');
            break;
        case 32:
            console.log('sword');
            $('#sword').removeClass('sword-animation');
            break;
    }
}

function action(key) {
    if (key.keyCode === 38) {
        $('#mc').addClass('animation');
        $('#skate').addClass('animation');
    } else if (key.keyCode === 32) {
        console.log('sword');
        $('#sword').attr('src', 'ressources/images/weapons/sword.png');
        $('#sword').addClass('sword-animation');
    }
}

let niveaux = [
    { level: 1, background: 'ressources/background/background_night.jpg', title: 'LEVEL 1' },
    { level: 2, background: 'ressources/background/background_boss.jpg', title: 'LEVEL 2' },
    { level: 3, background: 'ressources/background/background_prenight.jpg', title: 'LEVEL 3' }
]

for (let i = 0; i < niveaux.length; i++) {
    if (niveaux[i].level === 1) {
        $('.title-level').html(niveaux[0].title);
        $('#myCanvas').css("background-image", "url("+niveaux[0].background+")");
    } else if (niveaux[i].level === 2) {
        $('.title-level').html(niveaux[1].title);
        $('#myCanvas').css("background-image", "url("+niveaux[1].background+")");
    } else {
        $('.title-level').html(niveaux[2].title);
        $('#myCanvas').css("background-image", "url("+niveaux[2].background+")");
    }
}