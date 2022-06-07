 /*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//chnage text login
function logintext(){
    var firstname = document.getElementById("exampleFirstName").value; 
    var lastname = document.getElementById("exampleLastName").value;
    if(firstname != null || lastname != null){
        sessionStorage.setItem("Name", firstname + " " + lastname);
        sessionStorage.setItem("ref", "Pessoa.html");
    }
}

function logintext(){
    var firstname = document.getElementById("exampleFirstName").value; 
    var lastname = document.getElementById("exampleLastName").value;
    var pass = document.getElementById("exampleInputPassword").value;
    if(firstname != null || lastname != null){
        sessionStorage.setItem("Name", firstname + " " + lastname);
        sessionStorage.setItem("ref", "Pessoa.html");
        sessionStorage.setItem("Pass", pass);
    }
}

//Log out clear people
function logOut(){
    sessionStorage.clear();
}

//Login
function Login(){
    var user = document.getElementById("exampleInputName").value;
    var pass = document.getElementById("exampleInputPassword").value;
    if(!(sessionStorage.getItem("Name").localeCompare(user) && sessionStorage.getItem("Name").localeCompare(pass)))
        alert("incorrect");
    else
        alert("correct");
}

//default for login
if(sessionStorage.length == 0){
    sessionStorage.setItem("ref", "login.html");
    sessionStorage.setItem("Name", "Login");
}

//changes inf of person
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("navlogin").innerHTML= sessionStorage.getItem("Name"); 
    document.getElementById("navlogin").href= sessionStorage.getItem("ref");
    document.getElementById("name_pessoa").innerHTML= sessionStorage.getItem("Name"); 
}, false);



