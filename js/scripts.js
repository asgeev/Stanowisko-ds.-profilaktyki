
const employees = [ "Adam Szymanski", "Łukasz Bondyra"]


/*Add name employee*/
document.getElementById("employees").innerHTML = employees[0];
/************************************************************/



/*Hamburger click
const hamburger = document.querySelector('.hamburger');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

hamburger.addEventListener('click', handleClick);
/*********************************************** */

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

const menuHandleClick = () => {
    menu.classList.toggle('menu--active'); 
}
hamburger.addEventListener('click', menuHandleClick);




const button = document.querySelector('.close');

const menuClose = () =>{
    menu.classList.remove('menu--active');
}

button.addEventListener('click', menuClose);


