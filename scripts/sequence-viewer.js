let app = document.getElementById("app")
let viewer = document.getElementById("sequence-view")
let buffer = document.getElementById("buffer")

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        if (key == 'n') {
            next()
        } else if (key == 'b') {
           prev()
        } else if (key == 'f') {
           toggleFullscreen()
        }
    });
});

let characters = [
   {
      name: "rebecca",
      length: 20
   },
   {
      name: "william",
      length: 43
   }
]

let busy = false;
let index = 1;
function wait(ms) {
   return new Promise( (r, j) => {
      setTimeout(r, ms)
   })
}

async function nextImage(oldImage, newImage) {
   // Show old image in buffer
   buffer.style.backgroundImage = oldImage
   buffer.style.opacity = 1

   // Make front layer invisible
   viewer.style.opacity = 0

   // Load new image into front layer and wait until loaded
   viewer.style.backgroundImage = newImage
   await wait(40)

   // Switch visible
   buffer.style.opacity = 0
   viewer.style.opacity = 1
}

function step(stepSize) {
   let c = characters[1]
   if (1 <= index + stepSize && index + stepSize <= c.length) {

      let oldImage = `url(/projects/sequence-viewer/${c.name}/${index.toString().padStart(2, "0")}.png)`
      index += stepSize
      let newImage = `url(/projects/sequence-viewer/${c.name}/${(index).toString().padStart(2, "0")}.png)`

      nextImage(oldImage, newImage)
   }
}

function next() {
   step(1)
}

function prev() {
   step(-1)
}

function toggleFullscreen() {
   if (app.classList.contains("fullscreen")) {
      app.classList.remove("fullscreen")
   } else {
      app.classList.add("fullscreen")
   }
}
