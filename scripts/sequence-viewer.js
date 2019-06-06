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
      if (Date.now() - actionTime < 0) return
      actionTime = Date.now()

      // Bind keys to actions
      const key = event.key.toLowerCase();
      if (key == 'n') {
         next()
      } else if (key == 'b') {
         prev()
      } else if (key == 'f') {
         toggleFullscreen()
      } else if (key == 'a') {
         nextCharacter(-1)
      }else if (key == 'd') {
         nextCharacter(1)
      }
   });

   // Select the default character
   select(character.name);
});

let characterSelect = document.getElementById('character-select')
let characterHTML = ""
console.log(characters);
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

async function nextImage(oldImage, newImage) {
   // Show old image in buffer
   buffer.style.backgroundImage = oldImage
   await wait(0)
   buffer.style.opacity = 1

   // Make front layer invisible
   viewer.style.opacity = 0
   console.log(1);
   // Load new image into front layer and wait until loaded
   viewer.style.backgroundImage = newImage
   await wait(0)
   console.log(2);
   // Switch visible
   buffer.style.opacity = 0
   viewer.style.opacity = 1
}

function step(stepSize) {
   let c = character
   if (1 <= c.currentFrame + stepSize && c.currentFrame + stepSize <= c.length) {

      let oldImage = `url(/projects/sequence-viewer/${c.name}/${c.currentFrame.toString().padStart(2, "0")}.png)`
      c.currentFrame += stepSize
      let newImage = `url(/projects/sequence-viewer/${c.name}/${(c.currentFrame).toString().padStart(2, "0")}.png)`

      nextImage(oldImage, newImage)
   }
}

function next() {
   step(1)
}

function prev() {
   step(-1)
}

function select(name) {
   for (let i = 0; i < characters.length; i++) {
      let c = characters[i]
      if (c.name == name) {
         character = c
         step(0)
         break
      }
   }
}

function toggleFullscreen() {
   if (app.classList.contains("fullscreen")) {
      app.classList.remove("fullscreen")
   } else {
      app.classList.add("fullscreen")
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
