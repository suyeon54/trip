$(document).ready(function(){
    $('header').load('include/header.html',function(){
        
    })
})


/* $(document).ready(function() {
    let rollingNumber = 0;

    $('#section1 li').mouseenter(function() {
        clearInterval(autoRolling)
        rollingNumber = $(this).index()


        $(this).addClass('on').siblings().removeClass('on');

        let imgSrc = $(this).find('figure img').attr('src');
        let h3Text = $(this).find('h3').text();
        let cateText = $(this).find('.cate').text();
        
        $('.big_img img').attr('src', imgSrc);
        $('.big_img img').hide()
        $('.big_img img').fadeIn()
        $('.big_img .text strong').text(h3Text);
        $('.big_img .text .cate').text(cateText);

        $('.big_img').removeClass('on')

        setTimeout(function(){
            $('.big_img').addClass('on')
        },500)
    });

    $('#section1 li').mouseleave(function() {
        autoRolling = setInterval(imgRolling, 3000)
    })



    // let imgRolling = setInterval(함수, 시간)

    // clearInterval(imgRolling)

    let autoRolling = setInterval(imgRolling, 3000)

    function imgRolling(){
        rollingNumber++
        if(rollingNumber >= 4){
            rollingNumber = 0
        }

        $('.small_img li').eq(rollingNumber).addClass('on').siblings().removeClass('on');
        let imgSrc = $('.small_img li').eq(rollingNumber).find('figure img').attr('src');
        let h3Text = $('.small_img li').eq(rollingNumber).find('h3').text();
        let cateText = $('.small_img li').eq(rollingNumber).find('.cate').text();
        $('.big_img img').attr('src', imgSrc)
        $('.big_img img').hide()
        $('.big_img img').fadeIn()

        $('.big_img').removeClass('on')

        setTimeout(function(){
            $('.big_img').addClass('on')
            $('.big_img .text strong').text(h3Text);
            $('.big_img .text .cate').text(cateText);
        },500)
    }

    $('#section3 .content .name').each(function(){
        let name = $(this).text(); //정수연
        let nameCom = name.substr(0,1) + '*' + name.substr(2,1)    

        $(this).text(nameCom)

    })



}) */