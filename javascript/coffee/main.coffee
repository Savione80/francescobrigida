brigida =
  init: ->

  OpenVideo: (ev) ->
    $(".video-container").show()
    $(".video-container").append "<iframe class=\"video\" src=\"http://player.vimeo.com/video/33824912?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
    ev.preventDefault()

  CloseVideo: (ev) ->
    $(".video-container").hide()
    $(".video-container iframe").remove()
    ev.preventDefault()

$(document).ready ->
  brigida.init()
  resize.initialize()
  $(".wrap-video").delegate "a.play-video", "click", brigida.OpenVideo
  $(".video-container").delegate "a.logo-back", "click", brigida.CloseVideo

resize =
  initialize: ->
    support = ($("html")).hasClass("backgroundsize")
    resize.render = (if support then resize.renderRealBrowser else resize.renderIe)
    $(window).resize ->
      resize.render()

    resize.render()

  renderIe: ->
    crop = undefined
    height = undefined
    pageHeight = undefined
    pageWidth = undefined
    width = undefined
    pageWidth = width = $(window).width()
    pageHeight = $(window).height()
    height = width * 0.58
    if height >= (pageHeight)
      crop = (height - (pageHeight)) / -2
      ($(".full-screen")).css
        height: height
        width: width
        marginBottom: crop * 2
    else
      width = height * 1.69
      crop = (width - pageWidth) / -2
      (".full-screen").css
        height: height
        width: width
        marginRight: crop * 2

  renderRealBrowser: ->
    height = undefined
    height = $(window).height()
    $(".full-screen").css height: height