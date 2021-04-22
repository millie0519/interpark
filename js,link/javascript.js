//날짜 선택
$(function(){
    const $date = $('section>.booking-container>.calendar>.calendarbox>.date>ol>li');

    $date.on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
});


//gnb
$(function(){
    const $openBtn = $('header>.gnb-container>.gnb>p');
    const $allMnu = $('header>.gnb-container>.gnb>.all');
    const $ctmnu = $('header>.gnb-container>.gnb>.category>ul>li>.ctmnu');
    const $mnuBtn = $('header>.gnb-container>.gnb>.category>ul>li');

    let nowIdx = 0;

    const ctMnuShow = function(){
        $mnuBtn.eq(nowIdx).addClass('on').siblings().removeClass('on');
        $ctmnu.eq(nowIdx).show();
    };
    
    // 전체메뉴 마우스이벤트
    $openBtn.on('click',function(evt){
        evt.preventDefault();

        $allMnu.toggle();
        $(this).toggleClass('on');
        
        if($(this).hasClass('on')){
            $mnuBtn.off('mouseenter');
        }else{
            $mnuBtn.on('mouseenter',function(){
                nowIdx = $mnuBtn.index(this);        
                ctMnuShow();
            });
        }
    });
    
    $mnuBtn.on('mouseenter', function(){
        nowIdx = $mnuBtn.index(this);
        
        ctMnuShow();
    });
    $mnuBtn.on('mouseleave', function(){        
        $ctmnu.hide();
        $mnuBtn.eq(nowIdx).removeClass('on');
    });
    
});


//subbnr
$(function(){
    const $subBnr = $('section>.content>.cnt-cen>.sub-banr');
    const $subBnrlist = $('section>.content>.cnt-cen>.sub-banr>ul>li');
    const $subBnrImg = $('section>.content>.cnt-cen>.sub-banr>a>img');

    let idx = 0;
    let intervalKey = null;
    
    const movelibar = function(){
        //배너 리스트
        $subBnrlist.addClass('on').siblings().removeClass('on');
        
        //배너 이미지
        $subBnrImg.attr({
            src:'./images/cnt/sub_bnr0'+idx+'.gif'
        });        
    };
    
    //자동재생 함수
    const autoPlay = function(){
        intervalKey = setInterval(function(){
            if(idx<6){
                idx++;
            }else{
                idx=1
            }
            movelibar();
            $subBnrlist.eq(idx-1).addClass('on').siblings().removeClass('on');
        },2000);
    };
    const autoStop = function(){
        clearInterval(intervalKey);
    };

    $subBnr.on({
        'mouseenter mousemove': function(){
            autoStop();
        },
        'mouseleave': function(){
            autoPlay();
        }
    });
    
    $subBnrlist.on({
        'mouseover': function(){
            idx=$subBnrlist.index(this)+1;
            movelibar();
            
            autoStop();
        },
        'mouseout': function(){
            idx=$subBnrlist.index(this);
            $subBnrlist.eq(idx).addClass('on');
        }
    });


    $(window).on('load', function(){
        autoPlay();
    });


});

//rangking
$(function(){
    const $ranking = $('section>.content>.cnt-rgt>.rangking>.tit-list>.rk-tit>li');
    const $rkList = $('section>.content>.cnt-rgt>.rangking>.rk-data>ol');

    let nowIdx = 0;

    $ranking.on('click', function(evt){
        evt.preventDefault();
        nowIdx = $ranking.index(this);

        $rkList.eq(nowIdx).show().siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    });
});


// hot-musical
$(function(){
    const $hot = $('section>.hot-musical>ul>li');
    let nowIdx = 0;
    let intervalKey = null;

    const hotOn = function(){
        $hot.eq(nowIdx).addClass('on').siblings().removeClass('on');
    };

    const hotAutoplay = function(){
        intervalKey = setInterval(function(){
            if(nowIdx<7){
                nowIdx++;
            }else{
                nowIdx=0
            }
            hotOn();
        },2000);        
    };

    $hot.on('mouseenter', function(){
        nowIdx = $(this).index();
        clearInterval(intervalKey);
        hotOn();
    });
    $hot.on('mouseleave', function(){
        hotAutoplay();
    });

    $(window).on('load',function(){
        nowIdx = $hot.index(this);
        hotAutoplay();
    });

});


// musical-spot
$(function(){
    const $thmb = $('section>.content_3>.musical-spot>.container>.spot-mv>ul>li>a>img');
    const $mv = $('section>.content_3>.musical-spot>.container>.spot-mv>.frame>img');

    let srcVal = null;

    $thmb.on('click', function(evt){
        evt.preventDefault();

        srcVal = $(this).attr('src');
        $mv.attr({
            src:srcVal
        })
    });
});
