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
         <img class="thumb" src="/projects/bimbo-booth/${c.name}/01.png"></img>
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

   // Display info
   let nameF = document.getElementById("nameF")
   let iqF = document.getElementById("iqF")
   let jobF = document.getElementById("jobF")
   let statusF = document.getElementById("statusF")

   nameF.innerHTML = getName(character);
   iqF.innerHTML = getIQ(character);
   jobF.innerHTML = getJob(character);
   statusF.innerHTML = getStatus(character);
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
   console.log(character.currentFrame, character.length);
   if (character.currentFrame == character.length) {
      playpause()
      return
   }
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
      loadedImages[i].src = `/projects/bimbo-booth/${c.name}/${(i).toString().padStart(2, "0")}.png`
   }
}

function toggleFullscreen() {
   if (app.classList.contains("fullscreen")) {
      // Fullscreen off
      app.classList.remove("fullscreen")
      document.body.style.overflow = "visible"
      cancelFullscreen();
   } else {
      // Fullscreen on
      app.classList.add("fullscreen")
      document.body.style.overflow = "hidden"
      requestFullscreen();
   }
}

function requestFullscreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
}

function cancelFullscreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  cancelFullScreen.call(doc);
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

function getBimboFactor(character) {
   return getBimboFactorWithOffset(character, 0);
}

function getBimboFactorWithOffset(character, offset) {
   let c = character;
   return ((c.currentFrame + offset - 1) / (c.length - 1))
}

function getIQ(character) {
   let c = character;
   if (c.iq == undefined) {
      return Math.round((1 - getBimboFactor(c)) * 100 + 40)
   } else {
      return Math.round(getValue(c, "iq"))
   }
}

/**
* Returns the appropriate entry in the given array property of a character.
*/
function getValue(character, propertyName) {
   //console.log("===", propertyName, "===");
   let c = character
   let property = c[propertyName]
   if (property == undefined) return undefined

   // Create list with the start bimbofactor for each image frame
   let frameBfs = []
   for (let i = 0; i < c.length; i++) {
      let frameBf = i / c.length
      frameBfs.push(frameBf)
   }

   // Create list with the start bf for each property entry
   let propertyStartBfs = []
   let propertyEndBfs = []
   let nextBf = 0;
   for (let i = 0; i < property.length; i++) {
      let propertyStartBf = 0
      let p = property[i]
      if (p.start != undefined && p.end != undefined) {
         // If this entry is labeled

         propertyStartBf = frameBfs[p.start]
         propertyEndBf = frameBfs[p.end]
         nextBf = frameBfs[p.end]
      } else {
         // If it is not labeled
         propertyStartBf = nextBf
         //console.log("First next:", nextBf);

         // Find the BF start for the next labeled entry
         let nextStartExists = false
         for (var j = i+1; j < property.length; j++) {
            let p = property[j]
            if (p.start != undefined && p.end != undefined) {
               nextBf = frameBfs[p.start]
               nextStartExists = true
               break
            }
         }
         if (!nextStartExists) {
            // If there are no more labeled entries, we use maximum BF
            nextBf = 1
         }

         // Distribute the unlabeled entries until the next labeled one
         let unlabeledEntries = j - i
         let usableBf = nextBf - propertyStartBf
         //console.log("next - property:", usableBf, propertyStartBf);
         nextBf = propertyStartBf + usableBf / unlabeledEntries
         propertyEndBf = nextBf
         //console.log("usable:", usableBf);
      }
      //console.log("prop:", propertyStartBf);
      propertyStartBfs.push(propertyStartBf)
      propertyEndBfs.push(propertyEndBf)
   }

   // Select the entry index we want based on current BF
   let bf = getBimboFactor(c)
   for (let i = 0; i < propertyStartBfs.length; i++) {
      //console.log(propertyName, bf, propertyStartBfs[i], propertyStartBfs[i+1]);
      if (propertyStartBfs[i+1] == undefined) {
         // If this is the last entry

         var propertyEntryIndex = propertyStartBfs.length - 1
         var propertyEntryIndexNext = propertyStartBfs.length - 1
      }
      if (bf >= propertyStartBfs[i] && bf < propertyStartBfs[i+1]) {
         var propertyEntryIndex = i
         var propertyEntryIndexNext = i + 1
         break
      }
   }

   // Get the entry
   //console.log(propertyStartBfs);
   let propertyEntry = property[propertyEntryIndex]
   let propertyEntryNext = property[propertyEntryIndexNext]
   let propertyText = getEntryText(propertyEntry)
   let propertyTextNext = getEntryText(propertyEntryNext)

   // If the entry is numerical and we are not on a labeled entry
   // tween the number smoothly to the next entry value
   //console.log(c.currentFrame, property[propertyEntryIndex].end);
   // TODO 0-index
   if (typeof propertyText == "number" &&
   c.currentFrame - 1 >= propertyEntry.end) {
      // Number of image frames the tween will last
      let tweenFrames = propertyEntryNext.start - (propertyEntry.end - 1)
      //console.log(tweenFrames);
      //console.log(propertyStartBfs);
      //console.log(propertyEndBfs);

      // The amount to add to current value at tweenFactor = 1
      let maxTween = propertyTextNext - propertyText
      // Remove one frame worth of value since it should not arrive
      // at the regular maxTween until the frame after the tween is done
      if (tweenFrames == 0) {
         maxTween = 0
      } else {
         maxTween = maxTween - maxTween * (1 / tweenFrames)
      }

      let thisBf = propertyEndBfs[propertyEntryIndex]
      //let thisBf = frameBfs[c.currentFrame - 1]
      let nextBf = propertyStartBfs[propertyEntryIndexNext]
      if (nextBf == thisBf) {
         var tweenFactor = (bf - thisBf) / 1
      } else {
         var tweenFactor = (bf - thisBf) / (nextBf - thisBf)
      }
      //console.log(propertyText, propertyTextNext, tweenFactor, maxTween, "=", propertyText + tweenFactor * maxTween);
      return propertyText + tweenFactor * maxTween
   }

   return propertyText;
}

function getEntryText(entry) {
   if (entry.text != undefined) {
      return entry.text
   }
   return entry
}

function getName(character) {
   let value = getValue(character, "names");
   if (value == undefined) return "Unknown"
   return value
}

function getJob(character) {
   let value = getValue(character, "jobs");
   if (value == undefined) return "Unknown"
   return value
}

function getStatus(character) {
   let value = getValue(character, "status");
   if (value == undefined) return "Nominal"
   return value
}
