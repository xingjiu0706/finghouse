var address = document.getElementById('address');
var price = document.getElementById('price');
var genre = document.getElementById('genre');
var more = document.getElementById('more');
var masking = document.getElementsByClassName('masking')[0];
// console.log($('.address').css('display'))

touch.on(address,'tap',function(){
    if($('.address').is(":hidden")){
        // $('.none').hide();
        // $('.masking').show();
        // $('.address').slideDown(500);
        // $('.nav-title').children('li').removeClass('bg-top');
        // $('.nav-title').children('li').addClass('bg-bottom');
        // $('#address').removeClass('bg-bottom');
        // $('#address').addClass('bg-top');
        block('address','address')
    }
    else{
        // $('.address').hide();
        // $('.masking').hide();
        // $('#address').removeClass('bg-top')
        // $('#address').addClass('bg-bottom');
        none('address','address')
    }
})
touch.on(price,'tap',function(){
    if($('.price').is(":hidden")){
        // $('.none').hide();
        // $('.masking').show();
        // $('.price').slideDown(500);
        // $('.nav-title').children('li').removeClass('bg-top')
        // $('.nav-title').children('li').addClass('bg-bottom')
        // $('#price').removeClass('bg-bottom')
        // $('#price').addClass('bg-top');
        block('price','price');
    }
    else{
        // $('.price').hide();
        // $('.masking').hide();
        // $('#price').removeClass('bg-top')
        // $('#price').addClass('bg-bottom');
        none('price','price');
    }
})
touch.on(genre,'tap',function(){
    if($('.genre').is(":hidden")){
        // $('.none').hide();
        // $('.masking').show();
        // $('.genre').slideDown(500);
        // $('.nav-title').children('li').removeClass('bg-top')
        // $('.nav-title').children('li').addClass('bg-bottom')
        // $('#genre').removeClass('bg-bottom')
        // $('#genre').addClass('bg-top');
        block('genre','genre');
    }
    else{
        // $('.genre').hide();
        // $('.masking').hide();
        // $('#genre').removeClass('bg-top')
        // $('#genre').addClass('bg-bottom');
        none('genre','genre')
    }
})
touch.on(more,'tap',function(){
    if($('.more').is(":hidden")){
        // $('.none').hide();
        // $('.masking').show();
        // $('.more').slideDown(500);
        // $('.nav-title').children('li').removeClass('bg-top')
        // $('.nav-title').children('li').addClass('bg-bottom')
        // $('#more').removeClass('bg-bottom')
        // $('#more').addClass('bg-top');
        block('more','more');
    }
    else{
        // $('.more').hide();
        // $('.masking').hide();
        // $('#more').removeClass('bg-top')
        // $('#more').addClass('bg-bottom');
        none('more','more');
    }
})
touch.on(masking,'tap',function(){
    $('.none').hide();
    $('.nav-title').children('li').removeClass('bg-top')
    $('.nav-title').children('li').addClass('bg-bottom')
    $('.masking').hide();
})
function block(button,content){
    $('.none').hide();
    $('.masking').show();
    $('.'+content).slideDown(500);
    $('.nav-title').children('li').removeClass('bg-top')
    $('.nav-title').children('li').addClass('bg-bottom')
    $('#'+button).removeClass('bg-bottom')
    $('#'+button).addClass('bg-top');
}
function none(button,content){
    $('.'+content).hide();
    $('.masking').hide();
    $('#'+button).removeClass('bg-top')
    $('#'+button).addClass('bg-bottom');
}
function setRem(){
var windw = document.documentElement.clientWidth || document.body.clientWidth;
var uiw = 320;
document.documentElement.style.fontSize = (windw/uiw)*10+'px'
}
setRem();
window.onresize = setRem;