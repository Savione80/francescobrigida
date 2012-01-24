$(document).ready ->
  
  brigida = new Brigida()
  brigida.init()
  
  resize = new Resize()
  resize.init()
  
  $(".wrap-video").delegate "a.play-video", "click", brigida.openVideo
  $(".video-container").delegate "a.logo-back", "click", brigida.closeVideo

class Brigida
  
  init: ->

  openVideo: (ev) ->
    
    $(".video-container").show()
    iframe = $("<iframe class='video' src='http://player.vimeo.com/video/35192221?title=&byline=0&portrait=0&autoplay=1' width='100%' height='100%' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
    $(".video-container").append iframe
    ev.preventDefault()

  closeVideo: (ev) ->
    
    $(".video-container").hide()
    $(".video-container iframe").remove()
    ev.preventDefault()

class Resize
  
  init: ->
    
    support = $("html").hasClass "backgroundsize"
    render = if support then @renderRealBrowser else @renderIe
    $(window).resize render
    render()

  renderIe: ->
    
    width = undefined
    pageWidth = undefined
    height = undefined
    pageHeight = undefined
    crop = undefined
    
    width = pageWidth = $(window).width()
    height = width * 0.58
    pageHeight = $(window).height()
    
    if height >= pageHeight
      crop = - 0.5 * (height - pageHeight)
      $(".full-screen").css {width: width, height: height, marginBottom: crop * 2}
    else
      width = height * 1.69
      crop = - 0.5 * (width - pageWidth)
      $(".full-screen").css {width: width, height: height, marginRight: crop * 2}

  renderRealBrowser: ->
    
    height = undefined
    height = $(window).height()
    $(".full-screen").css {height: height}