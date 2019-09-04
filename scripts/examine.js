var alist=document.querySelectorAll(".nav-list h2")
,ahide=document.querySelectorAll(".hide")
,aicon=document.querySelectorAll(".hide i")
,lastindex=0;
for(var i=0;i<alist.length;i++){
    alist[i].index=i; //保存索引值
    alist[i].initHeight=ahide[i].clientHeight; //自定义将ahide中的高度保存下来
    alist[i].isClick=false;
    ahide[i].style.height='0';
    alist[i].onclick=function(){
        if(this.isClick){//清除当前的样式
            ahide[this.index].style.height='0px';
            ahide[this.index].style.border='';
            alist[this.index].isClick=false;
        }else{
            ahide[lastindex].style.height='0px';
            //设置当前样式
        ahide[this.index].style.height=this.initHeight+'px';
        ahide[this.index].style.borderBottom='1px solid #00B8F5';
        alist[lastindex].isClick=false;
        alist[this.index].isClick=true;
        lastindex=this.index; //记录上一次的索引
        }
    }
}
document.getElementById("btn").onclick=function(){
    var inputlist=document.querySelectorAll(".modify input");
    //alert(inputlist.length);
    var num=0;
    for(var i=0;i<inputlist.length;i++){
        var v=inputlist[i].value;
        if(v.length==0){
            num++;
        }
    }
    if(num==1){
        alert("您有一个编辑框未输入!");
    }else if(num==2){
        alert("您有两个编辑框未输入!");
    }else if(num==3){
        alert("您有三个编辑框未输入!");
    }else{
        //alert(inputlist[0].value);
        if(inputlist[1].value!=inputlist[2].value){
            alert("输入的密码与再次输入的密码不一致！");
        }else{
            document.getElementById("pwdform").submit();
        }

    }
    
}
var imglist=document.querySelectorAll("#pwdform img"); //获取眼睛序列
var inputlist=document.querySelectorAll("#pwdform input");
for(var i=0;i<imglist.length;i++){
    imglist[i].index=i;//保存索引
    inputlist[i].index=i;//保存索引
    imglist[i].onclick=function(){
        var src=imglist[this.index].getAttribute("src");
        if(src=="../images/eye-hide.png"){
            imglist[this.index].setAttribute("src","../images/eye.png")
        }else{
            imglist[this.index].setAttribute("src","../images/eye-hide.png")
        }
        var type=inputlist[this.index].getAttribute("type");
        if(type=="password"){
            inputlist[this.index].setAttribute("type","text");
        }else{
            inputlist[this.index].setAttribute("type","password");
        }
    }
}
