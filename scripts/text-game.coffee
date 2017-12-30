---
---

terminal = document.getElementById("terminal")

lastContent = ""
lastInput = ""
terminal.value = "[SYSTEM] Welcome <user>, to this experience!\n"
interpreter = null

username = "<user>"
iq = 100

@updateTerminal = (e) ->
  content = terminal.value
  if (e.keyCode == 13) # Enter
    e.preventDefault()
    lastInput = content.substr(content.lastIndexOf("\n")+2)
    console.log(lastInput)
    if (lastInput == "")
      terminal.value = clearLastLine(content)
      return

    content = clearLastLine(content)
    terminal.value = content

    if (interpreter != null)
      interpreter(lastInput.toLowerCase())

    terminal.value += "\n>"
    terminal.scrollTop = terminal.scrollHeight
  else if (e.keyCode == 38) # Up arrow
    e.preventDefault()
    console.log(e.keyCode + " " + lastInput)
    terminal.value += lastInput

@clearLastLine = (x) ->
  if(x.lastIndexOf("\n")>0)
    return x.substring(0, x.lastIndexOf("\n"));
  else
      return "";

@print = (s) ->
  terminal.value += "\n" + s

@sysPrint = (s) ->
  print("[SYSTEM] " + s)

@defaultInterpreter = (input) ->
  print(lastInput)
  if (input == "hello")
    sysPrint("Hello there " + username + "!")
  else if (input == "name")
    prompt("What is your name?", nameInterp)
  else if (input == "stats")
    sysPrint("[STATS]\nName: " + username + "\nIQ: " + iq)

@prompt = (q, interp) ->
  sysPrint(q)
  interpreter = interp
  return ""

@nameInterp = (input) ->
  username = input.charAt(0).toUpperCase() + input.slice(1)
  sysPrint("Welcome, " + username + "!")
  interpreter = defaultInterpreter

interpreter = defaultInterpreter
terminal.value += ">"
