const hamburgerMenu = document.getElementById('hamburgermenu')
const menuClose = document.getElementById('menuclose')
const navMenu = document.querySelector('.navmenu');
const parentContainer = document.querySelector('.read-more-container');

hamburgerMenu.addEventListener("click",  () => {
    hamburgerMenu.style.display = 'none';
    menuClose.style.display = 'inline-block';
    navMenu.classList.toggle('active');
});


menuClose.addEventListener("click",  () => {
    menuClose.style.display = 'none';
    hamburgerMenu.style.display = 'inline-block';
    navMenu.classList.toggle('active');
});


window.onscroll = () =>{
    hamburgerMenu.style.display = null;
    menuClose.style.display = null;
    navMenu.classList.remove("active");    
}



parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})





