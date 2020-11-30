var address = document.getElementById('address');
var price = document.getElementById('price');
var genre = document.getElementById('genre');
var more = document.getElementById('more');
var masking = document.getElementsByClassName('masking')[0];
// console.log($('.address').css('display'))

touch.on(address,'tap',function(){
    if($('.address').is(":hidden")){
        block('address','address')
    }
    else{
        none('address','address')
    }
})
touch.on(price,'tap',function(){
    if($('.price').is(":hidden")){
        block('price','price');
    }
    else{
        none('price','price');
    }
})
touch.on(genre,'tap',function(){
    if($('.genre').is(":hidden")){
        block('genre','genre');
    }
    else{
        none('genre','genre')
    }
})
touch.on(more,'tap',function(){
    if($('.more').is(":hidden")){
        block('more','more');
    }
    else{
        none('more','more');
    }
})
touch.on(masking,'tap',function(){
    $('.none').hide();
    $('.nav-title').children('li').removeClass('bg-top')
    $('.nav-title').children('li').addClass('bg-bottom')
    $('.masking').hide();
})
// 显示和隐藏
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