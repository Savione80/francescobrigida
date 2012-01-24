(function() {
  var Brigida, Resize;
  $(document).ready(function() {
    var brigida, resize;
    brigida = new Brigida();
    brigida.init();
    resize = new Resize();
    resize.init();
    $(".wrap-video").delegate("a.play-video", "click", brigida.openVideo);
    return $(".video-container").delegate("a.logo-back", "click", brigida.closeVideo);
  });
  Brigida = (function() {
    function Brigida() {}
    Brigida.prototype.init = function() {};
    Brigida.prototype.openVideo = function(ev) {
      var iframe;
      $(".video-container").show();
      iframe = $("<iframe class='video' src='http://player.vimeo.com/video/35192221?title=&byline=0&portrait=0&autoplay=1' width='100%' height='100%' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
      $(".video-container").append(iframe);
      return ev.preventDefault();
    };
    Brigida.prototype.closeVideo = function(ev) {
      $(".video-container").hide();
      $(".video-container iframe").remove();
      return ev.preventDefault();
    };
    return Brigida;
  })();
  Resize = (function() {
    function Resize() {}
    Resize.prototype.init = function() {
      var render, support;
      support = $("html").hasClass("backgroundsize");
      render = support ? this.renderRealBrowser : this.renderIe;
      $(window).resize(render);
      return render();
    };
    Resize.prototype.renderIe = function() {
      var crop, height, pageHeight, pageWidth, width;
      width = pageWidth = $(window).width();
      height = width * 0.58;
      pageHeight = $(window).height();
      if (height >= pageHeight) {
        crop = -0.5 * (height - pageHeight);
        return $(".full-screen").css({
          width: width,
          height: height,
          marginBottom: crop * 2
        });
      } else {
        width = height * 1.69;
        crop = -0.5 * (width - pageWidth);
        return $(".full-screen").css({
          width: width,
          height: height,
          marginRight: crop * 2
        });
      }
    };
    Resize.prototype.renderRealBrowser = function() {
      var height;
      height = $(window).height();
      return $(".full-screen").css({
        height: height
      });
    };
    return Resize;
  })();
}).call(this);
