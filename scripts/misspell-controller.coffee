---
---

#import * as mispell from './mispell.js'

terminal = document.getElementById("terminal")
output = document.getElementById("output")
iqDisplay = document.getElementById("iqDisplay")
bimbofactor = 0

text = ""

terminal.value = ""
#output.innerHTML = bimboMisspell.bimbofy(text, bimbofactor)

@updateTerminal = (e) ->
   #if (e.keyCode == 13) # Enter
   #   console.log(bimbofactor)
   #   output.innerHTML = '<p>' + bimboMisspell.bimbofy(terminal.value, bimbofactor).replace(/(\n|\r|\r\n)/g, '</p><p>')
   #   e.preventDefault()

@updateSlider = ->
   bimbofactor = (100 - document.getElementById('slider').value) / 100
   iqDisplay.innerHTML = 'IQ: ' + Math.round((1-bimbofactor) * 100 + 40)

@bimbofyButton = (e) ->
   console.log(bimbofactor)
   output.innerHTML = '<p>' + mispell.bimbofy(terminal.value, bimbofactor).replace(/(\n|\r|\r\n)/g, '</p><p>')
