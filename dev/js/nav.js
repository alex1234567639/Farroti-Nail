window.addEventListener("load",function(){
    //登入，點擊登入彈出登入燈箱
    document.getElementById('signIn').onclick = function(){     
        document.getElementById('login').classList.add("open");
    }
    //登入，點擊叉叉關閉登入燈箱
    document.getElementById('loginCross').onclick = function(){      
        document.getElementById('login').classList.remove("open");
    }
    //登入，點擊登入紐，切換到登入狀態
    document.getElementById('loginFormLogin').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('login').classList.remove("open");
    }
    //登入，點擊FB登入紐，切換到登入狀態
    document.getElementById('fb').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('login').classList.remove("open");
    }
    //登入，點擊Google登入紐，切換到登入狀態
    document.getElementById('google').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('login').classList.remove("open");
    }

    //登出，點擊登出，切換到登出狀態
    document.getElementById('logout').onclick = function(){   
        document.getElementById('nav').style.display = 'block';
        document.getElementById('nav2').style.display = 'none';
    }
},false);