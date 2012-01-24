(function() {
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
          marginBottom: crop * 2
        });
      } else {
        width = height * 1.69;
        crop = (width - pageWidth) / -2;
        return ".full-screen".css({
          height: height,
          width: width,
          marginRight: crop * 2
        });
      }
    },
    renderRealBrowser: function() {
      var height;
      height = void 0;
      height = $(window).height();
      return $(".full-screen").css({
        height: height
      });
    }
  };
}).call(this);
