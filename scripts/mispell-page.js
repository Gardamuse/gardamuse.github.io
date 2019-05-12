
function misspellPage() {
   //console.log("yeehaw");
   let ps = document.getElementsByTagName("p");
   for (p of ps) {
      p.innerHTML = mispell.bimbofy(p.innerHTML, 0.4);
   }
}
