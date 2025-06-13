const boxs = document.querySelectorAll('.box');
const body = document.querySelector('body')
boxs.forEach(function (box){
    box.addEventListener('click',function(e){
        if(e.target.id === "orange"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
    })
});