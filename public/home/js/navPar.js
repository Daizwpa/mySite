document.addEventListener('DOMContentLoaded', (event)=>{
    var header = document.querySelector('header');
    var a = document.querySelectorAll('.x');

    window.onscroll = function(data){
        console.log(data.target.scrollTop)
        if(window.scrollY > 50){
            header.classList.add('new-header-style')
            a.forEach(function (item) { 
                item.classList.remove('nav-bar-a');
                item.classList.add('nav-bar-a-new');
                
            });
            
        }else{
            header.classList.remove('new-header-style');
            a.forEach(function (item) { 
                item.classList.remove('nav-bar-a-new');
                item.classList.add('nav-bar-a');
                
            });
           
        }
    }
})