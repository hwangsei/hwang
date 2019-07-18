// $(function() {

//         $('.btn_02').on('click', function(){
//             $('.sub_02_01').animate({opacity:"1"}, 450);
//         });

//         $('.sub_02_content2_bg').click(function() {  //close라는 영역을 클릭했을때,
//             $('.step1_img').hide();        //popup이라는 영역을 사라지게(혹은 숨겨지도록)

//         });

//     });

$(window).load(function () {
    $(".btn1").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});
