(function() {
<<<<<<< HEAD
  var brigida, resize;
  brigida = {
    init: function() {},
    OpenVideo: function(ev) {
      $(".video-container").show();
      $(".video-container").append("<iframe class=\"video\" src=\"http://player.vimeo.com/video/33824912?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
      return ev.preventDefault();
    },
    CloseVideo: function(ev) {
      $(".video-container").hide();
      $(".video-container iframe").remove();
      return ev.preventDefault();
    }
  };
  $(document).ready(function() {
    brigida.init();
    resize.initialize();
    $(".wrap-video").delegate("a.play-video", "click", brigida.OpenVideo);
    return $(".video-container").delegate("a.logo-back", "click", brigida.CloseVideo);
  });
  resize = {
    initialize: function() {
      var support;
      support = ($("html")).hasClass("backgroundsize");
      resize.render = (support ? resize.renderRealBrowser : resize.renderIe);
      $(window).resize(function() {
        return resize.render();
      });
      return resize.render();
    },
    renderIe: function() {
      var crop, height, pageHeight, pageWidth, width;
      crop = void 0;
      height = void 0;
      pageHeight = void 0;
      pageWidth = void 0;
      width = void 0;
      pageWidth = width = $(window).width();
      pageHeight = $(window).height();
      height = width * 0.58;
      if (height >= pageHeight) {
        crop = (height - pageHeight) / -2;
        return ($(".full-screen")).css({
          height: height,
          width: width,
=======
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
      width = void 0;
      pageWidth = void 0;
      height = void 0;
      pageHeight = void 0;
      crop = void 0;
      width = pageWidth = $(window).width();
      height = width * 0.58;
      pageHeight = $(window).height();
      if (height >= pageHeight) {
        crop = -0.5 * (height - pageHeight);
        return $(".full-screen").css({
          width: width,
          height: height,
>>>>>>> 471347c7a831dcba43c989f1b32f265465f81f43
          marginBottom: crop * 2
        });
      } else {
        width = height * 1.69;
<<<<<<< HEAD
        crop = (width - pageWidth) / -2;
        return ".full-screen".css({
          height: height,
          width: width,
          marginRight: crop * 2
        });
      }
    },
    renderRealBrowser: function() {
=======
        crop = -0.5 * (width - pageWidth);
        return $(".full-screen").css({
          width: width,
          height: height,
          marginRight: crop * 2
        });
      }
    };
    Resize.prototype.renderRealBrowser = function() {
>>>>>>> 471347c7a831dcba43c989f1b32f265465f81f43
      var height;
      height = void 0;
      height = $(window).height();
      return $(".full-screen").css({
        height: height
      });
<<<<<<< HEAD
    }
  };
=======
    };
    return Resize;
  })();
>>>>>>> 471347c7a831dcba43c989f1b32f265465f81f43
}).call(this);
