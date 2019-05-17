let viewer = document.getElementById("sequence-view")
let buffer = document.getElementById("buffer")

viewer.ontransitionend = () => {
   console.log("done");
   busy = false;
}

let characters = [
   {
      name: "rebecca",
      length: 20
   }
]

let busy = false;
let index = 1;
function wait(ms) {
   return new Promise( (r, j) => {
      setTimeout(r, ms)
   })
}

async function next() {
   if (busy) return
   busy = true

   console.log(1, viewer.style.backgroundImage)
   let c = characters[0]
   let oldImage = `url(/projects/sequence-viewer/${c.name}/${index.toString().padStart(2, "0")}.png)`
   index++
   let newImage = `url(/projects/sequence-viewer/${c.name}/${index.toString().padStart(2, "0")}.png)`

   // Move old image to buffer
   buffer.style.backgroundImage = oldImage

   // Make front layer invisible
   //viewer.style.transition = "none"
   viewer.style.opacity = 0

   //await wait(1)
   // Set new image and fade in
   viewer.style.backgroundImage = newImage
   //viewer.style.transition = "opacity 1s"

   viewer.style.opacity = 1

   console.log(2, viewer.style.backgroundImage)
}
