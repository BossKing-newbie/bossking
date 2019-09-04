var img=document.getElementById("hover");
img.onclick=function(){
    let mysrc=img.getAttribute("src");
    if(mysrc==="images/but.png"){
        img.setAttribute("src","images/火柴人.gif");
    }else{
        img.setAttribute("src","images/but.png");
    }
}