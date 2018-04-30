const hamburger = document.getElementById('ham');

let flag = 0;
hamburger.addEventListener("click",function(){
    if(flag == 1){
        document.getElementById('nav').style.top = "-40"+"%";
        flag = 0;
    } else {
        document.getElementById('nav').style.top = "0";
        flag = 1;
    }
});

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if(scroll >= 300){
        document.getElementById('menu').classList.add('shadow');
        console.log(scroll);
    } else {
        document.getElementById('menu').classList.remove('shadow');
    }
});
