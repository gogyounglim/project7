$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미움받을 용기" },
    headers: { Authorization: "KakaoAK 577f80ae52111b712428a925a329793c" }
})
.done(function (msg) {
    x=1
    setInterval(function(){
        if(x>=4){
            x=0;
        }

        $('.box1 img').remove();
        $('.box2 h3').remove();
        $('.box2 h6').remove();
        $('.box2 p').remove();
        $('.box2 br').remove();
        
        $(".box1").append("<img src='" + msg.documents[x].thumbnail + "'/>");
        $(".box2").append("<h3>" + msg.documents[x].title + "</h3><br>");
        $(".box2").append("<h6>"+ "</h6>");
        $(".box2").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[x].sale_price +"원"+ "</span> "+ "(" + msg.documents[0].authors[0] +" | " + msg.documents[0].publisher + ")" + "</p><br>");
        $(".box2").append("<p>" + msg.documents[x].contents	 + "</p>");
        
        x=x+1
    },3000)

    $(".box1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    $(".box2").append("<h3>" + msg.documents[0].title + "</h3><br>");
    $(".box2").append("<h6>"+ "</h6>");
    $(".box2").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[0].sale_price +"원"+ "</span> "+ "(" + msg.documents[0].authors[0] +" | " + msg.documents[0].publisher + ")" + "</p><br>");
    $(".box2").append("<p>" + msg.documents[0].contents	 + "</p>");
    
    $(".btnNext2").click(function(){
        x=x+1
        if(x>=4){
            x=0;
        }
        $('.box1 img').remove();
        $('.box2 h3').remove();
        $('.box2 h6').remove();
        $('.box2 p').remove();
        $('.box2 br').remove();
        
        $(".box1").append("<img src='" + msg.documents[x].thumbnail + "'/>");
        $(".box2").append("<h3>" + msg.documents[x].title + "</h3><br>");
        $(".box2").append("<h6>"+ "</h6>");
        $(".box2").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[x].sale_price +"원"+ "</span> "+ "(" + msg.documents[0].authors[0] +" | " + msg.documents[0].publisher + ")" + "</p><br>");
        $(".box2").append("<p>" + msg.documents[x].contents	 + "</p>");
    });
    $(".btnPrev2").click(function(){
        x=x-1
        if(x<0){
            x=3
        }
        $('.box1 img').remove();
        $('.box2 h3').remove();
        $('.box2 h6').remove();
        $('.box2 p').remove();
        $('.box2 br').remove();
        
        $(".box1").append("<img src='" + msg.documents[x].thumbnail + "'/>");
        $(".box2").append("<h3>" + msg.documents[x].title + "</h3><br>");
        $(".box2").append("<h6>"+ "</h6>");
        $(".box2").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[x].sale_price +"원"+ "</span> "+ "(" + msg.documents[0].authors[0] +" | " + msg.documents[0].publisher + ")" + "</p><br>");
        $(".box2").append("<p>" + msg.documents[x].contents	 + "</p>");
    });
    

});

    // 추천도서
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "추천" },
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
        .done(function (msg) {

            // for문 (8개)
            var divs = document.getElementsByClassName('2box');

            for (var i = 0; i < divs.length; i++) {

                $(".2box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".2box_1").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
                $(".2box_1").eq(i).append( "<p class='name'>"+ msg.documents[i].authors +" | " + msg.documents[0].publisher +  "</p>");
                $(".2box_1").eq(i).append("<p>" +"<span>"+" "+ msg.documents[0].sale_price +"원"+ "</span> ")

                var str = msg.documents[i].contents;
                var str2 = str.substring(0, 60);

            }
            
        });


    // 화제의 신간

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "베스트" },
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('3box');

        for (var i = 0; i < divs.length; i++) {

            $(".3box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".3box").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
            $(".3box").eq(i).append( "<p class='name'>"+ msg.documents[i].authors +" | " + msg.documents[0].publisher +  "</p>");
            $(".3box").eq(i).append("<p>" +"<span>"+" "+ msg.documents[0].sale_price +"원"+ "</span> ")

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
        
    });

    // 스테디셀러

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "스테디셀러" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('4box');

        for (var i = 0; i < divs.length; i++) {

            $(".4box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".4box").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
            $(".4box").eq(i).append( "<p class='name'>"+ msg.documents[i].authors +" | " + msg.documents[0].publisher +  "</p>");
            $(".4box").eq(i).append("<p>" +"<span>"+" "+ msg.documents[0].sale_price +"원"+ "</span> ")
            
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);



        }
        
    });


    // 코믹            
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "코믹" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('5box');

        for (var i = 0; i < divs.length; i++) {

            $(".5box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".5box").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
            $(".5box").eq(i).append( "<p class='name'>"+ msg.documents[i].authors +" | " + msg.documents[i].publisher +  "</p>");
            $(".5box").eq(i).append("<p>" +"<span>"+" "+ msg.documents[i].sale_price +"원"+ "</span> ")

            // var str = msg.documents[i].contents;
            // var str2 = str.substring(0, 60);

        }
        
    });


    // 주간 베스트

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "베스트" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('6box');

        for (var i = 0; i < divs.length; i++) {

            $(".6box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
        
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "힐링" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('7box');

        for (var i = 0; i < divs.length; i++) {

            $(".7box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
        
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "밥" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('8box');

        for (var i = 0; i < divs.length; i++) {

            $(".8box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
        
    });
    // 요즘뜨는책 interval 사용 변경
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "요즘" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {
        var i = 0
        var y = -1
        var length1 = 1
        let b = 0
            
        setInterval(function(){
            
            if(i>=3){
                i=0
                y=2
            }else{
                i= i+1
                y= y+1
            }
            if(y>=3){
              y=0  
            }

            console.log(i,"i");
            $('.9box img').remove();
            $('.10box h6').remove();
            $('.10box h3').remove();
            $('.10box p').remove();
            $('.10box br').remove();
            
            $('.11box img').remove();
            $('.12box h3').remove();
            $('.12box br').remove();
            $('.12box p').remove();


            $(".9box").append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".10box").append("<h3>" + msg.documents[i].title + "</h3><br>");
            $(".10box").append("<h6>"+ "</h6>");
            $(".10box").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[i].sale_price +"원"+ "</span> "+ "(" + msg.documents[i].authors[i] +" | " + msg.documents[i].publisher + ")" + "</p><br>");
            $(".10box").append("<p>" + msg.documents[i].contents + "</p>");
            
 
            for(a=1; a<4; a++){            
                let arr1 = [2,3,0,3,0,1,0,1,2,1,2,3]; //순서 맟추기위해 변수로 
                let arr2 = [3,0,1];
                let arr3 = [0,1,2];
                let [num1,num2,num3]=arr1;
                
                if(b==12){
                    b=0;
                };

                $(".11box").eq(a-1).append("<img src='" + msg.documents[arr1[b]].thumbnail + "'/>");
                $(".12box").eq(a-1).append("<h3>" + msg.documents[arr1[b]].title + "</h3><br>");
                $(".12box").eq(a-1).append( "<p>(" + msg.documents[arr1[b]].authors[arr1[b]] +" | " + msg.documents[arr1[b]].publisher + ")" + "</p><br>");
                
                console.log(arr1[b]);

                b=b+1
            }
        },3000)

        $(".btnNext3").click(function(){
                if(i>=3){
                i=0
                y=2
                }else{
                    i= i+1
                    y= y+1
                }
                if(y>=3){
                y=0  
                }
                console.log(i);

                $('.9box img').remove();
                $('.10box h6').remove();
                $('.10box h3').remove();
                $('.10box p').remove();
                $('.10box br').remove();
                
                $('.11box img').remove();
                $('.12box h3').remove();
                $('.12box br').remove();
                $('.12box p').remove();


                $(".9box").append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".10box").append("<h3>" + msg.documents[i].title + "</h3><br>");
                $(".10box").append("<h6>"+ "</h6>");
                $(".10box").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[i].sale_price +"원"+ "</span> "+ "(" + msg.documents[i].authors[i] +" | " + msg.documents[i].publisher + ")" + "</p><br>");
                $(".10box").append("<p>" + msg.documents[i].contents + "</p>");

                for(a=1; a<4; a++){            
                let arr1 = [2,3,0,3,0,1,0,1,2,1,2,3]; //순서 맟추기위해 변수로 
                let arr2 = [3,0,1];
                let arr3 = [0,1,2];
                let [num1,num2,num3]=arr1;
                
                if(b==12){
                    b=0;
                };

                $(".11box").eq(a-1).append("<img src='" + msg.documents[arr1[b]].thumbnail + "'/>");
                $(".12box").eq(a-1).append("<h3>" + msg.documents[arr1[b]].title + "</h3><br>");
                $(".12box").eq(a-1).append( "<p>(" + msg.documents[arr1[b]].authors[arr1[b]] +" | " + msg.documents[arr1[b]].publisher + ")" + "</p><br>");
                
                console.log(arr1[b]);

                b=b+1
            }


        });

        $(".btnPrev3").click(function(){

                i= i-1
                if(i<0){
                i=3
                }else{
                    
                }
                console.log(i);

                $('.9box img').remove();
                $('.10box h6').remove();
                $('.10box h3').remove();
                $('.10box p').remove();
                $('.10box br').remove();
                
                $('.11box img').remove();
                $('.12box h3').remove();
                $('.12box br').remove();
                $('.12box p').remove();


                $(".9box").append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".10box").append("<h3>" + msg.documents[i].title + "</h3><br>");
                $(".10box").append("<h6>"+ "</h6>");
                $(".10box").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[i].sale_price +"원"+ "</span> "+ "(" + msg.documents[i].authors[i] +" | " + msg.documents[i].publisher + ")" + "</p><br>");
                $(".10box").append("<p>" + msg.documents[i].contents + "</p>");

                for(a=1; a<4; a++){            
                let arr1 = [2,3,0,3,0,1,0,1,2,1,2,3]; //순서 맟추기위해 변수로 
                let arr2 = [3,0,1];
                let arr3 = [0,1,2];
                let [num1,num2,num3]=arr1;
                
                if(b==12){
                    b=0;
                };

                $(".11box").eq(a-1).append("<img src='" + msg.documents[arr1[b]].thumbnail + "'/>");
                $(".12box").eq(a-1).append("<h3>" + msg.documents[arr1[b]].title + "</h3><br>");
                $(".12box").eq(a-1).append( "<p>(" + msg.documents[arr1[b]].authors[arr1[b]] +" | " + msg.documents[arr1[b]].publisher + ")" + "</p><br>");
                
                console.log(arr1[b]);

                b=b+1

            }


        });



        var divs = document.getElementsByClassName('9box');
            $(".9box").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".10box").append("<h3>" + msg.documents[0].title + "</h3><br>");
            $(".10box").append("<h6>"+ "</h6>");
            $(".10box").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[0].sale_price +"원"+ "</span> "+ "(" + msg.documents[0].authors[0] +" | " + msg.documents[0].publisher + ")" + "</p><br>");
            $(".10box").append("<p>" + msg.documents[0].contents + "</p>");
            
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);
        for(a=1; a<4; a++){
            $(".11box").eq(a-1).append("<img src='" + msg.documents[a].thumbnail + "'/>");
            $(".12box").eq(a-1).append("<h3>" + msg.documents[a].title + "</h3><br>");
        }
    });


    // 정기인하
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "운명이 결정된다" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {

        
        var divs = document.getElementsByClassName('8box');

        

            $(".box13").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".box14").append("<h3>" + msg.documents[0].title + "</h3><br>");
            $(".box14").append("<h6>"+ "</h6>");
            $(".box14").append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[0].sale_price +"원"+ "</span> "+ "(" + msg.documents[0].authors[0] +" | " + msg.documents[0].publisher + ")" + "</p><br>");
            $(".box14").append("<p>" + msg.documents[0].contents + "</p>"); 
        
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "밥" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
    .done(function (msg) {
        
        var divs = document.getElementsByClassName('box15_1');

        for (var i = 0; i < divs.length; i++) {

            $(".box15").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".box15_1").eq(i).append("<h3>" + msg.documents[i].title + "</h3><br>");
            $(".box15_1").eq(i).append("<p>" +"인터넷 판매가:"+"<span>"+" "+ msg.documents[i].sale_price +"원"+ "</span> ");
            $(".box15_1").eq(i).append("<p>"+ "(" + msg.documents[i].authors[i] +" | " + msg.documents[i].publisher + ")" + "</p><br>")
                

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
        
    });


    $(function(){ 

        
        $(".header1_1> div:nth-child(1) img").click(function(){
            location.href="index.html"
        })

        
        $('.menu2 li').click(function(){
            let indexNumber = $(this).index();
            let con2= document.getElementsByClassName("container2_"+indexNumber+"wrap")
            let liback = document.getElementsByClassName("menu2li" +indexNumber) 
            console.log(liback);
            for(i=0; i<5;i++){
                let con2else =document.getElementsByClassName("container2_"+i+"wrap");
                let lielse = document.getElementsByClassName("menu2li" +i);
                if(i==indexNumber){
                    $(con2).fadeIn(100);
                    $(liback).css("background-color","#E5F7EB");

                }else{
                    $(con2else).fadeOut(100);
                    $(lielse).css("background-color","white");
                    
                }
                
            }
        }); 




        $('.menu2 li:nth-child(1)').mouseover(function(){
            $('.menu2 li:nth-child(1)').css('background-color','#E5F7EB');
            $('.menu2 li:nth-child(1)').css('border-bottom','0px');
        }).mouseleave(function(){
            if($(".container2_0wrap").css('display')=='none'){
                $('.menu2 li:nth-child(1)').css('background-color','white');
                $('.menu2 li:nth-child(1)').css('border-bottom','1px solid rgb(212, 212, 212)');
            }else{
                
            }
        }); 

        $('.menu2 li:nth-child(2)').mouseover(function(){
            $('.menu2 li:nth-child(2)').css('background-color','#E5F7EB');
            $('.menu2 li:nth-child(2)').css('border-bottom','0px');
        }).mouseleave(function(){
            if($(".container2_1wrap").css('display')=='none'){
                $('.menu2 li:nth-child(2)').css('background-color','white');
                $('.menu2 li:nth-child(2)').css('border-bottom','1px solid rgb(212, 212, 212)');
            }else{
                
            }
        }); 

        $('.menu2 li:nth-child(3)').mouseover(function(){
            $('.menu2 li:nth-child(3)').css('background-color','#E5F7EB');
            $('.menu2 li:nth-child(3)').css('border-bottom','0px');
        }).mouseleave(function(){
            if($(".container2_2wrap").css('display')=='none'){
                $('.menu2 li:nth-child(3)').css('background-color','white');
                $('.menu2 li:nth-child(3)').css('border-bottom','1px solid rgb(212, 212, 212)');
            }else{
                
            }
        }); 

        $('.menu2 li:nth-child(4)').mouseover(function(){
            $('.menu2 li:nth-child(4)').css('background-color','#E5F7EB');
            $('.menu2 li:nth-child(4)').css('border-bottom','0px');
        }).mouseleave(function(){
            if($(".container2_3wrap").css('display')=='none'){
                $('.menu2 li:nth-child(4)').css('background-color','white');
                $('.menu2 li:nth-child(4)').css('border-bottom','1px solid rgb(212, 212, 212)');
            }else{
                
            }
        }); 
        
        $('.container7box1').mouseover(function(){
            $('.container7box1 p').css('text-decoration','underline');
            
        }).mouseleave(function(){
            $('.container7 p').css('text-decoration','none');
        }); 
        $('.container7box2').mouseover(function(){
            $('.container7box2 p').css('text-decoration','underline');
            
        }).mouseleave(function(){
            $('.container7 p').css('text-decoration','none');
        }); 
        $('.container7box3').mouseover(function(){
            $('.container7box3 p').css('text-decoration','underline');
            
        }).mouseleave(function(){
            $('.container7 p').css('text-decoration','none');
        }); 
        $('.container7box4').mouseover(function(){
            $('.container7box4 p').css('text-decoration','underline');
            
        }).mouseleave(function(){
            $('.container7 p').css('text-decoration','none');
        }); 
        $('.container7box5').mouseover(function(){
            $('.container7box5 p').css('text-decoration','underline');
            
        }).mouseleave(function(){
            $('.container7 p').css('text-decoration','none');
        }); 
        $('.container7box6').mouseover(function(){
            $('.container7box6 p').css('text-decoration','underline');
            
        }).mouseleave(function(){
            $('.container7 p').css('text-decoration','none');
        }); 


        $('.container1').mouseover(function(){
            $('.btnNext').css('display','block');
            $('.btnPrev').css('display','block');
            
        }).mouseleave(function(){
            $('.btnNext').css('display','none');
            $('.btnPrev').css('display','none');
        }); 
       
        $('.container2box').mouseover(function(){
            $('.btnNext2').css('display','block');
            $('.btnPrev2').css('display','block');
            
        }).mouseleave(function(){
            // $('.btnNext2').css('display','none');
            // $('.btnPrev2').css('display','none');

            $('.btnNext2').fadeOut(300);
            $('.btnPrev2').fadeOut(300);
        }); 

        $('.contanier5_1').mouseover(function(){
            $('.btnNext3').css('display','block');
            $('.btnPrev3').css('display','block');
            
        }).mouseleave(function(){
            // $('.btnNext2').css('display','none');
            // $('.btnPrev2').css('display','none');

            $('.btnNext3').fadeOut(300);
            $('.btnPrev3').fadeOut(300);
        }); 

        
    });

    $('.3boxwrap').click(function(){
        window.location.href='sub1.html'
    });
    $('.4boxwrap').click(function(){
        window.location.href='sub1.html'
    });
    $('.5boxwrap').click(function(){
        window.location.href='sub1.html'
    });