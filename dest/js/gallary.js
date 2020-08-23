window.addEventListener("load",function(){
    //點擊卡片，彈出商品詳情燈箱
    document.getElementById('product1').onclick = function(){     
        document.getElementById('productLightbox-bg').style.display = 'block';
    }
    //點擊叉叉，關閉商品詳情燈箱
    document.getElementById('productCross').onclick = function(){     
        document.getElementById('productLightbox-bg').style.display = 'none';
    }
    //點擊like
    document.getElementById('like').onclick = function(){
        document.getElementById('like').style.border = '1px solid white';
        document.getElementById('like').style.color = 'white';
        document.getElementById('like').style.backgroundColor = 'rgb(231,165,177)';
    }
},false);