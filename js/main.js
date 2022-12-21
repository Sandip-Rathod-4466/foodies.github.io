$(document).ready(function(){

    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increament = end > start ? 1 : -1,
        step =Math.abs(Math.floor(duration / range)),
        timer = setInterval(function(){
            current += increament;
            obj.textContent = current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }

    counter("count1",0,5498,5000)
    counter("count2",1000,3298,2000)
    counter("count3",0,3465,4000)
    counter("count4",0,5678,1000)
});




$(window).scroll(function(){

   let scrollTop = $(window).scrollTop();
   if(scrollTop > 20){
       $('#navigation').addClass("scroll-on")
   }else{
       $("#navigation").removeClass("scroll-on")
   }
   
})







$(".nav-link").each(function(){
    $(this).click(function(){
        $('#navbarText').removeClass('show')
    })
})
