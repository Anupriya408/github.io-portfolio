document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "ANUPRIYA | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Come to my portfolio";
    }
})