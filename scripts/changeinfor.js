/*修改个人资料的js*/ 
document.getElementById("inforbtn").onclick=function(){
    var inputlist=document.querySelectorAll("#inforform input");
    //alert(inputlist.length);
    var num=0;
    for(var i=0;i<inputlist.length;i++){
        var v=inputlist[i].value;
        if(v.length==0){
            num++;
        }
    }
    if(num>0){
        alert("您有编辑框未输入!");
    }else{
        
            document.getElementById("inforform").submit();
        
    }
    
}