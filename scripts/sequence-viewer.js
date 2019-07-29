---
layout: none
---
let app = document.getElementById("app")
let viewer = document.getElementById("sequence-view")
let buffer = document.getElementById("buffer")

let characters = {{ site.data.characters | jsonify }}
for (let c of characters) {
   c.currentFrame = 1
}
//let characters = [
//   {
//      name: "rebecca",
//      length: 20,
//      currentFrame: 1
//   },
//   {
//      name: "william",
//      length: 43,
//      currentFrame: 1
//   },
//   {
//      name: "chastity",
//      length: 18,
//      currentFrame: 1
//   }
//]

let character = characters[0];
let actionTime = Date.now();

document.addEventListener('DOMContentLoaded', () => {
   'use strict';

   document.addEventListener('keydown', event => {
      // Make sure actions aren't taken too quickly. Images need to load.
      if (Date.now() - actionTime < 50) return
      actionTime = Date.now()

      // Bind keys to actions
      const key = event.key.toLowerCase();
      if (key == 'n') {
         next()
      } else if (key == 'b') {
         prev()
      } else if (key == 'r') {
         gotoFrame(1)
      } else if (key == 'f') {
         toggleFullscreen()
      } else if (key == 'a') {
         nextCharacter(-1)
      }else if (key == 'd') {
         nextCharacter(1)
      }else if (key == 'p') {
         playpause()
      }
   });

   // Select the default character
   select(character.name);
});

let characterSelect = document.getElementById('character-select')
let characterHTML = ""
for (let i = 0; i < characters.length; i++) {
   let c = characters[i]
   characterHTML += `
   <a class="project-card">
      <div class="thumb-container">
         <img class="thumb" src="/projects/sequence-viewer/${c.name}/01.png"></img>
      </div>
   </a>`
}
//characterSelect.innerHTML = characterHTML

let busy = false

function wait(ms) {
   return new Promise((r, j) => {
      setTimeout(r, ms)
   })
}

function showWhenLoaded(element, image) {
   let img = new Image()
   img.onload = function() {
      element.style.backgroundImage = "url(" + this.src + ")"
   }
   img.src = image.src
}

async function nextImage(oldImage, newImage) {
   // Show old image in buffer
   //buffer.style.backgroundImage = `url(${oldImage.src})`
   //await wait(50)
   buffer.style.opacity = 1
   showWhenLoaded(buffer, oldImage)
   await wait(50)


   // Make front layer invisible
   //viewer.style.opacity = 0
   // Load new image into front layer and wait until loaded
   showWhenLoaded(viewer, newImage)
   //await wait(0)
   // Switch visible
   //buffer.style.opacity = 0
   //viewer.style.opacity = 0.99
}

function step(stepSize) {
   let c = character
   if (1 <= c.currentFrame + stepSize && c.currentFrame + stepSize <= c.length) {

      let oldImage = loadedImages[c.currentFrame]
      c.currentFrame += stepSize
      let newImage = loadedImages[c.currentFrame]

      nextImage(oldImage, newImage)
   }
}

function gotoFrame(frameNr) {
   let c = character
   if (1 <= frameNr && frameNr <= c.length) {
      let oldImage = loadedImages[c.currentFrame]
      c.currentFrame = frameNr
      let newImage = loadedImages[c.currentFrame]

      nextImage(oldImage, newImage)
   }
}

function next() {
   step(1)
}

function prev() {
   step(-1)
}

let paused = true
function playpause() {
   let button = document.getElementById("playpause")

   if (paused) {
      // Start playing
      paused = false
      play()

      // Button should now be for pausing
      button.innerHTML = "<u>P</u>ause"
   } else {
      // Pause
      paused = true
      button.innerHTML = "<u>P</u>lay"
   }

}

async function play() {
   await wait(200)
   next()
   await wait(800)
   if (!paused) play()
}

async function select(name) {
   for (let i = 0; i < characters.length; i++) {
      let c = characters[i]
      if (c.name == name) {
         character = c
         await loadCharacter(c) // Preload character
         //await wait(500)
         step(0) // Update view with the current frame of the selected character
         break
      }
   }
}

// Preloads all images of a character
let loadedImages = new Array()
function loadCharacter(c) {
   for (let i = 1; i < c.length+1; i++) {
      loadedImages[i] = new Image()
      loadedImages[i].src = `/projects/sequence-viewer/${c.name}/${(i).toString().padStart(2, "0")}.png`
   }
}

function toggleFullscreen() {
   if (app.classList.contains("fullscreen")) {
      app.classList.remove("fullscreen")
      document.body.style.overflow = "visible"
   } else {
      app.classList.add("fullscreen")
      document.body.style.overflow = "hidden"
   }
}

function nextCharacter(step = 1) {
   for (let i = 0; i < characters.length; i++) {
      if (characters[i].name == character.name) {
         let nextIndex = i + step
         if (i + step >= characters.length) {
            nextIndex = 0
         } else if (i + step < 0) {
            nextIndex = characters.length - 1
         }
         select(characters[nextIndex].name)
         break
      }
   }
}
