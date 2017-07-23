---
---

maxframe = 17

@setupSlider = (frames, imagepath) ->
  maxframe = frames - 1
  document.getElementById('viewer').style.backgroundImage = "url('" + imagepath + "')";
  updateSlider()

@updateSlider = ->
  console.log("iq " + iq + ", oldIq " + oldIq)
  iq = document.getElementById('slider').value
  frame = Math.floor(maxframe * getBimboFactor(iq));
  width = 300
  height = 500
  document.getElementById('iq').innerHTML = "IQ: " + iq
  document.getElementById('viewer').style.backgroundPosition = - width * (frame % 8) + 'px ' + - height * (Math.floor(frame / 8)) + 'px'

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

setupSlider(16, "/assets/chastity.png")
updateSlider()
slider.oninput = updateSlider
