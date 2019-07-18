$(function(){
        $('.btn_02').on('click', function(){
            $('.sub_02_01').animate({opacity:"0"}, 450);
            $('.sub_02_02').animate({opacity:"1"}, 450);
            $('.btn_02').css("background-color","#ff7878");
            $('.btn_01').css("background-color","white");
    });

		$('.btn_01').on('click', function(){
            $('.sub_02_01').animate({opacity:"1"}, 450);
            $('.sub_02_02').animate({opacity:"0"}, 450);
            $('.btn_01').css("background-color","#ff7878");
            $('.btn_02').css("background-color","white");
	});

});
