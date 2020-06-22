$(document).ready(function(){
            $("div.outSideHover").css("transition","all 1s");
            $(".underHover").css( "transition","all 1s");
            $("div.outSideHover").hover(
                function () {
                    $(".underHover").css( "top", "-80px");
                    $(".underHover").css( "color", "white");
                    
                },function () {
                    $(".underHover").css( "top", "0px");
                    $(".underHover").css( "color", "black");
                }
            );
            //轮播图 
            var lb = document.getElementById("lunbo");
            var num=1;
            // 自动换图
            setInterval(function(){
            num++;
            if(num == 5){
                num = 1;     
            }
            lb.src="res/img"+num+".jpg" 
            },3000)
            //信息放大出现效果。
            $("span.noticeSpan").css("transition","all 0.5s");
            $("span.noticeSpan").hover(
                function () {
                    $(this).css( "font-size", "22px");
                    // $("span.noticeSpan").css( "color", "white");
                    
                },function () {
                    $(this).css( "font-size", "18px");
                    // $("span.noticeSpan").css( "color", "black");
                }
            );


        }
    );