window.addEventListener("load",function(){
    //登入，點擊登入彈出登入燈箱
    document.getElementById('signIn').onclick = function(){     
        document.getElementById('login').classList.add("open");
    }
    //登入，點擊叉叉關閉登入燈箱
    document.getElementById('loginCross').onclick = function(){      
        document.getElementById('login').classList.remove("open");
    }
},false);