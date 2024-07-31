// $(document).ready(function() {
//     let rollingNumber = 0;

//     $('#section1 li').mouseenter(function() {
//         clearInterval(autoRolling)
//         rollingNumber = $(this).index()


//         $(this).addClass('on').siblings().removeClass('on');

//         let imgSrc = $(this).find('figure img').attr('src');
//         let h3Text = $(this).find('h3').text();
//         let cateText = $(this).find('.cate').text();
        
//         $('.big_img img').attr('src', imgSrc);
//         // $('.big_img img').hide()
//         $('.big_img img').fadeIn()
//         $('.big_img .text strong').text(h3Text);
//         $('.big_img .text .cate').text(cateText);

//         $('.big_img').removeClass('on')

//         setTimeout(function(){
//             $('.big_img').addClass('on')
//         },500)
//     });

//     $('#section1 li').mouseleave(function() {
//         autoRolling = setInterval(imgRolling, 3000)
//     })



//     // let imgRolling = setInterval(함수, 시간)

//     // clearInterval(imgRolling)

//     let autoRolling = setInterval(imgRolling, 3000)

//     function imgRolling(){
//         rollingNumber++
//         if(rollingNumber >= 4){
//             rollingNumber = 0
//         }

//         $('.small_img li').eq(rollingNumber).addClass('on').siblings().removeClass('on');
//         let imgSrc = $('.small_img li').eq(rollingNumber).find('figure img').attr('src');
//         let h3Text = $('.small_img li').eq(rollingNumber).find('h3').text();
//         let cateText = $('.small_img li').eq(rollingNumber).find('.cate').text();
//         $('.big_img img').attr('src', imgSrc)
//         $('.big_img img').hide()
//         $('.big_img img').fadeIn()

//         $('.big_img').removeClass('on')

//         setTimeout(function(){
//             $('.big_img').addClass('on')
//             $('.big_img .text strong').text(h3Text);
//             $('.big_img .text .cate').text(cateText);
//         },500)
//     }

//     $('#section3 .content .name').each(function(){
//         let name = $(this).text(); //정수연
//         let nameCom = name.substr(0,1) + '*' + name.substr(2,1)    

//         $(this).text(nameCom)

//     })



// })

$('.floating_menu a').click(function(){
    let target = $(this).attr('href')
    let targetPos = $(target).offset().top
    $('html, body').animate({scrollTop: targetPos}, 500);
});

$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    let sec1Top = $('#section1').offset().top
    let sec2Top = $('#section2').offset().top
    let sec3Top = $('#section3').offset().top
    let winH = $(window).height();

    /* if(scrollTop < sec1Top - 50){
        $('.floating_menu a').removeClass('on')
    } */

    if(scrollTop >= sec1Top - winH/4){
        $('.floating_menu a').removeClass('on')
        $('.floating_menu a[href="#section1"]').addClass('on')
    } else {
        $('.floating_menu a').removeClass('on')
    }

    if(scrollTop >= sec2Top - winH/4){
        $('.floating_menu a').removeClass('on')
        $('.floating_menu a[href="#section2"]').addClass('on')
    }

    if(scrollTop >= sec3Top - winH/4){
        $('.floating_menu a').removeClass('on')
        $('.floating_menu a[href="#section3"]').addClass('on')
    }
})

$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    let winH = $(window).height();
    $('.floating_menu a').removeClass('on');

    $('.floating_menu a').not('[href="#visual"]').each(function(){
        let target = $(this).attr('href')
        let targetPos = $(target).offset().top;

        if(scrollTop >= targetPos - winH/4){
            $('.floating_menu a').removeClass('on');
            $(this).addClass('on');
        }
    })

})


// gnb 를 mo_gnb_box에 삽입
let gnbHtml = $('.gnb').html();
$('.mo_gnb_box .mo_gnb').html(gnbHtml);

$('.mo_menu').click(function(){
    $(this).toggleClass('on');
    $('.mo_gnb_box').fadeToggle();
    $('.mo_gnb_box').toggleClass('on');
})

$(window).resize(function(){
    let winW = $(window).width();

    if(winW > 768){
        $('.mo_gnb_box').hide();
        $('.mo_gnb_box').removeClass('on');
        $('.mo_gnb_box').removeClass('on');

    }
})