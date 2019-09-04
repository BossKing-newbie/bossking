function userclick(){
    document.getElementById("btn1").style.color='black';
    if (document.getElementById("btn2").style.color=="black"){
        document.getElementById("btn2").style.color="#808B96";
    }
    window.location.href="F:/杂项/web网页前端/enter.html";
}
function loginclick(){
    document.getElementById("btn2").style.color='black';
    if (document.getElementById("btn1").style.color=="black"){
        document.getElementById("btn1").style.color="#808B96";
    }
    window.location.href="F:/杂项/web网页前端/login.html";
}
function selectchange(){
    /*obj.options.style.color="gray";*/
    var obj=document.getElementById("selected");
    obj.style.color="black";
}
function enterway(){
    var user=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    if(user.length==0){
        alert("用户名不能为空！");
    }
    else if(pwd.length==0){
        alert("密码不能为空！");
    }
    else{
        document.getElementById("enter").submit();
    }
}
function loginway(){ /*注册方法*/
    var user=document.getElementById("user-name").value;
    var pwd=document.getElementById("pwd").value;
    var absolute=document.getElementById("absolute").value;
    var phone=document.getElementById("phone").value;
    var mail=document.getElementById("mail").value;
    var name=document.getElementById("name").value;
    var obj=document.getElementById("selected");
    var index=obj.selectedIndex;
    var text = obj.options[index].value; /*获取选择框的值*/ 
    if(user.length==0){
        alert("用户名不能为空！");
    }
    else if(pwd.length==0){
        alert("密码不能为空！");
    }
    else if(absolute.length==0){
        alert("确认密码不能为空！");
    }
    else if(pwd!=absolute){
        alert("两次密码不正确");
        document.getElementById("pwd").value="";
        document.getElementById("absolute").value="";
    }
    else if(name.length==0){
        alert("姓名不能为空！");
    }
    else if(text=="non"){
        alert("请选择所在班级！");
    }
    else if(phone.length==0){
        alert("联系电话不能为空！");
    }
    else if(phone.length<11){
        alert("输入的联系方式格式（11位）错误！");
    }
    else if(mail.length==0){
        alert("邮箱不能为空！");
    }
    else{
        document.getElementById("login").submit();
    }
}
function teacherway(){ /*注册方法*/
    var user=document.getElementById("user-name").value;
    var pwd=document.getElementById("pwd").value;
    var absolute=document.getElementById("absolute").value;
    var phone=document.getElementById("phone").value;
    var mail=document.getElementById("mail").value;
    var name=document.getElementById("name").value;
    if(user.length==0){
        alert("用户名不能为空！");
    }
    else if(pwd.length==0){
        alert("密码不能为空！");
    }
    else if(absolute.length==0){
        alert("确认密码不能为空！");
    }
    else if(pwd!=absolute){
        alert("两次密码不正确");
        document.getElementById("pwd").value="";
        document.getElementById("absolute").value="";
    }
    else if(name.length==0){
        alert("姓名不能为空！");
    }
    else if(phone.length==0){
        alert("联系电话不能为空！");
    }
    else if(phone.length<11){
        alert("输入的联系方式格式（11位）错误！");
    }
    else if(mail.length==0){
        alert("邮箱不能为空！");
    }
    else{
        document.getElementById("tlogin").submit();
    }
}