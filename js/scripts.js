const employees = [ "Adam Szymanski", "Łukasz Bondyra"]


/*Add name employee*/
document.getElementById("employees").innerHTML = employees[0];
/************************************************************/

/*Hamburger click*/
const hamburger = document.querySelector('.hamburger');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

hamburger.addEventListener('click', handleClick);
/*********************************************** */