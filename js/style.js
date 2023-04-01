
  window.addEventListener('load', fg_load)

    function fg_load() {
        document.getElementById('loading').style.display = 'none'
    }


    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    
      var that = this;
      var delta = 200 - Math.random() * 100;
    
      if (this.isDeleting) {
        delta /= 2;
      }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function () {
        that.tick();
      }, delta);
    };
    
    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };

    //up button
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100)    // Sayfa ne kadar aşağı kayarsa buton görünsün. 100 sayısı = Kaydırma çubuğunun piksel konumu. Bu sayı değiştirilebilir.
          $("#up").fadeIn(400);    // Yukarı çık butonu ne kadar hızla ortaya çıksın. 400 milisaniye = 0,4 saniye. Bu sayı değiştirilebilir.
      else 
          $("#up").fadeOut(400);    // Yukarı çık butonu ne kadar hızla ortadan kaybolsun. 400 milisaniye = 0,4 saniye. Bu sayı değiştirilebilir.
  });
  $(document).ready(function(){
      $("#up").click(function(){    // Yukarı çık butonuna tıklanıldığında aşağıdaki satır çalışır.
          $("html, body").animate({ scrollTop: "0" }, 200);    // Sayfa ne kadar hızla en yukarı çıksın.
          // 0 sayısı sayfanın en üstüne çıkılacağını belirtir.
          return false;
      });
  });
  
  
  