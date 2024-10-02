const dark = document.getElementById('dark');
const card = document.getElementById('card');
const bulat = document.getElementById('bulat');
const lojin = document.getElementById('text-login');

dark.addEventListener('click', function(){
    if(this.classList.toggle('latar-card')){
        card.style.background = 'rgb(25, 25, 25)';
        card.style.background ='white';
        card.style.transition = '0.5s';
        lojin.style.color = 'white';
        lojin.style.color = 'black';
        
    } else{
        card.style.background = 'white';
        card.style.background = 'rgb(25, 25, 25)';
        card.style.transition = '0.5s';
        lojin.style.color = 'black';
        lojin.style.color = 'white';
    }


})