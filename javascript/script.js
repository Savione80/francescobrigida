
((function(){var a,b;$(document).ready(function(){var c,d;return c=new a,c.init(),d=new b,d.init(),$(".wrap-video").delegate("a.play-video","click",c.openVideo),$(".video-container").delegate("a.logo-back","click",c.closeVideo)}),a=function(){function a(){}return a.prototype.init=function(){},a.prototype.openVideo=function(a){var b;return $(".video-container").show(),b=$("<iframe class='video' src='http://player.vimeo.com/video/35192221?title=&byline=0&portrait=0&autoplay=1' width='100%' height='100%' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"),$(".video-container").append(b),a.preventDefault()},a.prototype.closeVideo=function(a){return $(".video-container").hide(),$(".video-container iframe").remove(),a.preventDefault()},a}(),b=function(){function a(){}return a.prototype.init=function(){var a,b;return b=$("html").hasClass("backgroundsize"),a=b?this.renderRealBrowser:this.renderIe,$(window).resize(a),a()},a.prototype.renderIe=function(){var a,b,c,d,e;return e=void 0,d=void 0,b=void 0,c=void 0,a=void 0,e=d=$(window).width(),b=e*.58,c=$(window).height(),b>=c?(a=-0.5*(b-c),$(".full-screen").css({width:e,height:b,marginBottom:a*2})):(e=b*1.69,a=-0.5*(e-d),$(".full-screen").css({width:e,height:b,marginRight:a*2}))},a.prototype.renderRealBrowser=function(){var a;return a=void 0,a=$(window).height(),$(".full-screen").css({height:a})},a}()})).call(this)