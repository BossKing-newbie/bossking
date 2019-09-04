/*左侧导航栏点击事件 */
var alist=document.querySelectorAll(".nav-list h2")
,ahide=document.querySelectorAll(".hide")
,aicon=document.querySelectorAll(".nav-list i")
,lastindex=0;
for(var i=0;i<alist.length;i++){
    alist[i].index=i; //保存索引值
    alist[i].initHeight=ahide[i].clientHeight; //自定义将ahide中的高度保存下来
    alist[i].isClick=false;
    ahide[i].style.height='0';
    alist[i].onclick=function(){
        if(this.isClick){//清除当前的样式
            ahide[this.index].style.height='0px';aicon[this.index].className='';
            alist[this.index].isClick=false;
        }else{
            ahide[lastindex].style.height='0px';aicon[lastindex].className='';
            //设置当前样式
        ahide[this.index].style.height=this.initHeight+'px';
        aicon[this.index].className='on';
        alist[lastindex].isClick=false;
        alist[this.index].isClick=true;
        lastindex=this.index; //记录上一次的索引
        
        }
    }
}
function selected(){
    var oselect=document.getElementById("selector");
    var index=oselect.selectedIndex;
    var text=oselect.options[index].value;
    var iselect=document.getElementById("iselect");
    iselect.innerHTML=text;
    console.log(text);
}
document.getElementById("update").onclick=function(){
    var edit=document.getElementById("edit").value;
    var warn=document.getElementById("warn");
    if(edit.length==0){
        warn.innerHTML="编辑框中不能为空！"
    }else{
        document.getElementById("form").submit();
    }
}