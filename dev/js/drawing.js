//選擇照片後顯示預覽在畫面上
window.addEventListener("load", function(){
	document.getElementById("chooseFileLabel").onchange = function(e){
        document.getElementById("showPhoto").innerHTML = `<img id="imgPreview">`;
		let file = e.target.files[0];
		let reader = new FileReader();
        reader.onload = function(){       //讀取完畢後執行function
            document.getElementById("showPhoto").style.display = 'block';
            document.getElementById("imgPreview").src = reader.result;
            document.getElementById("showPhoto2").style.display = 'block';
			document.getElementById("canvas").src = reader.result;
		}
		reader.readAsDataURL(file);
	}
})

// 照片編輯
$(function() {
    var canvas = document.getElementById('canvas');
    var img = new Image();
    img.crossOrigin = '';

    var $reset = $('#resetbtn');
    var $noise = $('#noisebtn');
    var $vintage = $('#vintagebtn');
    var $lomo = $('#lomobtn');
    var $emboss = $('#embossbtn');
    var $radialblur = $('#radialblurbtn');
    var $sunrise = $('#sunrisebtn');
    var $crossprocess = $('#crossprocessbtn');
    var $hdr = $('#hdrbtn');
  
    var $save = $('#savebtn');
    
    /* As soon as slider value changes call applyFilters */
    $('input[type=range]').change(applyFilters);
  
    function applyFilters() {
      var hue = parseInt($('#hue').val());
      var cntrst = parseInt($('#contrast').val());
      var vibr = parseInt($('#vibrance').val());
      var sep = parseInt($('#sepia').val());
  
      Caman('#canvas', img, function() {
        this.revert(false);
        this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
      });
    }
  
    /* Creating custom filters */
    Caman.Filter.register("oldpaper", function() {
      this.pinhole();
      this.noise(10);
      this.orangePeel();
      this.render();
    });
  
    Caman.Filter.register("pleasant", function() {
      this.colorize(60, 105, 218, 10);
      this.contrast(10);
      this.sunrise();
      this.hazyDays();
      this.render();
    });
  
    $reset.on('click', function(e) {
      $('input[type=range]').val(0);
      Caman('#canvas', img, function() {
        this.revert(false);
        this.render();
      });
    });
  
    /* In built filters */
  
    $noise.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.noise(10).render();
      });
    });
  
    $vintage.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.vintage().render();
      });
    });
  
    $lomo.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.lomo().render();
      });
    });
  
    $emboss.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.emboss().render();
      });
    });
  
    $radialblur.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.radialBlur().render();
      });
    });
  
    $sunrise.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.sunrise().render();
      });
    });
  
    $crossprocess.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.crossProcess().render();
      });
    });
    /* Calling multiple filters inside same function */
    $hdr.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.contrast(10);
        this.contrast(10);
        this.jarques();
        this.render();
      });
    });
    /* You can also save it as a jpg image, extension need to be added later after saving image. */
    $save.on('click', function(e) {
      Caman('#canvas', img, function() {
        this.render(function() {
          this.save('png');
        });
      });
    });
});