---
---

#import * as misspell from 'bimboMisspell'
terminal = document.getElementById("terminal")
output = document.getElementById("output")
bimbofactor = 0.5

text = ""

terminal.value = ""
#output.innerHTML = bimboMisspell.bimbofy(text, bimbofactor)

@updateTerminal = (e) ->
   if (e.keyCode == 13) # Enter
      console.log(bimbofactor)
      output.innerHTML = '<p>' + bimboMisspell.bimbofy(terminal.value, bimbofactor).replace(/(\n|\r|\r\n)/g, '</p><p>')
      e.preventDefault()

@updateSlider = ->
  bimbofactor = document.getElementById('slider').value / 100
