window.addEventListener("load",function(){
    //點擊宅配
    document.getElementById('deliver1').onclick = function(){     
        document.getElementById('deliverDetail1').style.display = 'block';
        document.getElementById('deliverDetail2').style.display = 'none';
    }
    //點擊來店黏貼
    document.getElementById('deliver2').onclick = function(){     
        document.getElementById('deliverDetail1').style.display = 'none';
        document.getElementById('deliverDetail2').style.display = 'block';
        document.getElementById('chooseDeliver2').style.display = 'block';
    }
    //點擊確定，關閉來店黏貼提示燈箱
    document.getElementById('chooseDeliver2Go').onclick = function(){     
        document.getElementById('chooseDeliver2').style.display = 'none';
    }
},false);