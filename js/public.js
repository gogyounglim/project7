imgnumber = 1
setInterval(function(){
    imgnumber = imgnumber+1
    if(imgnumber>=5){
        imgnumber= 1
    }else{

    }
    $("small1").fadeOut()
    let imgnumberText = document.getElementsByClassName("imgNumberSelct");
    
    
    for(i=1; i<5;i++){
        let smallimgNumber = document.getElementsByClassName("small"+imgnumber );
        let smallimgNone = document.getElementsByClassName("small"+i);
        
        if(i==imgnumber){
            $(smallimgNumber).css("display","block");
        }else{
            $(smallimgNone).css("display","none");
        }
    }
    document.getElementById("imgNumberSelct").innerHTML = imgnumber;
    
},3000)

                       
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



// top버튼
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });
    
    $("#btnTop").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});