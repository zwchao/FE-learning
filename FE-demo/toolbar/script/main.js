requirejs.config({
    paths:{
        jquery:'jquery-3.2.0'
    }
});
requirejs(['jquery','backtop'],function($,backtop){
    
    new backtop.BackTop($("#backtop"),{
        mode:"go",
    });


   /* var scroll = new scrollto.ScrollTo({
        dest:200,
        speed:3000

    });
    $('#backtop').on('click',$.proxy(scroll.move,scroll));
    
    
    
    $(window).on('scroll',function(){
        checkPosition($(window).height());
    });
    checkPosition($(window).height());
    function checkPosition(pos){
        if($(window).scrollTop()>pos){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    }*/
});