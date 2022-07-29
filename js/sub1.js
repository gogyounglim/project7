$(function(){
    $.get("./text/sub1text.txt",function(data){
        $(".container3Flex1").html(data);
    })

    $(".header1_1>div img").click(function(){
        location.href="index.html"
    })
});

// 1
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "다이어트" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
.done(function (msg) {
        bookDatetime = msg.documents[6].datetime;
        isbn1 = msg.documents[6].isbn
        console.log(isbn1.substring(0,10))
        
        $(".container1Flex1Box1").append("<img src='" + msg.documents[6].thumbnail + "'/>");
        $(".container1Flex2Box1").append("<h3>" + msg.documents[6].title + "</h3><br>");
        $(".container1Flex2Box1").append( "<p><span>저자 : </span>" +"<a>"+ msg.documents[6].authors[0] +"</a>"+ " | " +"<span>출판사 : </span>" + msg.documents[0].publisher + " |</p>");
        $(".container1Flex2Box1").append("<p>"+ bookDatetime.substring(0,10)+" | "+"314P" +" | " + "ISBN-13 : "+ isbn1.substring(0,10)  +"</p>" );
});

//2
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "다이어트" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
.done(function (msg) {
    saleprice = Number(msg.documents[6].sale_price)
    juckrip = saleprice*5/100;
    console.log(juckrip)

    $(".container1Flex2Box2").append("<p>" +"정가 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+"<span class='sale'>"+" "+ msg.documents[6].price +"원"+ "</span><br>");
    $(".container1Flex2Box2").append("<p>" +"판매가 &nbsp;&nbsp;&nbsp;&nbsp; "+"<span class='salePrice'>"+" "+ msg.documents[6].sale_price +"원 "+ "</span>" + "<span class='slaeper'> (10% 할인) </sapn> </p>");
    $(".container1Flex2Box2").append("<p>" + "적립금 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='juckripPrice'> " + juckrip +"</span> (5%)" +"</p>");
    $(".container1Flex2Box2").append("<p>" + " 배송일정 &nbsp;&nbsp; "  + "<span class='schedule'> 2일 이내 출고예정 (주말/공휴일 제외) </span>"+ "</div>");
    // $(".container1Flex2Box2").append("<div class='guide>주문 수량 변경시 안내</div>");
    $(".container1Flex2Box2").append("<div class='guide1'>주문 수량 변경시 안내</div>");
    $(".container1Flex2Box2").append("<div class='guide2'>배송 안내</div></br>");
    $(".container1Flex2Box2").append("<span class='CouponWrap'>" + "<span class='couponText' >쿠폰 및 결제혜택<span>" +"<div class='Coupon'>확인하기</div>" + "</span>");
    
});

$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "식단" },
headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
.done(function (msg) {


    var divs = document.getElementsByClassName('con2Box');

    for (var i = 0; i < divs.length; i++) {

        $(".con2Box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
        $(".con2Box").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
        $(".con2Box").eq(i).append( "<p class='name'>"+ msg.documents[i].authors +" | " + msg.documents[i].publisher +  "</p>");
        

        var str = msg.documents[i].contents;
        var str2 = str.substring(0, 60);

    }
    
});

$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "다이어트" },
headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function (msg) {

    x=1
    var divs = document.getElementsByClassName('con3Box1');
    
    for (var i = 0; i < divs.length; i++) {
        $(".con3Box1").eq(i).append("<img src='" + msg.documents[x].thumbnail + "'/>");
        $(".con3Box2").eq(i).append("<h5>" + msg.documents[x].title + "</h5>");
        $(".con3Box2").eq(i).append( "<p class='name'>"+ msg.documents[x].authors +" | " + msg.documents[x].publisher +  "</p>");
        $(".con3Box2").eq(i).append("<p>" +"판매가&nbsp; "+"<span class='salePrice'>"+" "+ msg.documents[x].sale_price +"원 "+ "</span>");

        x= x+1
    }
    
});

$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "육아" },
headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function (msg) {

    x=1
    var divs = document.getElementsByClassName('con3Box1');
    
    for (var i = 0; i < divs.length; i++) {
        $(".con3Box3").eq(i).append("<img src='" + msg.documents[x].thumbnail + "'/>");
        $(".con3Box4").eq(i).append("<h5>" + msg.documents[x].title + "</h5>");
        $(".con3Box4").eq(i).append( "<p class='name'>"+ msg.documents[x].authors +" | " + msg.documents[x].publisher +  "</p>");
        $(".con3Box4").eq(i).append("<p>" +"판매가&nbsp; "+"<span class='salePrice'>"+" "+ msg.documents[x].sale_price +"원 "+ "</span>");

        x= x+1
    }
    
});
$(".next1").click(function(){
    imgnumber= imgnumber+1;
        if(imgnumber>=5){
            imgnumber = 1;
        }

        
        for(i=1; i<5;i++){
        let smallimgNumber = document.getElementsByClassName("small"+imgnumber );
        let smallimgNone = document.getElementsByClassName("small"+i);
        
        if(i==imgnumber){
            $(smallimgNumber).css("display","block");
        }else{
            $(smallimgNone).css("display","none");
        }
    }
    console.log(imgnumber)
    document.getElementById("imgNumberSelct").innerHTML = imgnumber;
    
    
});

$(".prev1").click(function(){
    imgnumber= imgnumber-1;
        if(imgnumber==0){
            imgnumber = 4;
        }
        
        for(i=1; i<5;i++){
        let smallimgNumber = document.getElementsByClassName("small"+imgnumber );
        let smallimgNone = document.getElementsByClassName("small"+i);
        
        if(i==imgnumber){
            $(smallimgNumber).css("display","block");
        }else{
            $(smallimgNone).css("display","none");
        }
    }
    console.log(imgnumber)
    document.getElementById("imgNumberSelct").innerHTML = imgnumber; 
});

function loginPopup(){
    var result = confirm("독자서평은 로그인 후 사용하실 수 있습니다.\n로그인 하시겠습니까?");
    if(result==true){

    }
    else{

    }
}