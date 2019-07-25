$(document).ready(function(){
 var item_num = $('.navtab li').length + 1;
 var btn_state = true;

 $('.navtab li').hover(function(){
   $(this).addClass('hover');
 },function(){
   $(this).removeClass('hover');
 });

 $('.navtab li').on('click',function(){
   if(btn_state){
     btn_state = !btn_state;
     $('.navtab li').removeClass('currentPage');
     $(this).addClass('currentPage');

     var i = $('.navtab li').index(this);
     $('article').removeClass('show');
     $('article').addClass('hide');
     $('article').eq(i).addClass('show');

     setTimeout(function(){
       btn_state = !btn_state;
     },500);
   }
 });


});
