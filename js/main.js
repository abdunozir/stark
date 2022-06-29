
let elopenmodalbtn = document.getElementById('btn-modal-connect');
let elclosemodalbtn = document.getElementById('btn-close-modal');
let elmodalwindow=document.getElementById('box-modal');

elopenmodalbtn.addEventListener('click', function(){
    console.log('one');
    elmodalwindow.classList.add('show');
});

elclosemodalbtn.addEventListener('click', function (){
    elmodalwindow.classList.remove('show');
});



let openelement = document.getElementById('btn-modal-register');
let closeelement = document.getElementById('btn-register-close');
let modalwindow=document.getElementById('modal-register');

openelement.addEventListener('click', function(){
    console.log('one');
    modalwindow.classList.add('show');
});

closeelement.addEventListener('click', function (){
    modalwindow.classList.remove('show');
});