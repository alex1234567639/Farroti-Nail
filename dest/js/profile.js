//tab切換內容
function tabChange(evt, tabName) {
    var i, tabcontent, tablinks; 

    //將所有 class="tabcontent" 的標籤隱藏
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //將所有 class="tablinks" 的 class="active" 移除
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show 出點擊的tab內容並加上 class="active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload=function(){
    //預設載入網頁後點擊第一個tab
    document.getElementById("dashboardRightTopTabButton1").click();

    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawCharts);
    function drawCharts() {
      var barData = google.visualization.arrayToDataTable([
        ['1月', '收益統計(單位：新台幣)'],
        ['2月',  10050],
        ['3月',  13700],
        ['4月',  6600],
        ['5月',  10300],
        ['6月',  10000],
        ['7月',  11700],
        ['8月',  6600]
      ]);
      // set bar chart options
      var barOptions = {
        focusTarget: 'category',
        backgroundColor: 'transparent',
        colors: ['#D3354F', 'tomato'],
        fontName: 'Open Sans',
        chartArea: {
          left: 50,
          top: 10,
          width: '100%',
          height: '70%'
        },
        bar: {
          groupWidth: '60%'
        },
        hAxis: {
          textStyle: {
            fontSize: 11
          }
        },
        vAxis: {
          minValue: 0,
          maxValue: 15000,
          baselineColor: '#DDD',
          gridlines: {
            color: '#DDD',
            count: 4
          },
          textStyle: {
            fontSize: 11
          }
        },
        legend: {
          position: 'bottom',
          textStyle: {
            fontSize: 12
          }
        },
        animation: {
          duration: 1200,
          easing: 'out',
          startup: true
        }
      };
      // draw bar chart twice so it animates
      var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
      barChart.draw(barData, barOptions);
    }
}

