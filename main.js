let btn= document.querySelector('#hamburger');

btn.addEventListener('clicked', function(event){
    let my_show=document.querySelector('ul.mob_menu');
    my_show.classList.toggle('.show');
    
})