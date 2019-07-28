window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myP").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    } else {
        document.getElementById("myP").className = "navbar navbar-expand-lg navbar-dark bg-transparent";
    }
}






function road() {

    document.getElementById("myP").className = "navbar navbar-expand-lg navbar-dark bg-dark";

};