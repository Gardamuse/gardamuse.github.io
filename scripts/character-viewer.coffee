---
---

maxframe = 17

maxFrameHeight = 1000
framesPerRow = 8 # Constant
frameRatio = 3.0/5.0 # Constant, Width / Height
frameHeight = 550
frameWidth = 0 # Calculated from frameHeight

@updateViewerSize = ->
  console.log(window.innerHeight)
  vmargin = 90
  hmargin = 20
  if ( window.innerHeight > 1000 + vmargin && window.innerWidth > (1000 * frameRatio) + hmargin)
    frameHeight = 1000
  else if ( window.innerHeight > 800 + vmargin && window.innerWidth > (800 * frameRatio) + hmargin)
    frameHeight = 800
  else if ( window.innerHeight > 600 + vmargin && window.innerWidth > (600 * frameRatio) + hmargin)
    frameHeight = 600
  else if ( window.innerHeight > 400 + vmargin && window.innerWidth > (400 * frameRatio) + hmargin)
    frameHeight = 400
  else if ( window.innerHeight > 200 + vmargin && window.innerWidth > (200 * frameRatio) + hmargin)
    frameHeight = 200
  else
    frameHeight = 100

  frameWidth = frameHeight * frameRatio
  #document.getElementById('slider').style.width = frameWidth + "px"
  document.getElementById('viewer').style.backgroundSize = frameWidth * framesPerRow + "px"
  document.getElementById('viewer').style.width = frameWidth + "px"
  document.getElementById('viewer').style.height = frameHeight + "px"
  document.getElementById('centerer').style.width = frameWidth + "px"
  updateSlider()

@setupSlider = (frames, imagepath) ->
  maxframe = frames - 1
  document.getElementById('viewer').style.backgroundImage = "url('" + imagepath + "')"
  updateSlider()

@updateSlider = ->
  iq = document.getElementById('slider').value
  #console.log(iq)
  frame = Math.floor(maxframe * getBimboFactor(iq));
  document.getElementById('iq').innerHTML = "IQ: " + iq
  document.getElementById('viewer').style.backgroundPosition = - frameWidth * (frame % 8) + 'px ' + - frameHeight * (Math.floor(frame / 8)) + 'px'

@getBimboFactor = (iq) ->
  #Max IQ: 180. Min IQ: 40. Average IQ: 120.
  #Max BF: 1.0. Min BF: 0.0. Average BF: 0.5.
  value = 0
  if (iq > 180)
    value = 0
  else if (iq < 40)
    value = 1
  else
    p1 = 2.6786e-05
    p2 = -0.013036
    p3 = 1.4786
    value = p1 * Math.pow(iq, 2) + (p2 * iq) + p3
  if (value > 1)
    value = 1
  else if (value < 0)
    value = 0
  return value

updateViewerSize()
setupSlider(16, "/assets/chastity.png")
updateSlider()
slider.oninput = updateSlider
window.onresize = updateViewerSize
