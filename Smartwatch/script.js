window.onscroll = function() {myfunction()};

var navBar = document.getElementById('navbar');
var sticky = navBar.offsetTop;

function myfunction(){
    if(window.pageYOffset >=sticky){
        navBar.classList.add('sticky');

    }
    else{
        navBar.classList.remove("sticky");
    }
}
