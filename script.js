MicroModal.init();
document.fonts.ready.then(function () {
var title = document.getElementById('Title');
var navbar = document.getElementById('navbar')
var typewriter = new Typewriter(title, {
  cursor: "_",
  loop:true,
});
typewriter
  .typeString('Frontend')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('Backend')
  .pauseFor(1000)
  .deleteChars(7)
  //.typeString("Anything But Web Design")
  .start();
var navbartype = new Typewriter(navbar.children[1], {
  cursor:'_',
  loop:false,
  delay:120,
  cursorClassName:'cur',
})
navbartype
  .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
  .typeString('Home‎‎‎‏‏‎')
  .callFunction(function(state) {state.elements.cursor.style.display = 'none';navbartype2.start()})
  .start();

var navbartype2 = new Typewriter(navbar.children[2], {
  cursor:'_',
  loop:false,
  delay:120,
  cursorClassName:'cur',
})
navbartype2
  //.pauseFor(1000)
  .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
  .typeString('Portforlio‏‏‎')
  .callFunction(function(state) {state.elements.cursor.style.display = 'none';navbartype3.start()})
var navbartype3 = new Typewriter(navbar.children[3], {
  cursor:'_',
  loop:false,
  delay:120,
  cursorClassName:'cur',
})
navbartype3
  .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
  .typeString('About Me‏‏‎')
  .callFunction(function(state) {state.elements.cursor.style.display = 'none';})
document.getElementsByClassName('cur')[0].style.display = 'none';
document.getElementsByClassName('cur')[1].style.display = 'none';
document.getElementsByClassName('cur')[2].style.display = 'none';
//fontready closing
});
