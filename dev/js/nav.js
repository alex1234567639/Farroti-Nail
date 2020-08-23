window.addEventListener("load",function(){
    //登入，點擊登入，彈出登入燈箱
    document.getElementById('signIn').onclick = function(){     
        document.getElementById('login').classList.add("open");
    }
    //登入，點擊叉叉，關閉登入燈箱
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

    //註冊，點擊註冊，彈出註冊燈箱
    document.getElementById('registBtn').onclick = function(){   
        document.getElementById('regist').classList.add("open");
    }
    //註冊，點擊叉叉，關閉註冊燈箱
    document.getElementById('cross').onclick = function(){      
        document.getElementById('regist').classList.remove("open");
    }
    //註冊，點擊登入，切換至登入燈箱
    document.getElementById('alreadyMember').onclick = function(){   
        document.getElementById('regist').classList.remove("open");
        document.getElementById('login').classList.add("open");
    }
    //註冊，點擊註冊紐，切換到登入狀態
    document.getElementById('registFormBtn').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('regist').classList.remove("open");
    }
    //註冊，點擊FB註冊紐，切換到登入狀態
    document.getElementById('registFB').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('regist').classList.remove("open");
    }
    //註冊，點擊Google註冊紐，切換到登入狀態
    document.getElementById('registGoogle').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('regist').classList.remove("open");
    }
},false);