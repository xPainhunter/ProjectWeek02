// submit data
function contButt(){
	alert("Your data has been submitted.");
}

// language options
var french = document.getElementById('fr_click'),
    english = document.getElementById('en_click'),
    fr_txt = document.querySelectorAll('#fr'),
    en_txt = document.querySelectorAll('#en'),
    nb_fr = fr_txt.length,
    nb_en = en_txt.length;

french.addEventListener('click', function() {
    langue(french,english);
}, false);

english.addEventListener('click', function() {
    langue(english,french);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'Fr'){
        afficher(fr_txt, nb_fr);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(french,english);
}
init();